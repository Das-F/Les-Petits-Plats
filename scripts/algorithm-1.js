const searchInput = document.getElementById("search-input");
const searchResults = document.createElement("div");
searchResults.className = "search-results";
searchInput.parentNode.appendChild(searchResults);

let dataArray = [];

async function getRecipes() {
  const response = await fetch("recipes.json");
  const { recipes } = await response.json();
  dataArray = recipes;
  return recipes;
}
getRecipes().then((data) => {
  console.log(data);
});

function createSearchAlgorithmOne() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value);
  });
}
createSearchAlgorithmOne();

// Prépa des données pour l'algorithme de recherche
// Configuration des options de recherche
// Fonction de recherche principale
// Fonctions utilitaires
// Retourne les résultats de la recherche
