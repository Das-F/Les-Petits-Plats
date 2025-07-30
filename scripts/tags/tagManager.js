// This script handles the addition and removal of tags in a recipe filtering system.

import { addTagToDOM } from "./tagDisplay.js";
<<<<<<< HEAD
// This function manages the addition or removal of tags and updates the displayed recipes accordingly.
export function handleTagChange(tagName, tagType, isAdd, activeTags, filteredBySearch) {
=======

export function handleTagChange(tagName, tagType, isAdd, activeTags, onTagChange) {
>>>>>>> search-algorithm-1
  if (isAdd) {
    activeTags.push({ type: tagType, value: tagName });
  } else {
    const idx = activeTags.findIndex((t) => t.type === tagType && t.value === tagName);
    if (idx !== -1) activeTags.splice(idx, 1);
  }
<<<<<<< HEAD
  // Filter recipes based on the current search and active tags
  const filtered = filterRecipesByTags(filteredBySearch, activeTags);
  displayAndUpdateFilters(filtered);
}
// This function handles the selection of a dropdown item, adds the tag to the DOM, and updates the active tags.
export function handleDropdownItemSelected(tagName, tagType, activeTags, filteredBySearch) {
=======
  onTagChange(activeTags);
}

export function handleDropdownItemSelected(tagName, tagType, activeTags, onTagChange) {
>>>>>>> search-algorithm-1
  addTagToDOM(tagName, tagType, (name, type) => {
    handleTagChange(name, type, false, activeTags, onTagChange);
  });
  handleTagChange(tagName, tagType, true, activeTags, onTagChange);
}
