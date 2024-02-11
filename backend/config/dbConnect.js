import mongoose from "mongoose";
const dbConnect = () => {
  if (mongoose.connection.readyStatus >= 1) {
    return;
  }
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI);
  console.log("connected");
};
export default dbConnect;
