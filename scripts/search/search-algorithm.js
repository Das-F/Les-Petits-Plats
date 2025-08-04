export function filterRecipesBySearch(recipes, searchInput) {
  const value = searchInput.trim().toLowerCase();
  const MIN_LENGTH_SEARCH = 3;
  if (value.length < MIN_LENGTH_SEARCH) return [];

  function containsSubstring(text, sub) {
    for (let i = 0; i <= text.length - sub.length; i++) {
      if (text.substring(i, i + sub.length) === sub) {
        return true;
      }
    }
    return false;
  }

  let results = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const name = recipe.name ? recipe.name.toLowerCase() : "";
    const description = recipe.description ? recipe.description.toLowerCase() : "";
    let found = false;

    if (containsSubstring(name, value) || containsSubstring(description, value)) {
      found = true;
    }

    if (!found && Array.isArray(recipe.ingredients)) {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ing = recipe.ingredients[j].ingredient ? recipe.ingredients[j].ingredient.toLowerCase() : "";
        if (containsSubstring(ing, value)) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      results.push(recipe);
    }
  }

  return results;
}
