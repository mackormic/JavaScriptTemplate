console.log("hello");

let button = document.querySelector("#button");
let content = document.querySelector("#content");

// button.addEventListener("click", function () {
//   content.classList.toggle("content-hidden");
//   if (content.classList.contains("content-hidden")) {
//     button.textContent = "Открыть кнопку";
//   } else {
//     button.textContent = "Закрыть кнопку";
//   }
// });

button.addEventListener("click", function () {
  // так как toggle передает true или false. то мы сокращаем
  if (content.classList.toggle("content-hidden")) {
    button.textContent = "Открыть кнопку";
  } else {
    button.textContent = "Закрыть кнопку";
  }
});
