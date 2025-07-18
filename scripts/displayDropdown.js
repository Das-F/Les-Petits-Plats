function createItemList() {
  const item = document.createElement("li");
  item.className = "item";
  return item;
}
export function createDropdownList(items, filterContainerId) {
  const itemList = document.querySelector(`#${filterContainerId} .item-list`);
  if (itemList) {
    itemList.innerHTML = "";
    items.forEach((item) => {
      const li = createItemList();
      li.textContent = item;
      itemList.appendChild(li);
    });
  }
}
