// Mobile-menu

const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

navList.classList.add("main-nav__list--close");
navToggle.classList.remove("main-nav__toggle--no-js");
navList.classList.remove("main-nav__list--no-js");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("main-nav__list--close");
  navToggle.classList.toggle("main-nav__toggle--close");
});

// Tabs

const expandedButtons = document.querySelectorAll(".expanded__button");
const expandedItemsDescription = document.querySelectorAll(".expanded__item-description");

expandedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("expanded__button--active")) {
      button.classList.remove("expanded__button--active");
    }
    button.classList.add("expanded__button--active");
    expandedItemsDescription.forEach((item) => {
      if (item.classList.contains("expanded__item-description--active")) {
        item.classList.remove("expanded__item-description--active");
      }
      item.classList.add("expanded__item-description--active");
    });
  });
});

// Question

const questionButtonSubmit = document.querySelector(".questions__button-submit");
const messageSuccess = document.querySelector(".message-success");
const closeModalButton = document.querySelector(".close-modal-button");

questionButtonSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  messageSuccess.classList.add("message-success--active");
});

closeModalButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  messageSuccess.classList.remove("message-success--active");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === 27) {
    if (messageSuccess.classList.contains("message-success--active")) {
      messageSuccess.classList.remove("message-success--active")
    }
  }
});
