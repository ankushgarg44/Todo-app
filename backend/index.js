import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoroute from "./routes/todo.route.js";
import userRoute from "../backend/routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use("/todo", todoroute);
app.use("/user", userRoute);
// Database connection + server start
const startServer = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log("MongoDB Connected:", conn.connection.host);

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
