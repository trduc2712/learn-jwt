import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';
import { env } from '@/config/index.js';
import { TOKEN_TYPES } from '@/constants/index.js';

const generateToken = (userId, type) => {
  const expiresIn =
    type === TOKEN_TYPES.ACCESS
      ? env.ACCESS_TOKEN_EXPIRES_IN
      : env.REFRESH_TOKEN_EXPIRES_IN;

  const iat = dayjs().unix();

  const payload = {
    sub: userId,
    iat,
  };

  return jwt.sign(payload, env.JWT_SECRET, { expiresIn });
};

const verifyToken = token => {
  return jwt.verify(token, env.JWT_SECRET);
};

export const tokenUtil = { generateToken, verifyToken };
