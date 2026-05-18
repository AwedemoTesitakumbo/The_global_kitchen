import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    instructions: {
      type: String,
      required: true
    },

    cookingTime: {
      type: Number,
      required: true,
      min: 1
    },

    difficulty: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"]
    },

    category: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

recipeSchema.index({ category: 1 });

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;