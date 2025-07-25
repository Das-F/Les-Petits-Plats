// This script adds a tag to the DOM and sets up an event listener for removing the tag.
// It creates a tag element with a text and a remove icon, and appends it to the tag container.
// When the remove icon is clicked, it removes the tag from the DOM and calls the provided.

export function addTagToDOM(tagName, tagType, onRemove) {
  const tagContainer = document.querySelector(".tags");
  const exists = Array.from(tagContainer.children).some((tag) => tag.querySelector(".tag-text")?.textContent === tagName);
  if (exists) return;
  const tag = document.createElement("div");
  tag.className = "tag flex items-center justify-between z-1 h-10 w-40 bg-white rounded-lg shadow-lg p-4 space-y-2 cursor-pointer";
  const tagText = document.createElement("span");
  tagText.className = "tag-text text-black-500 text-sm truncate m-0 p-0";
  tagText.textContent = tagName;
  tag.appendChild(tagText);
  const removeIcon = document.createElement("span");
  removeIcon.className = "remove-icon text-black-500 pl-1 cursor-pointer";
  removeIcon.textContent = "X";
  tag.appendChild(removeIcon);
  removeIcon.addEventListener("click", () => {
    tag.remove();
    onRemove(tagName, tagType);
  });
  tagContainer.appendChild(tag);
}
