export function getIngredients(recipes) {
  const ingredientSet = new Set();
  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((ing) => {
        if (ing.ingredient) {
          ingredientSet.add(ing.ingredient);
        }
      });
    }
  });
  return Array.from(ingredientSet);
}

export function getAppareils(recipes) {
  const appareilSet = new Set();
  recipes.forEach((recipe) => {
    if (recipe.appliance) {
      appareilSet.add(recipe.appliance);
    }
  });
  return Array.from(appareilSet);
}

export function getUstensiles(recipes) {
  const ustensileSet = new Set();
  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach((ustensil) => {
        ustensileSet.add(ustensil);
      });
    }
  });
  return Array.from(ustensileSet);
}
