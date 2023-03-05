import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/users.js";

dotenv.config();

const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRouter);

if (process.env.API_PORT) {
  app.listen(process.env.API_PORT);
}

module.exports = app;
