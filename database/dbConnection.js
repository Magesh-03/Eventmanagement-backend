

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection = async () => {
  const mongoUri = process.env.MONGO_URI;
  
  if (!mongoUri) {
    console.error('ATLAS_URI is not defined in .env file');
    process.exit(1); 
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};





