// Version 1.0
export function createSearchAlgorithm(recipes, displayRecipes) {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.createElement("div");
  searchResults.className = "search-results text-white mt-4";
  const mainHead = document.querySelector(".main-head");
  mainHead.appendChild(searchResults);
  const recipeList = document.querySelector(".recipe-list");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    recipeList.innerHTML = "";
    if (value.length < 2) {
      searchResults.innerHTML = "Merci de saisir au moins 2 caractères.";
    } else {
      searchResults.innerHTML = "";
      const results = recipes.filter((recipe) => {
        const recipeName = recipe.name?.toLowerCase() || "";
        const recipeDescription = recipe.description?.toLowerCase() || "";
        const recipeIngredients = (recipe.ingredients || []).map((ing) => ing.ingredient?.toLowerCase() || "");
        return recipeName.includes(value) || recipeDescription.includes(value) || recipeIngredients.some((ingredient) => ingredient.includes(value));
      });
      if (results.length === 0) {
        recipeList.innerHTML = "Aucun résultat trouvé.";
      } else {
        results.sort((a, b) => a.name.localeCompare(b.name));
        displayRecipes(results);
      }
    }
  });
}
