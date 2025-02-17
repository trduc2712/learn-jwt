import express from 'express';
import cors from 'cors';
import corsOptions from './config/cors.js';
import { authRoute, userRoute } from './routes/v1/index.js';
import { errorHandler } from './middlewares/index.js';

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);

app.use(errorHandler);

export default app;
