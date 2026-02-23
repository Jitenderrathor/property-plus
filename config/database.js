import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // 1. Check if we already have a connection
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to database");
    return;
  }

  // Connect to database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default connectDB;
