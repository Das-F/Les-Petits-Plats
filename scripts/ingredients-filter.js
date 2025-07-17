document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDropdown");
  const ingredientsMenu = document.getElementById("ingredientsMenu");
  const chevronIcon = document.getElementById("chevronIcon");
  const searchIngredientInput = document.getElementById("searchIngredientInput");
  if (!toggleButton || !ingredientsMenu || !chevronIcon || !searchIngredientInput) {
    console.warn("Un ou plusieurs éléments requis sont manquants dans le DOM.");
    return;
  }
  // Open/close menu
  toggleButton.addEventListener("click", () => {
    ingredientsMenu.classList.toggle("hidden");
    chevronIcon.classList.toggle("rotate-180");
    if (!ingredientsMenu.classList.contains("hidden")) {
      searchIngredientInput.focus();
    }
  });
  // Search ingredient
  searchIngredientInput.addEventListener("input", () => {
    const query = searchIngredientInput.value.toLowerCase();
    const items = document.querySelectorAll(".ingredient-item");
    items.forEach((item) => {
      const text = item.textContent?.toLowerCase() || "";
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });
  // Select ingredient
  const ingredientList = document.getElementById("ingredientList");
  if (ingredientList) {
    ingredientList.addEventListener("click", (e) => {
      const item = e.target.closest(".ingredient-item");
      if (item) {
        const isSelected = item.classList.contains("bg-yellow-300");
        if (isSelected) {
          item.classList.remove("bg-yellow-300", "font-bold");
        } else {
          item.classList.add("bg-yellow-300", "font-bold");
        }
      }
    });
  }
});
