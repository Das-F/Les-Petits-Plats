import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const recipeCard = document.createElement("div");
  recipeCard.className = "relative flex w-[380px] h-[700px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col";
  recipeCard.id = "recipe-card";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
}

const container = "container";
export async function createCardImageContainer(container) {
  const imgContainer = document.createElement("div");
  imgContainer.id = "recipe-img-container";
  imgContainer.className = "flex w-full h-[240px] rounded-lg bg-blue-500 shadow-md";
  imgContainer.textContent = "Image Container";
  recipeCard.id = "recipe-card";
  imgContainer.appendChild(recipeCard);
}
const img = { src: "images/background.jpg" };
export async function createCardImage(img) {
  const recipeImage = document.createElement("img");
  recipeImage.className = "object-cover w-full h-full";
  recipeImage.src = recipe.image;
  const imgContainer = document.getElementById("recipe-img-container");
  imgContainer.appendChild(recipeImage);
}
const timeOverlay = "60min";
export async function createCardImageOverlay(timeOverlay) {
  const overlay = document.createElement("div");
  overlay.className = "absolute top-4 right-4 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md";
  overlay.textContent = `${recipe.time}mn`;
  imgContainer.appendChild(overlay);
}
const title = "Tarte aux mirabelles";
function createTitleDescriptionRecipe(title) {
  const createTitleDescriptionRecipe = document.createElement("div");
  createTitleDescriptionRecipe.id = "recipe-title-and-description";
  createTitleDescriptionRecipe.textContent = title;
  const recipeCard = document.getElementById("recipe-card");
  recipeCard.appendChild(createTitleDescriptionRecipe);
}

createRecipeCard();
createCardImageContainer(container);
createCardImage(img);
createCardImageOverlay(timeOverlay);
createTitleDescriptionRecipe(title);
