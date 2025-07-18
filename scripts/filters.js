export function getIngredients(recipes) {
  const ingredientsSet = new Set();

  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((item) => {
        const name = item.ingredient?.trim();
        if (name) {
          ingredientsSet.add(name);
        }
        console.log("Ingredient ajouté");
      });
    }
  });

  return Array.from(ingredientsSet);
}

export function getAppareils(recipes) {
  const appareilsSet = new Set();

  recipes.forEach((recipe) => {
    const name = recipe.appliance?.trim();
    if (name) {
      appareilsSet.add(name);
    }
    console.log("Appareil ajouté");
  });

  return Array.from(appareilsSet);
}

export function getUstensiles(recipes) {
  const ustensilesSet = new Set();
  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach((ustensil) => {
        const name = ustensil.trim();
        if (name) {
          ustensilesSet.add(name);
        }

        console.log("Ustensile ajouté");
      });
    }
  });

  return Array.from(ustensilesSet);
}
