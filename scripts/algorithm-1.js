import { initRecipeCards } from "./recipecard.js";

const searchInput = document.getElementById("search-input");
const searchResults = document.createElement("div");
searchResults.className = "search-results text-white mt-4";
const mainHead = document.querySelector(".main-head");
mainHead.appendChild(searchResults);
const recipeList = document.querySelector(".recipe-list");

let recipes = [];

fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    recipes = [...data];
    console.log(recipes);
  });

function createSearchAlgorithm() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    console.log(value);

    recipeList.innerHTML = "";

    if (value.length < 2) {
      searchResults.innerHTML = "Merci de saisir au moins 2 caractères.";
    } else {
      searchResults.innerHTML = "";
      const results = recipes.filter((recipe) => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const recipeIngredients = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
        return recipeName.includes(value) || recipeDescription.includes(value) || recipeIngredients.some((ingredient) => ingredient.includes(value));
      });
      if (results.length === 0) {
        recipeList.innerHTML = "";
        recipeList.innerHTML = "Aucun résultat trouvé.";
      } else {
        recipeList.innerHTML = "";
        results.sort((a, b) => a.name.localeCompare(b.name));
        initRecipeCards(results);
      }
    }
  });
}
createSearchAlgorithm();

// Prépa des données pour l'algorithme de recherche
// Configuration des options de recherche
// Fonction de recherche principale
// Fonctions utilitaires
// Retourne les résultats de la recherche
