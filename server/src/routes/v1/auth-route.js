import express from 'express';
import { authController } from '@/controllers/index.js';
import { authValidation } from '@/validations/index.js';

const router = express.Router();

router.post('/signup', authValidation.signUp, authController.signup);

export default router;
