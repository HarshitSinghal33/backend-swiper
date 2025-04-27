import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected");
    } catch (error) {
        console.error("Error in connecting DB:", error.message);
        process.exit(1);
    }
}

export default connectDatabase;