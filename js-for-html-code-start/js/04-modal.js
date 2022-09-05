console.log("modal!!!");

const button = document.querySelector("[data-modal-button]");
const modal = document.querySelector("[data-modal]");
const buttonClose = document.querySelector("[data-modal-close]");

button.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

buttonClose.addEventListener("click", function () {
  modal.classList.add("hidden");
});

modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// ищем клик по модалке и не даем ему пойти ввех к родителю
modal
  .querySelector(".modal-window")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
