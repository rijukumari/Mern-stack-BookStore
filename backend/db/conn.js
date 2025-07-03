import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(" ✅ Database connected successfully");
  } catch (error) {
    console.log(" ❌ Database is not connected", error);
  }
};
export default connectDB;
