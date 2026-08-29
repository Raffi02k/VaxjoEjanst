# Frontend

React + TypeScript + Vite för Växjö Eltjänsts webbplats.

## Starta lokalt

```bash
npm install
npm run dev
```

Bygg produktion:

```bash
npm run build
npm run preview
```

## Miljövariabler

Kopiera `.env.example` till `.env` och ange:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

Om `VITE_API_BASE_URL` saknas kör kontaktformuläret i ett enkelt demoläge för UI-testning.

## Viktiga mappar

- `src/components/`
- `src/pages/`
- `src/content/`
- `src/styles/`
- `public/images/`
- `public/media/`

## Rutter

Frontend är en SPA med separata URL:er för bland annat:

- `/`
- `/om-oss`
- `/tjanster`
- `/tjanster/:slug`
- `/projekt`
- `/recensioner`
- `/kontakt`
- `/integritet`

## Deploy

Deploy sker från projektroten via `vercel.json`, men själva bygget körs från `frontend/`.

## Demo-material

Följande filer bör ersättas med riktigt material inför lansering:

- `public/media/hero-electrician-demo.mp4`
- `public/media/showreel-solar-demo.mp4`
- `public/images/project-*.jpg`
