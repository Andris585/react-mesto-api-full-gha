export const BASE_URL = 'https://api.mesto585.nomoreparties.co/';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('error');
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  })
  .then((res) => checkResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  })
  .then((res) => checkResponse(res));
};

export const getContent = () => {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
        "Content-Type": "application/json",
    }
  })
  .then((res) => checkResponse(res));
}