const searchInput = document.getElementById("search-input");
const searchResults = document.createElement("div");
searchResults.className = "search-results";
searchInput.parentNode.appendChild(searchResults);

fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    const recipe = [...data];
    console.log(recipe);
  });

function createSearchAlgorithm() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value);
  });
}
createSearchAlgorithm();

// Prépa des données pour l'algorithme de recherche
// Configuration des options de recherche
// Fonction de recherche principale
// Fonctions utilitaires
// Retourne les résultats de la recherche
