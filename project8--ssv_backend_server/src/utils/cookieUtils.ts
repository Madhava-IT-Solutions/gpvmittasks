import { Response } from 'express';

export const setRefreshTokenCookie = (res: Response, token: string) => {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/api/auth/refresh-token', // Limit the cookie's scope
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};
