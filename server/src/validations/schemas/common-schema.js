import Joi from 'joi';
import { REGEX } from '@/constants/index.js';

const idSchema = label =>
  Joi.number()
    .integer()
    .required()
    .messages({
      'any.required': `${label} is required`,
      'number.base': `${label} must be a number`,
      'number.integer': `${label} must be an integer`,
    });

const nameSchema = Joi.string().required().trim().max(50).strict().messages({
  'any.required': 'Name is required',
  'string.empty': 'Name cannot be empty',
  'string.max': 'Name must be at most 50 characters long',
  'string.trim': 'Name cannot contain leading or trailing spaces',
});

const emailSchema = Joi.string().email().required().messages({
  'any.required': 'Email is required',
  'string.email': 'Please provide a valid email address',
  'string.empty': 'Email cannot be empty',
});

const phoneSchema = Joi.string().pattern(REGEX.PHONE).required().messages({
  'any.required': 'Phone number is required',
  'string.empty': 'Phone number cannot be empty',
  'string.pattern.base': 'Please provide a valid phone number',
});

const passwordSchema = Joi.string()
  .min(8)
  .required()
  .pattern(REGEX.PASSWORD)
  .messages({
    'any.required': 'Password is required',
    'string.empty': 'Password cannot be empty.',
    'string.min': 'Password must be at least 8 characters long',
    'string.pattern.base':
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  });

export const commonSchema = {
  idSchema,
  nameSchema,
  emailSchema,
  phoneSchema,
  passwordSchema,
};
