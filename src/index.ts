import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const main = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    await User.create({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

main();
