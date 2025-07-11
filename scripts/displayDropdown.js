import { getIngredients } from "./filters";

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

const toggleButton = document.getElementById("toggleDropdown");
const chevronIcon = document.getElementById("chevronIcon");

function openCloseFilterMenu(toggleButton, menu, chevronIcon, searchInput) {
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    chevronIcon.classList.toggle("rotate-180");
    if (!menu.classList.contains("hidden")) {
      searchInput.focus();
    }
  });
}
