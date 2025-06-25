// === Fetch JSON Data ===//
async function fetchRecipesData() {
  const response = await fetch("data/recipes.json");
  return await response.json();
}

function recipeData(data) {
  const { id, image, name, ingredients, time, description, appliance, ustensils } = data;
  console.log("Recipe Data:", data);
  const picture = "recipes.js";
}

function getRecipeCard(data) {
  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = data.description || "Recipe Description";
  const recipeTitleAndDescription = document.getElementById("recipe-title-and-description");
  recipeTitleAndDescription.appendChild(recipeDescription);
  return recipeDescription;
}
