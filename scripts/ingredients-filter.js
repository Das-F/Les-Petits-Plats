document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDropdown");
  const ingredientsMenu = document.getElementById("ingredientsMenu");
  const chevronIcon = document.getElementById("chevronIcon");
  const searchIngredientInput = document.getElementById("searchIngredientInput");
  const ingredientList = document.getElementById("ingredientList");

  // Verification
  if (!toggleButton || !ingredientsMenu || !chevronIcon || !searchIngredientInput || !ingredientList) {
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
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });

  // Selectingredient
  ingredientList.addEventListener("click", (e) => {
    const item = e.target.closest(".ingredient-item");
    if (item) {
      item.classList.toggle("bg-yellow-300");
      item.classList.toggle("font-bold");
    }
  });
});
