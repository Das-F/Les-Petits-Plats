// This script manages the display of search messages based on user input and search results.
// It provides feedback to the user when the search query is too short or when no results are found.

const MIN_LENGTH_SEARCH = 3;
let searchResultsElement = null;

// This function initializes the search results element if it doesn't already exist.
function getSearchResultsElement() {
  if (!searchResultsElement) {
    searchResultsElement = document.createElement("div");
    searchResultsElement.className = "search-results text-white mt-4";
    const mainHead = document.querySelector(".main-head");
    if (mainHead) {
      mainHead.appendChild(searchResultsElement);
    }
  }
  return searchResultsElement;
}
// This function updates the search message based on the filtered recipes and the search query.
export function updateSearchMessage(filteredRecipes, searchQuery) {
  const messageElement = getSearchResultsElement();

  if (searchQuery && searchQuery.length > 0 && searchQuery.length < MIN_LENGTH_SEARCH) {
    messageElement.textContent = `Merci de saisir au moins ${MIN_LENGTH_SEARCH} 
caractères.`;
  } else if (searchQuery && searchQuery.length >= MIN_LENGTH_SEARCH && filteredRecipes.length === 0) {
    messageElement.textContent = `Aucune recette ne contient "${searchQuery}" 
vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
  } else {
    messageElement.textContent = "";
  }
}
