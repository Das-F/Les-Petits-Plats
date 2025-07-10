function createItemList() {
  const item = document.createElement("li");
  item.className = "item-list";
  return item;
}
export function createIngredientList(ingredients) {
  const ingredientList = document.getElementById("ingredientList");
  if (ingredientList) {
    ingredients.forEach((ingredient) => {
      const li = createItemList();
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });
  }
}
