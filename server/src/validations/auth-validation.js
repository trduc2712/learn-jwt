import { validate } from '@/middlewares/index.js';
import { signupSchema, loginSchema } from './schemas/index.js';

export const authValidation = {
  signUp: validate(signupSchema),
  login: validate(loginSchema),
};
