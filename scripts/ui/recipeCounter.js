// This script updates the recipe counter in the UI based on the number of recipes found.

export function updateRecipeCounter(count) {
  const recipeCounter = document.getElementById("recipe-counter");
  if (!recipeCounter) return;
  recipeCounter.textContent = `${count} recette${count > 1 ? "s" : ""}`;
}
