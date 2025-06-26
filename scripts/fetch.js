async function fetchRecipesData() {
  const response = await fetch("recipes.json");
  return await response.json();
}
