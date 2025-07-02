import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const data = await fetchRecipesData();
  const recipe = data[0];

  const recipeCard = document.createElement("div");
  recipeCard.className = "relative flex w-[380px] h-[700px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
}

export async function createCardImageContainer() {
  const data = await fetchRecipesData();
  const recipe = data[0];

  const imgContainer = document.createElement("div");
  imgContainer.className = "flex w-full h-[240px] rounded-lg bg-white shadow-md";
  const recipeCard = document.getElementById("recipe-card");
  imgContainer.appendChild(recipeCard);
  return imgContainer;
}

export async function createCardImage() {
  const data = await fetchRecipesData();
  const recipe = data[0];

  const recipeImage = document.createElement("img");
  recipeImage.className = "object-cover w-full h-full";
  recipeImage.src = recipe.image;
  const imgContainer = getElementById("recipe-img-container");
  imgContainer.appendChild(recipeImage);

  return recipeImage;
}

export async function createCardImageOverlay() {
  const data = await fetchRecipesData();
  const recipe = data[0];

  const overlay = document.createElement("div");
  overlay.className = "absolute top-4 right-4 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md";
  overlay.textContent = recipe.time + "mn";
  return overlay;
}

createRecipeCard();
