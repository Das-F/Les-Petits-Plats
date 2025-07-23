// This script fetches recipe data from a JSON file.

export async function fetchRecipesData() {
  const response = await fetch("recipes.json");
  return await response.json();
}
