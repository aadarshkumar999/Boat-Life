import express from "express";
import dotevm from "dotenv";
import mongoose from "mongoose";

dotevm.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;

const MongoDb = async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
MongoDb();

app.listen(PORT, () => {
  console.log(`app is listing on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("this is / route");
});
