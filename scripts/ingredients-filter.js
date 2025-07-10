//
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDropdown");
  const ingredientsMenu = document.getElementById("ingredientsMenu");
  const chevronIcon = document.getElementById("chevronIcon");
  const searchIngredientInput = document.getElementById("searchIngredientInput");
  const items = document.querySelectorAll(".ingredient-item-list");

  if (!toggleButton || !ingredientsMenu || !chevronIcon || !searchIngredientInput || items.length === 0) {
    console.warn("Un ou plusieurs éléments requis sont manquants dans le DOM.");
    return;
  }

  // Open/close ingredient menu
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

    items.forEach((item) => {
      const text = item.textContent?.toLowerCase() || "";
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });

  // Select ingredient
  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Toggle la sélection sur l'élément cliqué
      const isSelected = item.classList.contains("bg-yellow-300");
      if (isSelected) {
        // Si déjà sélectionné, on enlève la sélection
        item.classList.remove("bg-yellow-300", "font-bold");
      } else {
        // Sinon, on ajoute la sélection
        item.classList.add("bg-yellow-300", "font-bold");
      }
    });
  });
});
