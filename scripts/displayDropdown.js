const itemList = document.querySelector(".item-list");

function createItemList() {
  const item = document.createElement("li");
  item.className = "item";
  item.setAttribute("hidden", "true");
  itemList.appendChild(item);
  return item;
}
export function createIngredientList(ingredients) {
  const ingredientList = document.getElementById("ingredientList");
  if (ingredientList) {
    ingredientList.innerHTML = ""; // <-- Vide la liste avant d'ajouter les items
    ingredients.forEach((ingredient) => {
      const li = createItemList();
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });
  }
}

// const dropdownFilter = document.querySelector("dropdown-filter");
// const chevronIcon = document.getElementById("chevronIcon");

// function openCloseFilterMenu(dropdownFilter, chevronIcon, menu, searchInput) {
//   const inputFilterMenu = document.createElement("input");
//   inputFilterMenu.className = "w-full py-1 outline-none border-2 border-gray-300";
//   inputFilterMenu.setAttribute("hidden", "true");
//   dropdownFilter.appendChild(inputFilterMenu);

//   const inputFilterMenuLoop = document.createElement("img src='/images/magnifying-glass-thin-input.svg' alt='Rechercher un ingrédient' class='size-5 ml-2 justify-center content-center'/>");
//   inputFilterMenuLoop.className = "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none";
//   inputFilterMenu.setAttribute("hidden", "true");
//   dropdownFilter.appendChild(inputFilterMenuLoop);

//   const filterMenuList = document.createElement("ul");
//   filterMenuList.className = "rounded-lg py-1 w-40 h-100 overflow-scroll bg-white";
//   inputFilterMenu.setAttribute("hidden", "true");
//   filterMenuList.className = "bg-gray-200 rounded-lg py-1 w-40 h-100 overflow-scroll bg-white";
//   dropdownFilter.appendChild(filterMenuList);

//   dropdownFilter.addEventListener("click", () => {
//     chevronIcon.classList.toggle("rotate-180");
//     inputFilterMenu.setAttribute("hidden", "false");
//   });
// }

const btn = document.querySelector(".dropdown-filter"); // parent du chevron
const chevronIcon = document.getElementById("chevronIcon");
const dropdownList = document.querySelector(".dropdown-menu");

btn.addEventListener("click", () => {
  const isClosed = dropdownList.classList.contains("max-h-0");

  if (isClosed) {
    chevronIcon.classList.add("rotate-180");
    dropdownList.classList.remove("max-h-0");
    dropdownList.classList.add("max-h-96");
    console.log("Menu ouvert");
  } else {
    chevronIcon.classList.remove("rotate-180");
    dropdownList.classList.remove("max-h-96");
    dropdownList.classList.add("max-h-0");
    console.log("Menu fermé");
  }
});
