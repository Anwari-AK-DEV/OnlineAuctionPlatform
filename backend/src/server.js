import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 4000);
const jwtSecret = process.env.JWT_SECRET || 'local-development-secret';
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173';
const allowedOrigins = new Set([clientOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173']);
const storePath = join(dirname(fileURLToPath(import.meta.url)), '../data/store.json');

const seedAuctions = [
  { id: 1, name: 'Sony WH-1000XM5 Wireless Headphones', category: 'Electronics', currentBid: 289, bids: 34, timeLeft: '2h 14m', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600' },
  { id: 2, name: '1967 Ford Mustang Classic', category: 'Vehicles', currentBid: 24500, bids: 112, timeLeft: '1d 5h', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600' },
  { id: 3, name: 'Rolex Submariner Vintage', category: 'Jewelry', currentBid: 8200, bids: 58, timeLeft: '6h 42m', image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=600' },
  { id: 4, name: 'Abstract Art - Modern Collection', category: 'Art & Collectibles', currentBid: 1200, bids: 21, timeLeft: '12h 10m', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600' },
  { id: 5, name: 'Eames Lounge Chair Replica', category: 'Furniture', currentBid: 950, bids: 16, timeLeft: '8h 30m', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600' },
  { id: 6, name: 'Nike Air Jordan 1 Retro High', category: 'Fashion', currentBid: 420, bids: 47, timeLeft: '3h 05m', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600' },
];

async function readStore() {
  try {
    return JSON.parse(await readFile(storePath, 'utf8'));
  } catch {
    const store = { users: [], auctions: seedAuctions };
    await mkdir(dirname(storePath), { recursive: true });
    await writeFile(storePath, JSON.stringify(store, null, 2));
    return store;
  }
}

async function saveStore(store) {
  await mkdir(dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(store, null, 2));
}

function createToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, name: user.name }, jwtSecret, { expiresIn: '7d' });
}

function authRequired(request, response, next) {
  const header = request.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return response.status(401).json({ message: 'Authentication required.' });
  try {
    request.user = jwt.verify(token, jwtSecret);
    return next();
  } catch {
    return response.status(401).json({ message: 'Your session is invalid or expired.' });
  }
}

app.use(cors({ origin: (origin, callback) => callback(null, !origin || allowedOrigins.has(origin)) }));
app.use(express.json());

app.get('/api/health', (_request, response) => response.json({ status: 'ok', service: 'bidhub-api' }));

app.get('/api/auctions', async (_request, response, next) => {
  try {
    const store = await readStore();
    response.json(store.auctions);
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/register', async (request, response, next) => {
  try {
    const { firstName, lastName, email, password, role = 'collector' } = request.body;
    const normalizedEmail = String(email || '').trim().toLowerCase();
    if (!firstName || !lastName || !normalizedEmail || !password || password.length < 6) {
      return response.status(400).json({ message: 'First name, last name, email, and a 6-character password are required.' });
    }
    const store = await readStore();
    if (store.users.some((user) => user.email === normalizedEmail)) {
      return response.status(409).json({ message: 'An account with this email already exists.' });
    }
    const user = { id: crypto.randomUUID(), name: `${firstName.trim()} ${lastName.trim()}`, email: normalizedEmail, role, passwordHash: await bcrypt.hash(password, 12), createdAt: new Date().toISOString() };
    store.users.push(user);
    await saveStore(store);
    response.status(201).json({ token: createToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/login', async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const store = await readStore();
    const user = store.users.find((item) => item.email === String(email || '').trim().toLowerCase());
    if (!user || !(await bcrypt.compare(password || '', user.passwordHash))) {
      return response.status(401).json({ message: 'Email or password is incorrect.' });
    }
    response.json({ token: createToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
});

app.get('/api/auth/me', authRequired, async (request, response, next) => {
  try {
    const store = await readStore();
    const user = store.users.find((item) => item.id === request.user.sub);
    if (!user) return response.status(404).json({ message: 'User not found.' });
    response.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auctions/:id/bids', authRequired, async (request, response, next) => {
  try {
    const amount = Number(request.body.amount);
    const auctionId = Number(request.params.id);
    if (!Number.isFinite(amount) || amount <= 0) return response.status(400).json({ message: 'Enter a valid bid amount.' });
    const store = await readStore();
    const auction = store.auctions.find((item) => item.id === auctionId);
    if (!auction) return response.status(404).json({ message: 'Auction not found.' });
    if (amount <= auction.currentBid) return response.status(400).json({ message: `Your bid must be higher than $${auction.currentBid.toLocaleString()}.` });
    auction.currentBid = amount;
    auction.bids += 1;
    await saveStore(store);
    response.json(auction);
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ message: 'Something went wrong on the server.' });
});

app.listen(port, () => console.log(`BidHub API running at http://localhost:${port}`));
