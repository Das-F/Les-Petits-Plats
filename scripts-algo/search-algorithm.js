// Version 2.0
export function createSearchAlgorithm(recipes, displayRecipes) {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.createElement("div");
  searchResults.className = "search-results text-white mt-4";
  const mainHead = document.querySelector(".main-head");
  mainHead.appendChild(searchResults);
  const recipeList = document.querySelector(".recipe-list");
  const MAX_LENGTH_SEARCH = 3;

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    recipeList.innerHTML = "";
    if (value.length === 0) {
      searchResults.innerHTML = "";
      displayRecipes(recipes);
    } else if (value.length < MAX_LENGTH_SEARCH) {
      searchResults.innerHTML = `Merci de saisir au moins ${MAX_LENGTH_SEARCH} caractères.`;
      displayRecipes(recipes);
    } else {
      searchResults.innerHTML = "";
      const results = [];
      for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const name = recipe.name?.toLowerCase() || "";
        const description = recipe.description?.toLowerCase() || "";
        let found = name.includes(value) || description.includes(value);
        if (!found && Array.isArray(recipe.ingredients)) {
          for (let j = 0; j < recipe.ingredients.length; j++) {
            const ing = recipe.ingredients[j].ingredient?.toLowerCase() || "";
            if (ing.includes(value)) {
              found = true;
              break;
            }
          }
        }
        if (found) results.push(recipe);
      }
      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient '${value}' vous pouvez chercher « tarte aux pommes », « poisson » etc.`;
      } else {
        results.sort((a, b) => a.name.localeCompare(b.name));
        displayRecipes(results);
      }
    }
  });
}
