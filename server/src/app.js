import express from 'express';
import { authRoute } from './routes/v1/index.js';
import { errorHandler } from './middlewares/index.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.use(errorHandler);

export default app;
