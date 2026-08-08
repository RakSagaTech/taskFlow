import mongoose from "mongoose";


const connectDB = async () => {
  try{

    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI){
      throw new Error("MONGO_URI is not defined in environment variables");
    };

    await mongoose.connect(MONGO_URI);

    console.log("Connected to the database successfully");

  }catch(error){
    console.error("Database connection failed: ", error);
    process.exit(1);
  };
};


export default connectDB;