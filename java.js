const button = document.querySelector(".inner-image");
const show = document.querySelector(".social");

button.addEventListener("click", () => {
  show.style.display = "flex";
});

show.addEventListener("click", () => {
  show.style.display = "none";
});
