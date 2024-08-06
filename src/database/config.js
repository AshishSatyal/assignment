import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("error while connection", error.message);
  }
};

export default Connection;
