import { Request, Response, NextFunction } from 'express';

const invalidUrlHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`URL Not Found - ${req.originalUrl}`);
  res.status(404).json({ error: error.message });
};

export default invalidUrlHandler;
