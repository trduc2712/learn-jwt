import Joi from 'joi';
import { commonSchema } from './common-schema.js';

const signupSchema = Joi.object({
  name: commonSchema.nameSchema,
  email: commonSchema.emailSchema,
  phone: commonSchema.phoneSchema,
  password: commonSchema.passwordSchema,
  roleId: commonSchema.idSchema('Role ID'),
});

export default signupSchema;
