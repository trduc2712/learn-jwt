import { StatusCodes } from 'http-status-codes';

const validate = schema => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: err.details.map(detail => detail.message),
    });
  }
};

export default validate;
