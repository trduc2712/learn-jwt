import express from 'express';
import { authController } from '@/controllers/index.js';
import { authValidation } from '@/validations/index.js';
import { verifyToken } from '@/middlewares/index.js';

const router = express.Router();

router.all('*', verifyToken);
router.post('/signup', authValidation.signUp, authController.signup);
router.post('/login', authValidation.login, authController.login);

export default router;
