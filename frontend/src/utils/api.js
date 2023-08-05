class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('error');
  }

  _request(endpoint, options) {
    return fetch(this.url + endpoint, options)
    .then(this._checkResponse);
  }

  getUserData() {
    return this._request('users/me', {
        credentials: 'include',
        headers: this.headers
      });
  }

  getInitialCards() {
    return this._request('cards', {
      credentials: 'include',
      headers: this.headers
    });
}

postUserInfo({ name, about }) {
  return this._request('users/me', {
    method: 'PATCH',
    credentials: 'include',
    headers: this.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  }); 
}

postNewCard({ name, link }) { 
  return this._request('cards', {
    method: 'POST',
    credentials: 'include',
    headers: this.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  });
}

deleteCard(data) {
  return this._request(`cards/${data._id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: this.headers
  });
}

toggleLikeButton(id, isLiked) {
  if (!isLiked)
  {
    return this._request(`cards/${id}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers
    });
  }
  return this._request(`cards/${id}/likes`, {
    method: 'PUT',
    credentials: 'include',
    headers: this.headers
  });
}

changeAvatar(data) {
  return this._request('users/me/avatar', {
    method: 'PATCH',
    credentials: 'include',
    headers: this.headers,
    body: JSON.stringify(data)
  });
}
}

const api = new Api({
  url: 'http://api.mesto585.nomoreparties.co',
  headers: {
'Content-Type': 'application/json'
}
});

export default api;