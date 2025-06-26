import { fetchRecipesData } from "./scripts/fetch.js";

async function displayRecipes() {
  const data = await fetchRecipesData();

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

displayRecipes();
