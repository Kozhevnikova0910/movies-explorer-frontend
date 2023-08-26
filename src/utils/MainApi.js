class Api {
    constructor(options) {
        this.url = options.url;
    }

    _checkResponse(res) {
        return new Promise((resolve, reject) => {
            res
                .json()
                .then((data) => {
                    if (res.ok) {
                        resolve(data);
                    } else {
                        reject(data.message);
                    }
                })
                .catch((error) => {
                    reject({ error });
                });
        });
    }

    registration (userData) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(this._checkResponse)
    }

    authorization (userData) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(this._checkResponse)
    }

    getMe ()  {
        return fetch(`${this.url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(this._checkResponse)
    }

    updateMe (userData)  {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(userData)
        })
            .then(this._checkResponse)
    }

    getFavoriteMovies () {
        return fetch(`${this.url}/movies`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkResponse)
    }

    addFavoriteMovie (movie) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
            .then(this._checkResponse)
    }

    deleteFavoriteMovie (movieId) {
        return fetch(`${this.url}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkResponse)
    }

}

const api = new Api({
    url: 'https://api.kozhevnikova.diploma.nomoreparties.co'
})

export default api
