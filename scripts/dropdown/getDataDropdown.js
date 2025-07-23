// Ingredients
export function getIngredients(recipes) {
  const ingredientsSet = new Set();

  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((item) => {
        const rawName = item.ingredient?.trim();
        const name = rawName ? rawName.toLowerCase() : "";
        if (name) {
          ingredientsSet.add(name);
        }
      });
    }
  });

  return Array.from(ingredientsSet)
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .sort((a, b) => a.localeCompare(b));
}

// Appareils
export function getAppareils(recipes) {
  const appareilsSet = new Set();

  recipes.forEach((recipe) => {
    const rawName = recipe.appliance?.trim();
    const name = rawName ? rawName.toLowerCase() : "";
    if (name) {
      appareilsSet.add(name);
    }
  });

  return Array.from(appareilsSet)
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .sort((a, b) => a.localeCompare(b));
}

// Ustensils
export function getUstensiles(recipes) {
  const ustensilesSet = new Set();
  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach((ustensil) => {
        const rawName = ustensil.trim();
        const name = rawName ? rawName.toLowerCase() : "";
        if (name) {
          ustensilesSet.add(name);
        }
      });
    }
  });

  return Array.from(ustensilesSet)
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .sort((a, b) => a.localeCompare(b));
}
