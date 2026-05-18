import Recipe from "../modules/recipe.model.js";

const getAllRecipes = async (category) => {
  const filter = category ? { category } : {};

  return await Recipe.find(filter);
};

const createRecipe = async (data) => {
  if (data.cookingTime <= 0) {
    throw new Error("Cooking time must be positive");
  }

  return await Recipe.create(data);
};

const updateRecipe = async (id, data) => {
  return await Recipe.findByIdAndUpdate(id, data, {
    new: true
  });
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

export {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
};