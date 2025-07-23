// This script updates the recipe counter in the UI based on the number of recipes found.

export function updateRecipeCounter(count, isSearchActive) {
  const recipeCounter = document.getElementById("recipe-counter");
  if (!recipeCounter) return;
  if (!isSearchActive) {
    recipeCounter.textContent = "1500 recettes";
  } else {
    recipeCounter.textContent = `${count} recette${count > 1 ? "s" : ""}`;
  }
}
