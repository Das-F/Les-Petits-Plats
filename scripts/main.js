import { fetchRecipesData } from "./fetch.js";
import { initRecipeCards } from "./recipecard.js";
import { getIngredients } from "./filters.js";
import { createIngredientList } from "./displayDropdown.js";
const recipes = await fetchRecipesData();
const allIngredients = getIngredients(recipes);
initRecipeCards(recipes);
createIngredientList(allIngredients);
