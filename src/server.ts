import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { connectDB } from './config/db/mongoose';
import { errorHandler } from './middlewares/errorHandler';
import logger from './utils/logger';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Security headers
app.use(helmet());

// Enable CORS for all routes
app.use(
  cors({
    origin: ['http://localhost:4210'], // or use a function to allow dynamic origins
    credentials: true,
  })
);

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});
app.use(limiter); // Apply rate limiting to all requests

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

// Connect to MongoDB
connectDB();

// Global error handler
app.use(errorHandler);

// start the server
app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
