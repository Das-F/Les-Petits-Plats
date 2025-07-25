// Version 1 – 25-07/25

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
        const ingredients = (recipe.ingredients || []).map((ing) => ing.ingredient?.toLowerCase() || "");
        return name.includes(value) || description.includes(value) || ingredients.some((ingredient) => ingredient.includes(value));
      });
      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient "${value}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        displayRecipes([], true);
      } else {
        results.sort((a, b) => a.name.localeCompare(b.name));
        displayRecipes(results, true);
      }
    }
  });
}
