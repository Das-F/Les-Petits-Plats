async function fetchRecipesData() {
  const response = await fetch("recipes.json");
  return await response.json();
}

function recipeData(data) {
  console.log("Recipe Data:", data);
}

async function main() {
  const data = await fetchRecipesData();
  recipeData(data);

  const recipe = data[0];

  const img = document.getElementById("recipe-image");
  if (img) {
    img.src = recipe.image;
    console.log("Recipe Image:", img.src);
  }

  const overlay = document.getElementById("recipe-image-overlay");
  if (overlay) {
    overlay.textContent = recipe.time + " minutes";
    console.log("Recipe Time:", overlay.textContent);
  }
}

main();
