from __future__ import annotations

import os
import smtplib
import time
from email.message import EmailMessage
from typing import Literal

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field, field_validator

load_dotenv()

app = FastAPI(title="Växjö Eltjänst API", version="1.0.0")

origins = [x.strip() for x in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",") if x.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

class ContactPayload(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    company: str = Field(default="", max_length=120)
    email: EmailStr
    phone: str = Field(min_length=5, max_length=40)
    customer_type: str = Field(default="Privatperson", max_length=60)
    service: str = Field(default="Elinstallation", max_length=100)
    address: str = Field(default="", max_length=180)
    message: str = Field(min_length=10, max_length=2000)
    consent: bool
    website: str = Field(default="", max_length=200)

    @field_validator("name", "company", "phone", "customer_type", "service", "address", "message", "website", mode="before")
    @classmethod
    def trim_strings(cls, value):
        return value.strip() if isinstance(value, str) else value

class Review(BaseModel):
    id: str
    author: str
    rating: int = Field(ge=1, le=5)
    text: str
    date: str | None = None
    source: Literal["google", "manual"] = "google"

_rate_limit: dict[str, list[float]] = {}

def check_rate_limit(ip: str) -> None:
    now = time.time()
    window = 60.0
    max_requests = 5
    recent = [t for t in _rate_limit.get(ip, []) if now - t < window]
    if len(recent) >= max_requests:
        raise HTTPException(status_code=429, detail="För många försök. Vänta en stund och försök igen.")
    recent.append(now)
    _rate_limit[ip] = recent


def send_contact_email(payload: ContactPayload) -> bool:
    host = os.getenv("SMTP_HOST", "").strip()
    username = os.getenv("SMTP_USERNAME", "").strip()
    password = os.getenv("SMTP_PASSWORD", "")
    from_email = os.getenv("CONTACT_FROM_EMAIL", username).strip()
    to_email = os.getenv("CONTACT_TO_EMAIL", "mathias@vaxjoeltjanst.se").strip()
    if not host or not from_email or not to_email:
        return False

    msg = EmailMessage()
    msg["Subject"] = f"Ny offertförfrågan – {payload.service}"
    msg["From"] = from_email
    msg["To"] = to_email
    msg["Reply-To"] = str(payload.email)
    msg.set_content(
        f"Namn: {payload.name}\n"
        f"Företag: {payload.company or '-'}\n"
        f"E-post: {payload.email}\n"
        f"Telefon: {payload.phone}\n"
        f"Kundtyp: {payload.customer_type}\n"
        f"Tjänst: {payload.service}\n"
        f"Plats/adress: {payload.address or '-'}\n\n"
        f"Meddelande:\n{payload.message}\n"
    )

    port = int(os.getenv("SMTP_PORT", "587"))
    use_tls = os.getenv("SMTP_USE_TLS", "true").lower() == "true"
    with smtplib.SMTP(host, port, timeout=15) as server:
        if use_tls:
            server.starttls()
        if username:
            server.login(username, password)
        server.send_message(msg)
    return True


@app.get("/api/health")
def health():
    return {"ok": True}


@app.post("/api/contact")
def contact(payload: ContactPayload, request: Request):
    ip = request.client.host if request.client else "unknown"
    check_rate_limit(ip)
    if payload.website:
        return {"ok": True, "message": "Tack!"}
    if not payload.consent:
        raise HTTPException(status_code=422, detail="Du måste godkänna behandling av personuppgifter.")

    try:
        emailed = send_contact_email(payload)
    except Exception as exc:
        raise HTTPException(status_code=502, detail="Förfrågan kunde inte levereras via e-post.") from exc

    return {
        "ok": True,
        "message": "Förfrågan mottagen.",
        "email_delivery_configured": emailed,
    }


async def google_places_reviews() -> list[Review]:
    api_key = os.getenv("GOOGLE_PLACES_API_KEY", "").strip()
    place_id = os.getenv("GOOGLE_PLACE_ID", "").strip()
    if not api_key or not place_id:
        return []

    url = f"https://places.googleapis.com/v1/places/{place_id}"
    headers = {
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": "reviews",
    }
    async with httpx.AsyncClient(timeout=12) as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()

    result: list[Review] = []
    for index, item in enumerate(data.get("reviews", [])):
        author = item.get("authorAttribution", {}).get("displayName") or "Google-användare"
        text = (item.get("text", {}) or {}).get("text", "").strip()
        rating = int(item.get("rating") or 5)
        if not text:
            continue
        result.append(Review(id=f"google-{index}", author=author, rating=rating, text=text, source="google"))
    return result


@app.get("/api/reviews")
async def reviews():
    provider = os.getenv("REVIEWS_PROVIDER", "mock").lower().strip()
    if provider == "google_places":
        try:
            items = await google_places_reviews()
        except Exception:
            items = []
        return {"provider": provider, "reviews": [item.model_dump() for item in items]}

    # Mock mode intentionally returns no fake customer testimonials.
    return {"provider": "mock", "reviews": []}
