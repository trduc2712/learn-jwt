import express from 'express';
import { userController } from '@/controllers/index.js';
import { verifyToken } from '@/middlewares/index.js';

const router = express.Router();

router.all('*', verifyToken);
router.get('/', userController.getAllUsers);

export default router;
