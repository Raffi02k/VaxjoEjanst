#!/usr/bin/env sh
set -eu
printf '%s\n' 'Start backend in one terminal:' '  cd backend && uvicorn app.main:app --reload --port 8000' '' 'Start frontend in another:' '  cd frontend && npm run dev'
