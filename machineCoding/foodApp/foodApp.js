const searchButton = document.querySelector(".searchButton");
const foodInput = document.querySelector(".searchInput");

const createFoodDiv = (food) => {
  const foodDiv = document.createElement("div");
  foodDiv.classList.add("foodItem");

  const foodImage = document.createElement("img"); // Changed to img
  foodImage.src = food.strMealThumb;

  const foodName = document.createElement("div");
  foodName.innerText = food.strMeal;

  foodDiv.appendChild(foodImage); // Append children
  foodDiv.appendChild(foodName);

  return foodDiv;
};

const createFoodList = (foodItems, foodContainer) => {
  foodItems.forEach((item) => {
    const foodDiv = createFoodDiv(item);
    foodContainer.appendChild(foodDiv);
  });

  return foodContainer;
};

const handleFetchFoodSuccess = (foodItems) => {
  const { meals: foodItemslist } = foodItems;
  if (!foodItemslist) {
    console.error("No food items found!");
    return;
  }
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("foodContainer");

  const foodList = createFoodList(foodItemslist, foodContainer);
  document.body.appendChild(foodList); // Append to DOM
};

const handleFetchFoodError = (error) => {
  console.error("Failed to fetch food:", error);
};

const fetchFood = (e) => {
  const foodInputValue = foodInput.value;
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInputValue}`
  )
    .then((response) => response.json()) // Parse JSON response
    .then(handleFetchFoodSuccess)
    .catch(handleFetchFoodError);
};

searchButton.addEventListener("click", fetchFood);
