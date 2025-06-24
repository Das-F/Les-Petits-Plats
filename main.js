// === Fetch JSON Data ===//
async function fetchRecipesData() {
  const response = await fetch("data/recipes.json");
  return await response.json();
}

