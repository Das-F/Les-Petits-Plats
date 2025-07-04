document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDropdown");
  const ingredientsMenu = document.getElementById("ingredientsMenu");
  const chevronIcon = document.getElementById("chevronIcon");
  const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll(".ingredient-item-list");

  // Open/close the ingredients menu
  toggleButton.addEventListener("click", () => {
    ingredientsMenu.classList.toggle("hidden");
    chevronIcon.classList.toggle("rotate-180");
    if (!ingredientsMenu.classList.contains("hidden")) {
      searchInput.focus();
    }
  });

  // Searching
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });

  // Selection
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("bg-yellow-300"));
      item.classList.add("bg-yellow-300");
    });
  });
});
