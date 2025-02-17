function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  popupElement.classList.add("popup_is-animated"); 

  const buttonClosePopup = popupElement.querySelector(".popup__close");

  function handleCloseClick() {
    closePopup(popupElement);
  }
  
  function handleOverlayClick(evt) {
    if (evt.target === popupElement) {
    closePopup(popupElement);
    }
  }

  buttonClosePopup.addEventListener("click", handleCloseClick);
  popupElement.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", keyEscape);

  popupElement._handleCloseClick = handleCloseClick;
  popupElement._handleOverlayClick = handleOverlayClick;
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  popupElement.classList.remove("popup_is-animated"); 

  const buttonClosePopup = popupElement.querySelector(".popup__close");

  buttonClosePopup.removeEventListener("click",  popupElement._handleCloseClick);
  popupElement.removeEventListener("click", popupElement._handleOverlayClick);
  document.removeEventListener("keydown", keyEscape);

  delete popupElement._handleCloseClick
  delete popupElement._handleOverlayClick
}

function keyEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup };
