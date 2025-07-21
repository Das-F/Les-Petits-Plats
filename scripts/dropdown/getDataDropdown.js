export function getIngredients(recipes) {
  const ingredientsSet = new Set();

  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((item) => {
        // Normalisation : trim + minuscules
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

export function getAppareils(recipes) {
  const appareilsSet = new Set();

  recipes.forEach((recipe) => {
    const name = recipe.appliance?.trim();
    if (name) {
      appareilsSet.add(name);
    }
    console.log("Appareil ajouté");
  });

  return Array.from(appareilsSet)
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .sort((a, b) => a.localeCompare(b));
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

  return Array.from(ustensilesSet)
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .sort((a, b) => a.localeCompare(b));
}
