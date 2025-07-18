export function initDropdown(filterContainerId, searchInputId) {
  const toggleButton = document.querySelector(`#${filterContainerId} .dropdown-filter`);
  const menu = document.querySelector(`#${filterContainerId} .menu`);
  const chevronIcon = document.querySelector(`#${filterContainerId} .chevron-icon`);
  const searchInput = document.getElementById(searchInputId);
  const itemList = document.querySelector(`#${filterContainerId} .item-list`);
  console.log(itemList);
  // Open/close menu
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    chevronIcon.classList.toggle("rotate-180");
    if (!menu.classList.contains("hidden")) {
      searchInput.focus();
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
    }
  });
}
