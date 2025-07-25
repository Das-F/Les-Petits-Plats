// This script implements a search algorithm for recipes.
// It listens for input in the search field and filters recipes based on the input value.

// Version 1

export function createSearchAlgorithm(recipes, displayRecipes) {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.createElement("div");
  searchResults.className = "search-results text-white mt-4";
  const mainHead = document.querySelector(".main-head");
  mainHead.appendChild(searchResults);
  const recipeList = document.querySelector(".recipe-list");
  const MIN_LENGTH_SEARCH = 3;

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    recipeList.innerHTML = "";
    if (value.length === 0) {
      searchResults.innerHTML = "";
      displayRecipes(recipes, false);
    } else if (value.length < MIN_LENGTH_SEARCH) {
      searchResults.innerHTML = `Merci de saisir au moins ${MIN_LENGTH_SEARCH} caractères.`;
      displayRecipes(recipes, false);
    } else {
      searchResults.innerHTML = "";
      const results = recipes.filter((recipe) => {
        const name = recipe.name?.toLowerCase() || "";
        const description = recipe.description?.toLowerCase() || "";
        if (name.includes(value) || description.includes(value)) return true;
        if (Array.isArray(recipe.ingredients)) {
          return recipe.ingredients.some((ing) => ing.ingredient?.toLowerCase().includes(value));
        }
        return false;
      });
      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient "${value}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        displayRecipes([], true);
      } else {
        if (results.length > 1) {
          results.sort((a, b) => a.name.localeCompare(b.name));
        }
        displayRecipes(results, true);
      }
    }
  });
}
