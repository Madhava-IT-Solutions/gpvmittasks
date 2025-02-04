import rateLimit from 'express-rate-limit';
import express, { Express, Request, Response, NextFunction } from 'express';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

const rateLimitMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  limiter(req, res, (err) => {
    if (err) {
      res.status(err.statusCode).json({
        error: 'Rate Limit Exceeded',
        message: err.message,
      });
    } else {
      next();
    }
  });
};

export default rateLimitMiddleware;
