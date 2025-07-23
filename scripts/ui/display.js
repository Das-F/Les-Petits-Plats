// This script displays and updates the recipe cards and dropdown filters based on the provided filtered recipes.

import { initRecipeCards } from "./recipeCard.js";
import { getIngredients, getAppareils, getUstensiles } from "../dropdown/getDataDropdown.js";
import { createDropdownList } from "../dropdown/displayDropdown.js";
export function displayAndUpdateFilters(filteredRecipes) {
  initRecipeCards(filteredRecipes);
  createDropdownList(getIngredients(filteredRecipes), "ingredientFilter");
  createDropdownList(getAppareils(filteredRecipes), "appareilFilter");
  createDropdownList(getUstensiles(filteredRecipes), "ustensilFilter");
}
