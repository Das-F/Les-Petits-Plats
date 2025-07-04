import { fetchRecipesData } from "./fetch.js";

export function createRecipeCard() {
  const recipeCard = document.createElement("div");
  recipeCard.className = "relative flex w-[380px] h-[700px] bg-white rounded-xl shadow-md overflow-hidden flex-col";
  const recipeList = document.getElementById("recipe-list");
  recipeList.appendChild(recipeCard);
  return recipeCard;
}

export function createCardImageContainer(container) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "flex w-full h-[240px] object-contain overflow-hidden rounded-t-lg bg-blue-500";
  container.appendChild(imgContainer);
  return imgContainer;
}

export function createCardImage(container, image) {
  const recipeImage = document.createElement("img");
  recipeImage.className = "w-full h-full";
  recipeImage.src = `JSON-recipes/${image}`;
  container.appendChild(recipeImage);
}

export function createCardImageOverlay(container, time) {
  const overlay = document.createElement("div");
  overlay.className = "absolute top-4 right-4 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full shadow-md";
  overlay.textContent = `${time} min`;
  container.appendChild(overlay);
}

function createRecipeContainer(container) {
  const recipeContainer = document.createElement("div");
  recipeContainer.className = "recipe-description flex flex-col font-bold text-lg justify-start items-start w-full px-6 pt-6 pb-2";
  container.appendChild(recipeContainer);
  return recipeContainer;
}

function createTitleRecipe(container, name) {
  const titleRecipe = document.createElement("h3");
  titleRecipe.className = "text-base pb-6";
  titleRecipe.textContent = name;
  container.appendChild(titleRecipe);
}

function createRecipeName(container) {
  const recipeName = document.createElement("h4");
  recipeName.className = "recipe-title-and-description";
  recipeName.textContent = "Recette";
  container.appendChild(recipeName);
}

function createRecipeDescription(container, description) {
  const recipeDescription = document.createElement("p");
  recipeDescription.className = "text-sm text-gray-600 pt-3 pb-8";
  recipeDescription.textContent = description;
  container.appendChild(recipeDescription);
}

function createIngredientsContainer(container) {
  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.className = "ingredients-container px-6 pb-2";
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

function createIngredientsList(container, ingredients) {
  const ingredientsList = document.createElement("ul");
  ingredientsList.className = "ingredients-list";

  ingredients.forEach(({ ingredient, quantity, unit }) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient}${quantity ? `${quantity}${unit || ""}` : ""}`;
    ingredientsList.appendChild(li);
  });

  container.appendChild(ingredientsList);
}

async function initRecipeCards() {
  const recipes = await fetchRecipesData();

  recipes.forEach((recipe) => {
    const { name, image, time, description, ingredients } = recipe;

    const recipeCard = createRecipeCard();
    const imgContainer = createCardImageContainer(recipeCard);
    createCardImage(imgContainer, image);
    createCardImageOverlay(imgContainer, time);

    const recipeContainer = createRecipeContainer(recipeCard);
    createTitleRecipe(recipeContainer, name);
    createRecipeName(recipeContainer);
    createRecipeDescription(recipeContainer, description);

    const ingredientsContainer = createIngredientsContainer(recipeCard);
    createIngredientsName(ingredientsContainer);
    const ingredientsAndQtyContainer = createIngredientAndQuantityContainer(ingredientsContainer);
    createIngredientsList(ingredientsAndQtyContainer, ingredients);
  });
}

initRecipeCards();
