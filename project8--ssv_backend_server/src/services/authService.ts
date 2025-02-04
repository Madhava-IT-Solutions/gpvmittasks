import bcrypt from 'bcrypt';
import { AppDataSource } from '../config/db';
import { generateAccessToken, generateRefreshToken } from '../utils/jwtUtils';
import { setRefreshTokenCookie } from '../utils/cookieUtils';
import { User } from '../entites/userEntity';
import {
  isRefreshTokenBlacklisted,
  blacklistToken,
} from '../utils/tokenBlacklistUtils';
import { Response } from 'express';
import { verifyAccessToken } from '../utils/jwtUtils';

export class AuthService {
  static async loginUser(
    credentials: { email: string; password: string },
    res: Response
  ): Promise<string> {
    const userRepository = AppDataSource.getRepository(User);

    // Find user by email
    const user = await userRepository.findOne({
      where: { email: credentials.email },
    });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Generate tokens
    const accessToken = generateAccessToken(user.id.toString());
    const refreshToken = generateRefreshToken(user.id.toString());

    // Check if refresh token is blacklisted
    const isBlacklisted = await isRefreshTokenBlacklisted(refreshToken);
    if (isBlacklisted) {
      throw new Error('Refresh token is blacklisted');
    }

    // Set refresh token as a cookie
    setRefreshTokenCookie(res, refreshToken);

    return accessToken; // Return access token for client usage
    
  }

  static async logoutUser(refreshToken: string): Promise<void> {
    await blacklistToken(refreshToken); // Blacklist the token on logout
  }

  static async validateToken(token: string): Promise<any> {
    // Implement token validation logic (e.g., verify JWT)
    return verifyAccessToken(token);
  }
}
