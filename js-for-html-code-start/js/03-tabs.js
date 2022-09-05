console.log("hello tab");

const tabHeaders = document.querySelectorAll("[data-tab]");
const dataTabContent = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach((element) => {
  element.addEventListener("click", function () {
    dataTabContent.forEach((element) => {
      element.classList.add("hidden");
    });

    // находим data каждого таба по котрому кликнули
    let clickHeaderData = this.dataset.tab;
    // и подставляем его чтобы нашел такойже селектор у необходимого нам для открытия блока
    let contentBox = document.querySelector("#" + clickHeaderData);
    contentBox.classList.remove("hidden");
  });
});
