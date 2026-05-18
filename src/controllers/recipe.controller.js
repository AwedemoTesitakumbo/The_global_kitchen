import * as recipeService from "../services/recipe.service.js";

const getRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeService.getAllRecipes(
      req.query.category
    );

    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.updateRecipe(
      req.params.id,
      req.body
    );

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.deleteRecipe(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.json({
      message: "Recipe deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
};