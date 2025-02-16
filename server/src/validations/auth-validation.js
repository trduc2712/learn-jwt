import { validate } from '@/middlewares/index.js';
import { signupSchema } from './schemas/index.js';

export const authValidation = {
  signUp: validate(signupSchema),
};
