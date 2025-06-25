// === Fetch JSON Data ===//
async function fetchRecipesData() {
  const response = await fetch("data/recipes.json");
  return await response.json();
}

function recipeData(data) {
  const {
    id,
    image,
    name,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = data;
  console.log("Recipe Data:", data);
  const picture = "recipes.js";
}

function getRecipeCard(data) {
  const {
    id,
    image,
    name,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = data;
  return `
    <div class="recipe-card" id="${id}">
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>${description}</p>
      <p>Time: ${time} min</p>
      <p>Appliance: ${appliance}</p>
      <p>Ustensils: ${ustensils.join(", ")}</p>
      <ul>
        ${ingredients
          .map(
            (ingredient) =>
              `<li>${ingredient.ingredient}: ${ingredient.quantity || ""} ${
                ingredient.unit || ""
              }</li>`
          )
          .join("")}
      </ul>
    </div>`;
  console.log("Recipe Card:", getRecipeCard(data));
}
