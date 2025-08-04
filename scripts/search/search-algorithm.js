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

export function filterRecipesBySearch(recipes, searchValue) {
  console.trace("Utilisation de la fonction filterRecipesBySearch");
  const value = searchValue.trim().toLowerCase();
  let results = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const name = recipe.name ? recipe.name.toLowerCase() : "";
    const description = recipe.description ? recipe.description.toLowerCase() : "";
    let found = false;

    if (name.indexOf(value) !== -1 || description.indexOf(value) !== -1) {
      found = true;
    }

    if (!found && Array.isArray(recipe.ingredients)) {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ing = recipe.ingredients[j].ingredient ? recipe.ingredients[j].ingredient.toLowerCase() : "";
        if (ing.indexOf(value) !== -1) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      results.push(recipe);
    }
  }

  // Tri alphabétique avec une boucle for (bubble sort)
  for (let a = 0; a < results.length - 1; a++) {
    for (let b = 0; b < results.length - a - 1; b++) {
      if (results[b].name > results[b + 1].name) {
        const temp = results[b];
        results[b] = results[b + 1];
        results[b + 1] = temp;
      }
    }
  }

  return results;
}
