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
// This function initializes the dropdowns and sets up the callback for tag selection.
function dropdownCallback(tagName, tagType) {
  handleDropdownItemSelected(tagName, tagType, activeTags, filteredBySearch);
}
updateRecipeCounter(recipes.length);
initDropdown("ingredientFilter", "searchIngredientInput", dropdownCallback, "ingredient");
initDropdown("appareilFilter", "searchAppareilInput", dropdownCallback, "appareil");
initDropdown("ustensilFilter", "searchUstensilInput", dropdownCallback, "ustensile");
createSearchAlgorithm(recipes, updateFilteredBySearch);
// This function updates the filtered recipes based on the search input and active tags.
function updateFilteredBySearch(newList) {
  const noSearch = document.getElementById("search-input").value.trim().length === 0;
  const noTags = activeTags.length === 0;

  // If no search input and no active tags, use the original recipes list
  filteredBySearch = noSearch ? [...recipes] : newList;
  const filtered = noSearch && noTags ? recipes : filterRecipesByTags(filteredBySearch, activeTags);
  displayAndUpdateFilters(filtered);
}
