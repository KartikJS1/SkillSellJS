import mongoose from "mongoose";

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected with ${connection.host}`);
}