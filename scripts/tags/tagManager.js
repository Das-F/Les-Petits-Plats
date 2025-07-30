// This script handles the addition and removal of tags in a recipe filtering system.

import { addTagToDOM } from "./tagDisplay.js";

export function handleTagChange(tagName, tagType, isAdd, activeTags, onTagChange) {
  if (isAdd) {
    activeTags.push({ type: tagType, value: tagName });
  } else {
    const idx = activeTags.findIndex((t) => t.type === tagType && t.value === tagName);
    if (idx !== -1) activeTags.splice(idx, 1);
  }
  onTagChange(activeTags);
}

export function handleDropdownItemSelected(tagName, tagType, activeTags, onTagChange) {
  addTagToDOM(tagName, tagType, (name, type) => {
    handleTagChange(name, type, false, activeTags, onTagChange);
  });
  handleTagChange(tagName, tagType, true, activeTags, onTagChange);
}
