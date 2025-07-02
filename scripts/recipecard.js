import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const data = await fetchRecipesData();

  const recipe = data[0];

  const recipeCard = document.createElement("div");
  recipeCard.className = "recipe-card flex w-[380px] h-[600px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
}
createRecipeCard();
