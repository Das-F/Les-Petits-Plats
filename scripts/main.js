import { fetchRecipesData } from "./api/fetch.js";
import { createSearchAlgorithm } from "./search/search-algorithm.js";
import { initDropdown } from "./dropdown/initDropdown.js";
import { displayAndUpdateFilters } from "./ui/display.js";
import { filterRecipesByTags } from "./filters/recipeFilters.js";
import { handleDropdownItemSelected } from "./tags/tagManager.js";
import { updateRecipeCounter } from "./ui/recipeCounter.js";
const activeTags = [];
const recipes = await fetchRecipesData();
let filteredBySearch = [...recipes];
displayAndUpdateFilters(recipes, false);
function dropdownCallback(tagName, tagType) {
  handleDropdownItemSelected(tagName, tagType, activeTags, filteredBySearch);
}
updateRecipeCounter(recipes.length);
initDropdown("ingredientFilter", "searchIngredientInput", dropdownCallback, "ingredient");
initDropdown("appareilFilter", "searchAppareilInput", dropdownCallback, "appareil");
initDropdown("ustensilFilter", "searchUstensilInput", dropdownCallback, "ustensile");
createSearchAlgorithm(recipes, updateFilteredBySearch);
function updateFilteredBySearch(newList) {
  filteredBySearch = newList;
  const filtered = filterRecipesByTags(filteredBySearch, activeTags);
  displayAndUpdateFilters(filtered);
}
