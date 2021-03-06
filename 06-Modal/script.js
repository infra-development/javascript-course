"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", modalOpen);
}
btnCloseModal.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

// when we press 'escape' key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
