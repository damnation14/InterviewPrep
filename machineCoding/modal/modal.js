const button = document.querySelector(".modalButton");
const modalContainer = document.querySelector(".modalContainer");

button.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
