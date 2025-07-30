// This script implements a search algorithm for recipes.
// It listens for input in the search field and filters recipes based on the input value.

// Version 1
export function createSearchAlgorithm(onSearchChange) {
  const searchInput = document.getElementById("search-input");
<<<<<<< HEAD
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
      const results = filterRecipesBySearch(recipes, value);

      // Tri alphabétique
      results.sort((a, b) => a.name.localeCompare(b.name));

      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient "${value}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        displayRecipes([], true);
      } else {
        displayRecipes(results, true);
      }
    }
  });
}

function filterRecipesBySearch(recipes, searchInput) {
  const value = searchInput.trim().toLowerCase();
  const MIN_LENGTH_SEARCH = 3;
  if (value.length < MIN_LENGTH_SEARCH) return [];

  function containsSubstring(text, sub) {
    for (let i = 0; i <= text.length - sub.length; i++) {
      if (text.substring(i, i + sub.length) === sub) {
        return true;
      }
    }
    return false;
  }

  let results = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const name = recipe.name ? recipe.name.toLowerCase() : "";
    const description = recipe.description ? recipe.description.toLowerCase() : "";
    let found = false;

    if (containsSubstring(name, value) || containsSubstring(description, value)) {
      found = true;
    }

    if (!found && Array.isArray(recipe.ingredients)) {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ing = recipe.ingredients[j].ingredient ? recipe.ingredients[j].ingredient.toLowerCase() : "";
        if (containsSubstring(ing, value)) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      results.push(recipe);
    }
  }

=======

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    onSearchChange(value);
  });
}

export function filterRecipesBySearch(recipes, searchValue) {
  console.trace("Utilisation de la fonction filterRecipesBySearch");
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
>>>>>>> search-algorithm-1
  return results;
}
