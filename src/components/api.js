const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-34",
  headers: {
    authorization: "3256d904-491c-42ad-aa4f-19f878d8d7b5",
    "Content-Type": "application/json",
  },
};

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

// 3. Загрузка информации о пользователе с сервера
export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

// 4. Загрузка карточек сервера
export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

// 5. Редактирование профиля
export const transferProfileInfo = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

// 6. Добавление новой карточки
export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

// 8. Удаление карточки
export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

export const toggleAddLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

export const toggleDeleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};

// 10. Обновление аватара пользователя
export const updatedProfileAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    });
};
