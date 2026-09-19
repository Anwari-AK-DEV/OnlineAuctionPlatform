# BidHub

Full-stack online auction platform prototype.

## Start everything

From this project root:

```bash
npm install
npm run dev
```

This starts:

- React/Vite frontend at `http://127.0.0.1:5173`
- Express API at `http://localhost:4000`

The API stores local development data in `backend/data/store.json`. Copy `backend/.env.example` to `backend/.env` before deploying and replace the JWT secret.

## Other commands

```bash
npm run lint
npm run build
npm run start
```

`npm run start` starts only the backend API.
