import { toggleAddLike, toggleDeleteLike } from "./api.js";
import { deleteCard } from "./api.js";

function createCards(item, openImagePopup, userId) {
  const templates = document
    .querySelector("#card-template")
    .content.querySelector(".places__item")
    .cloneNode(true);

  const cardName = templates.querySelector(".card__title");
  const cardImage = templates.querySelector(".card__image");
  const deleteButton = templates.querySelector(".card__delete-button");
  const buttonLike = templates.querySelector(".card__like-button");
  const likeCounter = templates.querySelector(".card_like-counter");

  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  likeCounter.textContent = item.likes.length;
  if (item.likes.some((like) => like._id === userId)) {
    buttonLike.classList.add("card__like-button_is-active");
  }

  buttonLike.addEventListener("click", () =>
    toggleLike(item._id, buttonLike, likeCounter)
  );

  if (item.owner._id !== userId) {
    deleteButton.style.display = "none";
  }

  deleteButton.addEventListener("click", () => {
    deleteCard(item._id)
      .then(() => {
        const removeItem = deleteButton.closest(".places__item");
        removeItem.remove();
      })
      .catch((err) => {
        console.log("Ошибка при удалении карточки:", err);
      });
  });

  cardImage.addEventListener("click", () => openImagePopup(item));

  return templates;
}

function toggleLike(cardId, likeButton, likeCounter) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");

  if (isLiked) {
    toggleDeleteLike(cardId)
      .then((updatedItem) => {
        likeButton.classList.remove("card__like-button_is-active");
        likeCounter.textContent = updatedItem.likes.length;
      })
      .catch((err) => {
        console.log("Ошибка при добавлении лайка:", err);
      });
  } else {
    toggleAddLike(cardId)
      .then((updatedItem) => {
        likeButton.classList.add("card__like-button_is-active");
        likeCounter.textContent = updatedItem.likes.length;
      })
      .catch((err) => {
        console.log("Ошибка при удалении лайка:", err);
      });
  }
}

export { createCards, toggleLike };
