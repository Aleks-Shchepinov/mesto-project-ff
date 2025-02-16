function popupOpen(
  popupElement,
  nameProfile,
  descriptionProfile,
  inputName,
  inputDescription
) {
  popupElement.classList.add("popup_is-opened");
  popupElement.classList.add("popup_is-animated");

  setTimeout(() => {
    popupElement.style.visibility = "visible";
    popupElement.style.opacity = "1";
    popupElement.style.pointerEvents = "auto";
  }, 0);

  if (popupElement.classList.contains("popup_type_edit")) {
    inputName.value = nameProfile.textContent;
    inputDescription.value = descriptionProfile.textContent;
  }
  const buttonClosePopup = popupElement.querySelector(".popup__close");

  buttonClosePopup.addEventListener("click", () => popupClose(popupElement));
  popupElement.addEventListener("click", (event) =>
    popupOverlayClose(event, popupElement)
  );
  document.addEventListener("keydown", (event) =>
    keyEscape(event, popupElement)
  );
}

function popupClose(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", (event) =>
    keyEscape(event, popupElement)
  );
  popupElement.style.opacity = "0";
  popupElement.style.pointerEvents = "none";

  setTimeout(() => {
    popupElement.style.visibility = "hidden";
    popupElement.classList.remove("popup_is-opened");
  }, 0);
  const buttonClosePopup = popupElement.querySelector(".popup__close");

  buttonClosePopup.removeEventListener("click", () => popupClose(popupElement));
  popupElement.removeEventListener("click", (event) =>
    popupOverlayClose(event, popupElement)
  );
  document.removeEventListener("keydown", keyEscape);
}

function keyEscape(event, popupElement) {
  if (event.key === "Escape") {
    popupClose(popupElement);
  }
}

function popupOverlayClose(event, popupElement) {
  if (event.target === popupElement) {
    popupClose(popupElement);
  }
}

export { popupOpen, popupClose };
