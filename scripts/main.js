import { fetchRecipesData } from "./fetch.js";
import { initRecipeCards } from "./recipecard.js";
import { getIngredients, getAppareils, getUstensiles } from "./dropdown/getDataDropdown.js";
import { createDropdownList } from "./dropdown/displayDropdown.js";
import { createSearchAlgorithm } from "./search-algorithm.js";
import { initDropdown } from "./dropdown/initDropdown.js";
import { addTag } from "./tags-filters.js";

const recipes = await fetchRecipesData();
const allIngredients = getIngredients(recipes);
const allAppareils = getAppareils(recipes);
const allUstensiles = getUstensiles(recipes);

initRecipeCards(recipes);
createDropdownList(allIngredients, "ingredientFilter");
createDropdownList(allAppareils, "appareilFilter");
createDropdownList(allUstensiles, "ustensilFilter");
initDropdown("ingredientFilter", "searchIngredientInput");
initDropdown("appareilFilter", "searchAppareilInput");
initDropdown("ustensilFilter", "searchUstensilInput");
createSearchAlgorithm(recipes, initRecipeCards);
addTag("Example Tag 1");
