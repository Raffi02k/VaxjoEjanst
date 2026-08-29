# Växjö Eltjänst

Webbprojekt för Växjö Eltjänst med separat frontend och backend.

## Struktur

```txt
.
├── backend/   FastAPI API för kontaktformulär och reviews
├── frontend/  React + TypeScript + Vite
└── vercel.json
```

## Frontend

Starta lokalt:

```bash
cd frontend
npm install
npm run dev
```

Bygg produktion:

```bash
cd frontend
npm run build
```

Frontend använder `frontend/.env.example` för lokala miljövariabler.

## Backend

Starta lokalt:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Backend använder `backend/.env.example` för SMTP, CORS och reviews-konfiguration.

## Deploy

`vercel.json` är konfigurerad för att bygga frontend från `frontend/`:

- install: `npm --prefix frontend install`
- build: `npm --prefix frontend run build`
- output: `frontend/dist`

## Innehåll

- frontendkod: `frontend/src/`
- bilder och statiska filer: `frontend/public/`
- kontakt-API: `backend/app/main.py`

## Notering

Projektet innehåller demomaterial som bör ersättas med Växjö Eltjänsts egna bilder, filmer och verifierade kundcase innan skarp lansering.
