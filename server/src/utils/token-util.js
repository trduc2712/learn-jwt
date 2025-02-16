import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';
import { env } from '@/config/index.js';
import { TOKEN_TYPES } from '@/constants/index.js';

const unitMap = { s: 'seconds', m: 'minutes', h: 'hours', d: 'days' };

const generateToken = (userId, type) => {
  const expiresIn =
    type === TOKEN_TYPES.ACCESS
      ? env.ACCESS_TOKEN_EXPIRES_IN
      : env.REFRESH_TOKEN_EXPIRES_IN;
  const matches = expiresIn.match(/^(\d+)([smhd])$/);
  const [, value, unit] = matches;

  const iat = dayjs().unix();
  const exp = dayjs().add(Number(value), unitMap[unit]).unix();

  const payload = {
    sub: userId,
    iat,
    exp,
  };

  return jwt.sign(payload, env.JWT_SECRET);
};

export const tokenUtil = { generateToken };
