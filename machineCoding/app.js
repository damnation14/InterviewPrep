const foodItems = [
  {
    id: 1,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 2,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 3,
    itemName: "sambar",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 4,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 1,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 2,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 3,
    itemName: "sambar",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 4,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 1,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 2,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 3,
    itemName: "sambar",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
  {
    id: 4,
    itemName: "dish 1",
    itemUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
  },
];

const swiggyContainer = document.querySelector(".swiggy");
const itemSearch = document.querySelector(".itemSearch");
const itemSearchButton = document.querySelector(".itemSearchButton");

const createItemsList = (items) => {
  const previousItemsListContainer = document.querySelector(
    ".itemsListContainer"
  );
  if (previousItemsListContainer) {
    swiggyContainer.removeChild(previousItemsListContainer);
  }

  const itemsListContainer = document.createElement("div");
  itemsListContainer.classList.add("itemsListContainer");
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.addEventListener("click", () => {
      window.location.href = "swiggy2.html";
    });

    const itemImg = document.createElement("img");
    itemImg.classList.add("itemImg");
    itemImg.src = item.itemUrl;
    itemImg.alt = item.itemName;

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = item.itemName;

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemTitle);
    itemsListContainer.appendChild(itemDiv);
  });
  swiggyContainer.appendChild(itemsListContainer);
};

const getFilteredItems = (itemSearchText) => (item) =>
  _.includes(item.itemName, itemSearchText);

itemSearchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const itemSearchText = itemSearch.value;
  const filteredItemsList = _.filter(
    foodItems,
    getFilteredItems(itemSearchText)
  );

  createItemsList(filteredItemsList);
});
