async function fetchRecipesData() {
  const response = await fetch("recipes.json");
  console.log(response);
  return await response.json();
}

function recipeData(data) {
  console.log("Recipe Data:", data);
}

async function main() {
  const data = await fetchRecipesData();
  recipeData(data);
}

main();

// function getRecipeCard(data) {
//   const recipeDescription = document.createElement("p");
//   recipeDescription.textContent = data.description || "Recipe Description";
//   const recipeTitleAndDescription = document.getElementById("recipe-title-and-description");
//   recipeTitleAndDescription.appendChild(recipeDescription);
//   return recipeDescription;
// }
