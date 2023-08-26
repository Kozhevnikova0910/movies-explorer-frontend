function _checkResponse(res) {
  return res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`);
}

const getMovies = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies')
      .then(_checkResponse)
}

export {getMovies}