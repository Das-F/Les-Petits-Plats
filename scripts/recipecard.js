import { fetchRecipesData } from "./fetch.js";

export async function createRecipeCard() {
  const recipeCard = document.createElement("div");
  recipeCard.className = "relative flex w-[380px] h-[700px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
  return recipeCard;
}

export async function createCardImageContainer(container) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "flex w-full h-[240px] rounded-lg bg-blue-500 shadow-md";
  container.appendChild(imgContainer);
  return imgContainer;
}

const img = "images/background-photo.png";
export async function createCardImage(container, img) {
  const recipeImage = document.createElement("img");
  recipeImage.className = "object-cover w-full h-full";
  recipeImage.src = img;
  container.appendChild(recipeImage);
}

const timeOverlay = "60min";
export async function createCardImageOverlay(container, timeOverlay) {
  const overlay = document.createElement("div");
  overlay.className = "absolute top-4 right-4 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md";
  overlay.textContent = timeOverlay;
  container.appendChild(overlay);
}

function createTitleAndRecipeDescription(container) {
  const titleAndRecipeDescription = document.createElement("div");
  titleAndRecipeDescription.className = "recipe-title-and-description flex flex-col font-bold text-lg justify-start items-start w-full px-6 pt-6 pb-2";
  container.appendChild(titleAndRecipeDescription);
  return titleAndRecipeDescription;
}

const title = "Tarte aux mirabelles";
function createTitleRecipe(container, title) {
  const titleDescriptionRecipe = document.createElement("h3");
  titleDescriptionRecipe.className = "text-base pb-6";
  titleDescriptionRecipe.textContent = title;
  container.appendChild(titleDescriptionRecipe);
}

function createRecipeName(container) {
  const recipeName = document.createElement("h4");
  recipeName.className = "recipe-title-and-description";
  recipeName.textContent = "Recette";
  container.appendChild(recipeName);
}

function createRecipeDescription(container) {
  const recipeDescription = document.createElement("p");
  recipeDescription.className = "text-sm text-gray-600 pt-3 pb-8";
  recipeDescription.textContent = "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée";
  container.appendChild(recipeDescription);
}

function createIngredients(container) {
  const ingredients = document.createElement("div");
  ingredients.className = "ingredients";
  container.appendChild(ingredients);
  return ingredients;
}

function createIngredientsName(container) {
  const ingredientsName = document.createElement("h4");
  ingredientsName.className = "ingredients-name";
  ingredientsName.textContent = "Ingrédients";
  container.appendChild(ingredientsName);
}

function createIngredientsList(container) {
  const ingredientsList = document.createElement("ul");
  ingredientsList.className = "ingredients-list";
  ingredientsList.textContent = "Ingrédients : 1 kg de mirabelles, 200 g de sucre, 1 pâte brisée, 3 œufs, 100 g de beurre fondu";
  container.appendChild(ingredientsList);
  return ingredientsList;
}

async function initRecipeCard() {
  const recipeCard = await createRecipeCard();

  const imgContainer = await createCardImageContainer(recipeCard);
  await createCardImage(imgContainer, img);
  await createCardImageOverlay(imgContainer, timeOverlay);

  const titleAndRecipeDescription = recipe(recipeCard);
  createTitleRecipe(titleAndRecipeDescription, title);
  createRecipeName(titleAndRecipeDescription);
  createRecipeDescription(titleAndRecipeDescription);

  const ingredients = createIngredients(recipeCard);
  createIngredientsName(ingredients, title);
  createIngredientsList(ingredients);
}
initRecipeCard();
