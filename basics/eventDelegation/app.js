const list = document.querySelector(".list");

const handleListRowClick = (e) => {
  console.log(e.target.innerHTML);
};

list.addEventListener("click", handleListRowClick);
