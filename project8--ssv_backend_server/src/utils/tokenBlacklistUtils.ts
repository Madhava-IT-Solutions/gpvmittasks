import { AppDataSource } from '../config/db';
import { BlacklistedToken } from '../entites/tokenBlacklistEntity';

export const isRefreshTokenBlacklisted = async (
  token: string
): Promise<boolean> => {
  const blacklistRepo = AppDataSource.getRepository(BlacklistedToken);
  const tokenInBlacklist = await blacklistRepo.findOne({ where: { token } });
  return !!tokenInBlacklist;
};

export const blacklistToken = async (token: string): Promise<void> => {
  const blacklistRepo = AppDataSource.getRepository(BlacklistedToken);
  const blacklistedToken = blacklistRepo.create({ token });
  await blacklistRepo.save(blacklistedToken);
};
