import cors, { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: 'http://localhost:3002',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
};

export const corsMiddleware = cors(corsConfig);
