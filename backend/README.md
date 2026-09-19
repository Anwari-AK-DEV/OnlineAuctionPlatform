# BidHub backend

Local API for the BidHub auction frontend.

## Run

```bash
npm install
copy .env.example .env
npm run dev
```

The API runs at `http://localhost:4000`.

## Endpoints

- `GET /api/health`
- `GET /api/auctions`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` with a bearer token
- `POST /api/auctions/:id/bids` with a bearer token

Data is stored in `data/store.json` for local development. Passwords are hashed with bcrypt and sessions use JWTs.
