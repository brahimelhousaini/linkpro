const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});




const shareButton = document.getElementById("shareButton");
const shareOptions = document.getElementById("shareOptions");

shareButton.addEventListener("click", () => {
  shareOptions.style.display = "block";
});

