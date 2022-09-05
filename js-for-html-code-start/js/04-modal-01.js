const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

// кнопка открыть модалку
modalButtons.forEach((element) => {
  element.addEventListener("click", function () {
    // работаем через camalCase а не -
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector("#" + modalId);
    modal.classList.remove("hidden");

    // так как мы уже здесь обратились к molal, то чтобы не искать потом все modal и проходить
    // их forEach и вешать клики, то просто здесь в текущей открытой мадалке напишем stopPropagation
    // ищем внутри модалки nodal-window и запрещаем передовать клики выше

    modal
      .querySelector(".modal-window")
      .addEventListener("click", function (event) {
        event.stopPropagation();
      });
  });
});

//через 2 forEach

// modalCloseButtons.forEach((element) => {
//   element.addEventListener("click", function () {
//     const modal = document.querySelectorAll("[data-modal]");
//     modal.forEach((element) => {
//       element.classList.add("hidden");
//     });
//   });
// });

// кнопки закрыть модалки

modalCloseButtons.forEach((element) => {
  element.addEventListener("click", function () {
    const modal = this.closest("[data-modal]");
    modal.classList.add("hidden");
  });
});

// закрытие модалок по фону

const allModals = document.querySelectorAll("[data-modal]");

allModals.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
