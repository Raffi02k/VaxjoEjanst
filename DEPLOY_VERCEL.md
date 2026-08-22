# Deploy på Vercel

Den här versionen är omstrukturerad så att Vite-projektet ligger direkt i projektroten.
Det betyder att Vercel hittar `package.json`, `index.html` och `vite.config.ts` automatiskt.

## Rekommenderat
1. Packa upp ZIP-filen.
2. Lägg mappen i GitHub och importera repot i Vercel, eller ladda upp projektmappen via Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Install command: `npm install`.

`vercel.json` har SPA-fallback så React Router-routes fungerar vid direktlänkar och refresh.

Backend/FastAPI ligger kvar i `/backend` för separat deployment. Frontenden fungerar visuellt även om API:t inte är igång; kontakt/reviews kräver sedan ett publikt API och VITE_API_BASE_URL om det behövs.
