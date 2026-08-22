# Växjö Eltjänst – nytt webbkoncept

Komplett React/TypeScript + FastAPI-projekt byggt som en egen implementation med den bifogade handyman-sidan som visuell inspirationskälla. Ingen Framer-, WordPress- eller iframe-kod används i slutprojektet.

## Tech stack

- Frontend: React + TypeScript + Vite
- Routing: react-router-dom
- Styling: `frontend/src/styles/global.css`
- Backend: Python + FastAPI
- Kontaktflöde: `POST /api/contact`
- Reviews: `GET /api/reviews`
- Mobilmeny och responsiv layout

## Sidor

- `/` – startsida
- `/tjanster`
- `/privat`
- `/foretag`
- `/projekt`
- `/om-oss`
- `/recensioner`
- `/kontakt`

## Starta frontend

```bash
cd frontend
npm install
npm run dev
```

Öppna `http://localhost:5173`.

## Starta backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Frontend-proxyn skickar `/api/*` till `http://localhost:8000` i utvecklingsläge.

## Kontaktformulär

Kopiera `backend/.env.example` till `backend/.env` och fyll i SMTP-inställningar för riktig e-postleverans. Om SMTP inte är konfigurerat tar API:t emot och validerar förfrågan men skickar inget mejl.

## Google Reviews

Standard:

```env
REVIEWS_PROVIDER=mock
```

Det visar inga falska recensioner. Frontend visar istället ett snyggt API-ready-läge.

För Google Places:

```env
REVIEWS_PROVIDER=google_places
GOOGLE_PLACES_API_KEY=...
GOOGLE_PLACE_ID=...
```

API-nyckeln ligger endast i backend. Frontend använder alltid `GET /api/reviews`.

## Deploy

### Frontend på Vercel

1. Skapa nytt Vercel-projekt.
2. Välj `frontend` som Root Directory.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. `frontend/vercel.json` innehåller rewrite för React Router så direkta URL:er inte ger vit sida/404.
6. Sätt `VITE_API_BASE_URL` till backendens publika URL om backend ligger separat.

### Backend

FastAPI kan deployas separat på exempelvis Render/Railway/Vercel Python och kopplas via `VITE_API_BASE_URL`.

## Bilder

Använda filer:

- `hero-electrician.webp` – riktig Växjö Eltjänst-bild
- `eltjanst-logo.jpeg` – logotyp
- `selatek-partnership.jpeg` – SELATEK/Växjö Eltjänst-bild

## Viktigt om innehåll

Projektsektionen innehåller tydligt märkta case-mallar och inga påhittade kundcase. Tjänster som behöver verifieras med Växjö Eltjänst bör bekräftas före skarp publicering. Recensioner ska hämtas från en riktig källa när integrationen kopplas in.
