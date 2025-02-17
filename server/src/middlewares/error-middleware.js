import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import env from '@/config/environment.js';

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  const responseError = {
    statusCode,
    message: err.message || ReasonPhrases[err.statusCode],
  };

  if (env.NODE_ENV === 'development') {
    responseError.stack = err.stack;
  }

  res.status(statusCode).json(responseError);
};

export default errorHandler;
