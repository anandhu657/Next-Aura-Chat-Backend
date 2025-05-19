import mongoose from 'mongoose';
import logger from '../../utils/logger';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error('MongoDB connection failed');
    logger.error(error);
    process.exit(1); // Exit the process with failure
  }
};
