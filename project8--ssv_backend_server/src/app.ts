import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppDataSource } from './config/db';
import userRouter from './routes/userRoutes';
// import rateLimitMiddleware from './middlewares/rateLimiterMiddleware';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/api', rateLimitMiddleware);

// Routes
app.use('/api/users', userRouter);

// Start the server
const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

startServer();
