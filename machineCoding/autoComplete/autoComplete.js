const FRUITS = ["mango", "banana", "kiwi", "orange", "melons", "musk melons"];

const searchButton = document.querySelector("#search-button");

const searchKeyword = document.querySelector("#search-keyword");

const suggestionsContainer = document.querySelector("#suggestions-container");

const createSuggestion = (fruit) => {
  const suggestionDiv = document.createElement("div");
  suggestionDiv.textContent = fruit;
  suggestionsContainer.appendChild(suggestionDiv);
};

const fetchSuggestions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = searchKeyword.value.trim().toLowerCase(); // Trimmed input

      if (!query) {
        suggestionsContainer.innerHTML = ""; // Clear suggestions if input is empty
        resolve([]);
        return;
      }

      const filteredFruitsList = FRUITS.filter((fruit) =>
        fruit.toLowerCase().startsWith(searchKeyword.value.toLowerCase())
      );
      resolve(filteredFruitsList);
    }, 300);
  });
};

const showSuggestions = (filteredFruitsList) => {
  suggestionsContainer.innerHTML = "";
  filteredFruitsList.forEach(createSuggestion);
};

const debounce = (handleFunc) => {
  let timeId;
  return function func() {
    clearInterval(timeId);
    timeId = setTimeout(() => handleFunc(), 3000);
  };
};

const handleSearchFruits = async (e) => {
  const searchedFruit = searchKeyword.value;
  console.log("searching..");
  if (searchedFruit) {
    const suggestions = await fetchSuggestions();
    showSuggestions(suggestions);
    return;
  }
  suggestionsContainer.innerHTML = "";
};

const debouncedHandleSearchFruits = debounce(handleSearchFruits);

searchKeyword.addEventListener("input", debouncedHandleSearchFruits);
