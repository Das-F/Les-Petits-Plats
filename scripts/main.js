import { fetchRecipesData } from "./api/fetch.js";
import { createSearchAlgorithm } from "./search/search-algorithm.js";
import { initDropdown } from "./dropdown/initDropdown.js";
import { displayAndUpdateFilters } from "./ui/display.js";
import { filterRecipesByTags } from "./filters/recipeFilters.js";
import { handleDropdownItemSelected } from "./tags/tagManager.js";
import { filterRecipesBySearch } from "./search/search-algorithm.js";

async function main() {
  const allRecipes = await fetchRecipesData();
  let activeTags = [];
  let mainSearchQuery = "";

  function applyFiltersAndDisplay() {
    let searchResults = mainSearchQuery.length >= 3 ? filterRecipesBySearch(allRecipes, mainSearchQuery) : [...allRecipes];
    const finalFilteredRecipes = filterRecipesByTags(searchResults, activeTags);
    displayAndUpdateFilters(finalFilteredRecipes, mainSearchQuery);
  }

  function onSearchChange(query) {
    mainSearchQuery = query;
    applyFiltersAndDisplay();
  }

  function onTagChange(newActiveTags) {
    activeTags = newActiveTags;
    applyFiltersAndDisplay();
  }

  createSearchAlgorithm(onSearchChange);
  initDropdown("ingredientFilter", "searchIngredientInput", (name, type) => handleDropdownItemSelected(name, type, activeTags, onTagChange), "ingredient");
  initDropdown("appareilFilter", "searchAppareilInput", (name, type) => handleDropdownItemSelected(name, type, activeTags, onTagChange), "appareil");
  initDropdown("ustensilFilter", "searchUstensilInput", (name, type) => handleDropdownItemSelected(name, type, activeTags, onTagChange), "ustensile");
  applyFiltersAndDisplay();
}

main();
