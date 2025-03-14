function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");

  const buttonClosePopup = popupElement.querySelector(".popup__close");

  document.addEventListener('keydown', handlekeyEscape);
  }

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");

  document.removeEventListener('keydown', handlekeyEscape);
}

function handlekeyEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup };
