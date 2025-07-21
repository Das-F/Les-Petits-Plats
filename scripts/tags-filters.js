export function addTag(tagName) {
  const tagContainer = document.querySelector(".tags");
  const tag = document.createElement("div");
  tag.className = "tag flex items-center justify-between z-10 -mt-3px h-10 w-40 bg-white rounded-lg shadow-lg p-4 space-y-2 cursor-pointer";
  tag.textContent = tagName;
  const removeIcon = document.createElement("span");
  removeIcon.className = "remove-icon text-black-500 cursor-pointer";
  removeIcon.textContent = "X";
  tag.appendChild(removeIcon);
  removeIcon.addEventListener("click", () => {
    removeTag(tag);
  });
  tagContainer.appendChild(tag);
}

function removeTag(tagElement) {
  tagElement.remove();
}
