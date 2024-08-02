import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./routes/users.js";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongoDb is connected"))
  .catch(() => console.log("mongoDb not is connected"));

app.get("/", (req, res) => {
  console.log(process.env.text);
  res.json("server is running");
});

app.use("/users", User);

const PORT = process.PORT || 8000;
app.listen(PORT, () => console.log(`${PORT} is listened`));
