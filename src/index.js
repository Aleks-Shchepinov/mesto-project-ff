import "./pages/index.css";
import { initialCards } from "./cards.js";
import { createCards, cardLike } from "./components/card.js";
import { popupOpen, popupClose } from "./components/modal.js";

const placesList = document.querySelector(".places__list");
const editProfile = document.querySelector(".popup");
const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_new-card");
const formPopup = document.querySelector(".popup__form");
const inputName = formPopup.querySelector(".popup__input_type_name");
const inputDescription = formPopup.querySelector(
  ".popup__input_type_description"
);
const nameProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const formAddNewCard = popupAddCard.querySelector(".popup__form");
const nameNewCard = formAddNewCard.querySelector(
  ".popup__input_type_card-name"
);
const linkNewCard = formAddNewCard.querySelector(".popup__input_type_url");

function addTemplates(cards) {
  cards.forEach(function (item) {
    const templates = createCards(item);
    placesList.append(templates);
  });
}

addTemplates(initialCards);

// обработчик отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  const popupElement = evt.target.closest(".popup");
  const nameValue = inputName.value;
  const descriptionValue = inputDescription.value;

  nameProfile.textContent = nameValue;
  descriptionProfile.textContent = descriptionValue;

  popupClose(popupElement);
}

formPopup.addEventListener("submit", handleFormSubmit);
buttonAddCard.addEventListener("click", () => popupOpen(popupAddCard));
buttonProfileEdit.addEventListener("click", () =>
  popupOpen(
    popupEditProfile,
    nameProfile,
    descriptionProfile,
    inputName,
    inputDescription
  )
);

//функция создания карточки
function handleAddCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameNewCard.value,
    link: linkNewCard.value,
  };

  const cardElement = createCards(newCard, cardLike);
  placesList.prepend(cardElement);

  formAddNewCard.reset();
  popupClose(popupAddCard);
}

formAddNewCard.addEventListener("submit", handleAddCard);
