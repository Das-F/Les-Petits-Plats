// This script implements a search algorithm for recipes.
// It listens for input in the search field and filters recipes based on the input value.

// Version 1
export function createSearchAlgorithm(onSearchChange) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    onSearchChange(value);
  });
}

// Filtre les recettes selon la recherche
export function filterRecipesBySearch(recipes, searchValue) {
  const value = searchValue.trim().toLowerCase();

  const results = recipes.filter((recipe) => {
    const name = recipe.name ? recipe.name.toLowerCase() : "";
    const description = recipe.description ? recipe.description.toLowerCase() : "";

    if (name.includes(value) || description.includes(value)) return true;

    if (Array.isArray(recipe.ingredients)) {
      return recipe.ingredients.some((ing) => (ing.ingredient ? ing.ingredient.toLowerCase() : "").includes(value));
    }
    return false;
  });

  results.sort((a, b) => a.name.localeCompare(b.name));
  return results;
}
