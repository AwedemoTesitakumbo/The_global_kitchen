import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 7000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/globalKitchen")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});