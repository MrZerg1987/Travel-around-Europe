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

const expandedListButton = document.querySelector(".expanded__list-button")
const expandedButtons = expandedListButton.querySelectorAll(".expanded__button");
const expandedItemsDescription = document.querySelectorAll(".expanded__item-description");
const cityTravel = ["greece", "albania", "macedonia", "montenegro", "croatia"];

expandedListButton.addEventListener("click", (evt) => {
  expandedButtons.forEach((button) => {
    button.classList.remove("expanded__button--active");
  });
  expandedItemsDescription.forEach((item) => {
    item.classList.remove("expanded__item-description--active");
    cityTravel.forEach((city) => {
      if (evt.target.id === `${city}` && item.id === `${city}-description`) {
        item.classList.add("expanded__item-description--active");
      }
    });
  });
  evt.target.classList.toggle("expanded__button--active");
});

// Question

const questionButtonSubmit = document.querySelector(".questions__button-submit");
const messageSuccess = document.querySelector(".message-success");
const closeModalButton = document.querySelector(".message-success__close-button");
const telInput = document.querySelector("#tel-input");

questionButtonSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  messageSuccess.classList.add("message-success--active");
});

closeModalButton.addEventListener("click", () => {
  messageSuccess.classList.remove("message-success--active");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    messageSuccess.classList.remove("message-success--active");
  }
});

const telInputHandler = ({
  target
}) => {
  if (target.validity.valueMissing) {
    target.setCustomValidity('Обязательное поле');
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

const initFormValidation = () => {
  telInput.addEventListener('input', telInputHandler);
};

initFormValidation();
