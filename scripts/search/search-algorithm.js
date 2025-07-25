// Version 2.0
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
      // This is a manual search algorithm
      // It iterates through the recipes and checks if the search value is present in the name
      let results = [];
      for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const name = recipe.name ? recipe.name.toLowerCase() : "";
        const description = recipe.description ? recipe.description.toLowerCase() : "";
        let found = false;

        // Checks the name and description
        if (name.indexOf(value) !== -1 || description.indexOf(value) !== -1) {
          found = true;
        }

        // check ingredients
        if (!found && recipe.ingredients && typeof recipe.ingredients.length === "number") {
          for (let j = 0; j < recipe.ingredients.length; j++) {
            const ing = recipe.ingredients[j].ingredient ? recipe.ingredients[j].ingredient.toLowerCase() : "";
            if (ing.indexOf(value) !== -1) {
              found = true;
              break;
            }
          }
        }

        if (found) {
          results[results.length] = recipe; // Ajout manuel
        }
      }

      // Bubble sort
      for (let a = 0; a < results.length - 1; a++) {
        for (let b = 0; b < results.length - a - 1; b++) {
          if (results[b].name > results[b + 1].name) {
            const temp = results[b];
            results[b] = results[b + 1];
            results[b + 1] = temp;
          }
        }
      }

      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient "${value}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        displayRecipes([], true);
      } else {
        displayRecipes(results, true);
      }
    }
  });
}
