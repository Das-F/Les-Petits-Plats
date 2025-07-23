export function filterRecipesByTags(recipes, tags) {
  return recipes.filter((recipe) => {
    return tags.every((tag) => {
      if (tag.type === "ingredient") {
        return recipe.ingredients?.some((i) => i.ingredient?.trim().toLowerCase() === tag.value.toLowerCase());
      }
      if (tag.type === "appareil") {
        return recipe.appliance?.trim().toLowerCase() === tag.value.toLowerCase();
      }
      if (tag.type === "ustensile") {
        return recipe.ustensils?.some((u) => u.trim().toLowerCase() === tag.value.toLowerCase());
      }
      return true;
    });
  });
}
