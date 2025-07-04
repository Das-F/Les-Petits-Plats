import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const recipeCard = document.createElement("div");
  recipeCard.className = "relative flex w-[380px] h-[700px] bg-white rounded-xl shadow-md overflow-hidden flex-col";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
  return recipeCard;
}

export function createCardImageContainer(container) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "flex w-full h-[240px] rounded-lg bg-blue-500 shadow-md";
  container.appendChild(imgContainer);
  return imgContainer;
}

const img = "images/background-photo.png";
export function createCardImage(container, img) {
  const recipeImage = document.createElement("img");
  recipeImage.className = "object-cover w-full h-full";
  recipeImage.src = img;
  container.appendChild(recipeImage);
}

const timeOverlay = "60min";
export function createCardImageOverlay(container, timeOverlay) {
  const overlay = document.createElement("div");
  overlay.className = "absolute top-4 right-4 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md";
  overlay.textContent = timeOverlay;
  container.appendChild(overlay);
}

function createRecipeContainer(container) {
  const recipeContainer = document.createElement("div");
  recipeContainer.className = "recipe-description flex flex-col font-bold text-lg justify-start items-start w-full px-6 pt-6 pb-2";
  container.appendChild(recipeContainer);
  return recipeContainer;
}

const title = "Tarte aux mirabelles";
function createTitleRecipe(container, title) {
  const titleRecipe = document.createElement("h3");
  titleRecipe.className = "text-base pb-6";
  titleRecipe.textContent = title;
  container.appendChild(titleRecipe);
}

function createRecipeName(container) {
  const recipeName = document.createElement("h4");
  recipeName.className = "recipe-title-and-description";
  recipeName.textContent = "Recette";
  container.appendChild(recipeName);
}

function createRecipeDescription(container) {
  const recipeDescription = document.createElement("p");
  recipeDescription.className = "text-sm text-gray-600 pt-3 pb-4";
  recipeDescription.textContent = "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistance désirée";
  container.appendChild(recipeDescription);
  return recipeDescription;
}

function createIngredientsContainer(container) {
  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.className = "ingredients-container flex flex-col font-bold text-lg justify-start items-start w-full px-6 pb-2";
  container.appendChild(ingredientsContainer);
  return ingredientsContainer;
}

function createIngredientsName(container) {
  const ingredientsName = document.createElement("h4");
  ingredientsName.className = "ingredients-name pb-2";
  ingredientsName.textContent = "Ingrédients";
  container.appendChild(ingredientsName);
}

function createIngredientAndQuantityContainer(container) {
  const ingredientsAndQuantityContainer = document.createElement("div");
  ingredientsAndQuantityContainer.className = "ingredient-quantity-container";
  container.appendChild(ingredientsAndQuantityContainer);
  return ingredientsAndQuantityContainer;
}

function createIngredientsList(container) {
  const ingredientsList = document.createElement("div");
  ingredientsList.className = "ingredients-list grid grid-cols-2 gap-x-4 gap-y-6 px-6 text-sm";
  container.appendChild(ingredientsList);
  return ingredientsList;
}

function createIngredientName(ingredientsList) {
  const ingredientItem = document.createElement("h5");
  ingredientItem.className = "ingredient-item";
  ingredientItem.textContent = "Mirabelles";
  ingredientsList.appendChild(ingredientItem);
}

function createIngredientQuantity(ingredientsList) {
  const ingredientQuantity = document.createElement("p");
  ingredientQuantity.className = "ingredient-quantity";
  ingredientQuantity.textContent = "500g";
  ingredientsList.appendChild(ingredientQuantity);
}

async function initRecipeCard() {
  const recipeCard = await createRecipeCard();

  const imgContainer = createCardImageContainer(recipeCard);
  createCardImage(imgContainer, img);
  createCardImageOverlay(imgContainer, timeOverlay);

  const recipeContainer = createRecipeContainer(recipeCard);
  createTitleRecipe(recipeContainer, title);
  createRecipeName(recipeContainer);
  createRecipeDescription(recipeContainer);

  const ingredientsContainer = createIngredientsContainer(recipeCard);
  createIngredientsName(ingredientsContainer);
  const ingredientAndQuantityContainer = createIngredientAndQuantityContainer(ingredientsContainer);
  createIngredientsList(ingredientAndQuantityContainer);
  createIngredientName(ingredientAndQuantityContainer);
  createIngredientQuantity(ingredientAndQuantityContainer);
}

initRecipeCard();
