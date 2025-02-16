import { popupOpen } from "./modal.js";

function createCards(item) {
  const templates = document
    .querySelector("#card-template")
    .content.querySelector(".places__item")
    .cloneNode(true);

  const cardName = templates.querySelector(".card__title");
  const cardImage = templates.querySelector(".card__image");
  const deleteButton = templates.querySelector(".card__delete-button");
  const buttonLike = templates.querySelector(".card__like-button");

  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  deleteButton.addEventListener("click", function () {
    const removeItem = deleteButton.closest(".places__item");
    removeItem.remove();
  });

  buttonLike.addEventListener("click", cardLike);
  cardImage.addEventListener("click", () => openImagePopup(item));

  return templates;
}

function cardLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function openImagePopup(item) {
  const popupImage = document.querySelector(".popup_type_image");
  const popupImageContent = popupImage.querySelector(".popup__image");
  const popupImageCaption = popupImage.querySelector(".popup__caption");

  popupImageContent.src = item.link;
  popupImageContent.alt = item.link;
  popupImageCaption.textContent = item.name;

  popupOpen(popupImage);
}

export { createCards, cardLike, openImagePopup };
