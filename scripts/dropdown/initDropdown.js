import { addTag } from "../tags-filters.js"; // Ajoute cet import en haut du fichier

export function initDropdown(filterContainerId, searchInputId) {
  const toggleButton = document.querySelector(`#${filterContainerId} .dropdown-filter`);
  const menu = document.querySelector(`#${filterContainerId} .menu`);
  const chevronIcon = document.querySelector(`#${filterContainerId} .chevron-icon`);
  const searchInput = document.getElementById(searchInputId);
  const itemList = document.querySelector(`#${filterContainerId} .item-list`);

  // Open/close menu
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.add("-translate-y-3.5");
    chevronIcon.classList.toggle("rotate-180");

    if (!menu.classList.contains("hidden")) {
      searchInput.focus();
    }
  });
  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      chevronIcon.classList.remove("rotate-180");
    }
  });
  // Search item
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(`#${filterContainerId} .item-list .item`);
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });
  // Select item
  itemList.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (item) {
      item.classList.toggle("bg-yellow-300");
      item.classList.toggle("font-bold");
      addTag(item.textContent);
    }
  });
}
