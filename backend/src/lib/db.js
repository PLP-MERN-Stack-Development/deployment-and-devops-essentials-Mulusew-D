import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // DEBUG LINE

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
