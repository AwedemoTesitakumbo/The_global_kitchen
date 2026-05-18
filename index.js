import express from "express";
import mongoose from "mongoose";

import recipeRoutes from "./src/routes/recipe.route.js";

const app = express();

const PORT = 7000;

app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/globalKitchen")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

// Routes
app.use("/recipes", recipeRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});