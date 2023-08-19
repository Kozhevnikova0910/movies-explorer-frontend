import React from 'react'
import './MoviesCard.css';
import {CardButton} from "../CardButton/CardButton";

export function MoviesCard({ movie, isInSavedMovies }) {

    const [isSaved,setIsSaved] = React.useState(movie.isSaved)

    function switchSaveMovie () {
        setIsSaved(!isSaved)
    }

  return(
      <article className="movies-card">
          <a className="movies-card__container" href={movie.trailerLink} target="_blank" rel="noreferrer">
              <img className="movies-card__image" src={movie.image} alt={movie.nameRU}/>
          </a>
          <div className="movies-card__description">
              <h3 className="movies-card__title">{movie.nameRU}</h3>
              <span className="movies-card__time">{movie.duration}</span>
              <CardButton isInSavedMovies={isInSavedMovies} isSaved={isSaved} onClick={switchSaveMovie}/>
          </div>
      </article>
  )
}
