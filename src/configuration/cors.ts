import cors, { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: [
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://localhost:3002',
    'http://127.0.0.1:3002',
  ],
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
};

export const corsMiddleware = cors(corsConfig);
