import { StatusCodes } from 'http-status-codes';
import env from './environment.js';
import { ApiError, WHITELIST_DOMAINS } from '@/utils/index.js';

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin && env.NODE_ENV === 'development') {
      return callback(null, true);
    }

    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true);
    }

    return callback(
      new ApiError(
        StatusCodes.FORBIDDEN,
        `Access from ${origin} is blocked due to CORS policy`
      )
    );
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

export default corsOptions;
