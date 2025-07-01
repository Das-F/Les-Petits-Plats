import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const data = await fetchRecipesData();

  const recipe = data[0];

  const recipeCard = document.createElement("div");
  recipeCard.className = "recipe-card flex flex-wrap justify-evenly w-sm h-300px gap-8 px-10 py-4 bg-white";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
}
createRecipeCard();

export async function createCardImgContainer() {
  const data = await fetchRecipesData();

  const recipe = data[0];

  const cardImgContainer = document.createElement("div");
  cardImgContainer.className = "flex w-sm h-3xs rounded-lg bg-blue-500 shadow-md";
  const recipeImgContainer = document.getElementById("recipe-img-container");
  recipeImgContainer.appendChild(cardImgContainer);
}
createCardImgContainer();

export async function createCardImg() {
  const data = await fetchRecipesData();
  const recipe = data[0];

  const createCardImg = document.createElement("div");
  createCardImg.className = "recipe-card flex flex-wrap justify-evenly w-sm h-300px gap-10 px-10 py-4";

  const recipeCardImg = document.createElement("img");
  recipeCardImg.src = recipe.image;
  recipeCardImg.alt = recipe.name;

  createCardImg.appendChild(recipeCardImg);
}
createCardImg();

export async function createCardContent() {
  const data = await fetchRecipesData();

  const recipe = data[0];

  const cardContent = document.createElement("div");
  cardContent.className = "flex flex-col font-bold text-lg justify-start items-center px-2";
  const recipeCard = document.getElementById("recipe-card");
  recipeCard.appendChild(cardContent);
}
createCardContent();
