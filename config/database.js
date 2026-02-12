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
    await mongoose.connect(
      "mongodb+srv://jitenderjkr19_db_user:7udsr6X2muOm8SBp@cluster0.4apl4jc.mongodb.net/propertypulse?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default connectDB;
