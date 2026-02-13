import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = await mongoose.connect(
      `mongodb://127.0.0.1:27017/Trip-Database`,
    );
    console.log(`MongoDB is connected: ${url.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};
