// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;