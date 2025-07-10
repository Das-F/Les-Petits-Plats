import { fetchRecipesData } from "./fetch.js";
import { initRecipeCards } from "./recipecard.js";

const recipes = await fetchRecipesData();

initRecipeCards(recipes);
