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
