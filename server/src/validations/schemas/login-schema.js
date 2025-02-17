import Joi from 'joi';
import { commonSchema } from './common-schema.js';

const loginSchema = Joi.object({
  email: commonSchema.emailSchema,
  password: commonSchema.passwordSchema,
});

export default loginSchema;
