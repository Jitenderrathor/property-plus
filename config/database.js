import mongoose from "mongoose";

let connected = false; // Fixed typo: changed 'conntect' to 'connected'

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  const MONGODB_URI = process.env.MONGODB_URI;

  // Check if MONGODB_URI is actually defined
  if (!MONGODB_URI) {
    console.log("Error: MONGODB_URI is not defined in .env file");
    return;
  }

  // Check if already connected to database
  if (connected) {
    console.log("Already connected to database");
    return;
  }

  // Connect to database
  try {
    await mongoose.connect(
      "mongodb+srv://jitenderjkr19_db_user:dsMkSug2wmYBcfHv@cluster0.4apl4jc.mongodb.net/property-db?retryWrites=true&w=majority&appName=Cluster0",
    );
    connected = true; // Fixed typo
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default connectDB;
