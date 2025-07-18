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
      const results = recipes.filter((recipe) => {
        //  Creation of a search algorithm that filters recipes based on the input value.
        const fields = [recipe.name?.toLowerCase() || "", recipe.description?.toLowerCase() || "", ...(recipe.ingredients || []).map((ing) => ing.ingredient?.toLowerCase() || "")];
        // Check if any of the fields contain the search value
        return fields.some((field) => field.includes(value));
      });
      if (results.length === 0) {
        searchResults.innerText = `Aucune recette ne contient '${value}' vous pouvez chercher « tarte aux pommes », « poisson » etc.`;
      } else {
        results.sort((a, b) => a.name.localeCompare(b.name));
        displayRecipes(results);
      }
    }
  });
}
