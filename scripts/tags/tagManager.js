// This script handles the addition and removal of tags in a recipe filtering system.

import { filterRecipesByTags } from "../filters/recipeFilters.js";
import { displayAndUpdateFilters } from "../ui/display.js";
import { addTagToDOM } from "./tagDisplay.js";
export function handleTagChange(tagName, tagType, isAdd, activeTags, filteredBySearch) {
  if (isAdd) {
    activeTags.push({ type: tagType, value: tagName });
  } else {
    const idx = activeTags.findIndex((t) => t.type === tagType && t.value === tagName);
    if (idx !== -1) activeTags.splice(idx, 1);
  }
  const filtered = filterRecipesByTags(filteredBySearch, activeTags);
  displayAndUpdateFilters(filtered);
}
export function handleDropdownItemSelected(tagName, tagType, activeTags, filteredBySearch) {
  addTagToDOM(tagName, tagType, (name, type) => {
    handleTagChange(name, type, false, activeTags, filteredBySearch);
  });
  handleTagChange(tagName, tagType, true, activeTags, filteredBySearch);
}
