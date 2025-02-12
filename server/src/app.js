import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: '.env.local' });

app.use(express.json());

export default app;
