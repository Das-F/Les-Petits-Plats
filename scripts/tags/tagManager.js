// This script handles the addition and removal of tags in a recipe filtering system.

import { filterRecipesByTags } from "../filters/recipeFilters.js";
import { displayAndUpdateFilters } from "../ui/display.js";
import { addTagToDOM } from "./tagDisplay.js";
// This function manages the addition or removal of tags and updates the displayed recipes accordingly.
export function handleTagChange(tagName, tagType, isAdd, activeTags, filteredBySearch) {
  if (isAdd) {
    activeTags.push({ type: tagType, value: tagName });
  } else {
    const idx = activeTags.findIndex((t) => t.type === tagType && t.value === tagName);
    if (idx !== -1) activeTags.splice(idx, 1);
  }
  // Filter recipes based on the current search and active tags
  const filtered = filterRecipesByTags(filteredBySearch, activeTags);
  displayAndUpdateFilters(filtered);
}
// This function handles the selection of a dropdown item, adds the tag to the DOM, and updates the active tags.
export function handleDropdownItemSelected(tagName, tagType, activeTags, filteredBySearch) {
  addTagToDOM(tagName, tagType, (name, type) => {
    handleTagChange(name, type, false, activeTags, filteredBySearch);
  });
  handleTagChange(tagName, tagType, true, activeTags, filteredBySearch);
}
