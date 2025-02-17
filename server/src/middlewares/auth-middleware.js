/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import { ApiError, WHITELIST_ROUTES, tokenUtil } from '@/utils/index.js';
import { env } from '@/config/index.js';

const verifyToken = (req, res, next) => {
  if (WHITELIST_ROUTES.includes(req.path)) {
    return next();
  }

  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    try {
      const decoded = tokenUtil.verifyToken(token, env.JWT_SECRET);
      next();
    } catch (err) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Token has expired or is invalid'
      );
    }
  } else {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token is missing');
  }
};

export default verifyToken;
