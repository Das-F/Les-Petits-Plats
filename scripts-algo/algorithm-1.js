const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});
