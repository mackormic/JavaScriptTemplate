console.log("hello accordeon");

let headers = document.querySelectorAll("[data-name]");

//  БЕЗ СОКРАЩЕНИЙ ВАРИАНТ 1

headers.forEach((element) => {
  element.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
});

// nextElementSibling --- находи следующий элемент за ним

// Вариант 2

// function showBlock() {
//   this.nextElementSibling.classList.toggle("hidden");
// }

// headers.forEach((element) => {
//   element.addEventListener("click", showBlock);
// });
