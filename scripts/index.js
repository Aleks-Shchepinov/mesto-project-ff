function createTemplates(item) {
  const templates = document
    .querySelector("#card-template")
    .content.cloneNode(true);

  const cardName = templates.querySelector(".card__title");
  const cardImage = templates.querySelector(".card__image");
  const deleteButton = templates.querySelector(".card__delete-button");

  cardName.textContent = item.name;
  cardImage.src = item.link;

  deleteButton.addEventListener("click", function () {
    const removeItem = deleteButton.closest(".places__item");
    removeItem.remove();
  });

  return templates;
}

function addTemplates(cards) {
  const placesList = document.querySelector(".places__list");
  cards.forEach(function (item) {
    const templates = createTemplates(item);

    placesList.append(templates);
  });
}

addTemplates(initialCards);
