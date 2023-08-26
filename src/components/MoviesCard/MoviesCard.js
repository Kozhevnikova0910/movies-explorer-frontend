import React from 'react'
import './MoviesCard.css';
import {CardButton} from "../CardButton/CardButton";

export function MoviesCard({movie, favoriteMovies, addFavoriteMovie, deleteFavoriteMovie, isInSavedMovies}) {

    const [classNames, setClassNames] = React.useState(['card-button'])

    React.useEffect(() => {
        switchMovieStatus()
    }, [favoriteMovies])


    function getModifiedDuration() {
        const hours = String(movie.duration / 60).split('.')[0]
        const minutes = movie.duration % 60
        return `${hours}ч${minutes}м`
    }

    function switchMovieStatus() {
        const movieTemp = favoriteMovies.find((item) => item.movieId === movie.id)
        if (isInSavedMovies) {
            setClassNames(['card-button', 'card-button_saved-movies'])
        } else if (movieTemp) {
            setClassNames(['card-button', 'card-button_movies_active'])
        } else {
            setClassNames(['card-button', 'card-button_movies'])
        }
    }

    function clickButton() {
        const movieTemp = favoriteMovies.find((item) => item.movieId === movie.id)
        if (isInSavedMovies) {
            console.log(movie)
            deleteFavoriteMovie(movie._id)
        } else if (movieTemp) {
            console.log(movieTemp)
            deleteFavoriteMovie(movieTemp._id)
        } else {
            addFavoriteMovie(movie)
        }
    }

    return (
        <article className="movies-card">
            <a className="movies-card__container" href={movie.trailerLink} target="_blank" rel="noreferrer">
                {
                    movie.image.url ?
                        <img className="movies-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`}
                             alt={movie.nameRU}/>
                        :
                        <img className="movies-card__image" src={movie.image} alt={movie.nameRU}/>
                }
            </a>
            <div className="movies-card__description">
                <h3 className="movies-card__title">{movie.nameRU}</h3>
                <span className="movies-card__time">{getModifiedDuration()}</span>
                <button className={classNames.join(' ')} type="button" onClick={clickButton}/>
            </div>
        </article>
    )
}
