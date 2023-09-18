import React from 'react'
import './CardButton.css';

export function CardButton({movie, isInSavedMovies, isSaved, addFavoriteMovie, deleteFavoriteMovie, getFavoriteMovies, favoriteMovies, handleIsSaved}) {
  const [classNames, setClassNames] = React.useState(['card-button'])

  React.useEffect(() => {
    if (isInSavedMovies) {
      setClassNames(['card-button', 'card-button_saved-movies'])
    } else if (isSaved) {
      setClassNames(['card-button', 'card-button_movies_active'])
    } else {
      setClassNames(['card-button', 'card-button_movies'])
    }
  }, [isSaved, favoriteMovies])

  function switchMovieStatus () {
    const movieTemp = favoriteMovies.find((item) => item.movieId === movie.id)
    if (isInSavedMovies) {
      deleteFavoriteMovie(movieTemp._id)
      handleIsSaved(false)
      setClassNames(['card-button', 'card-button_saved-movies'])
    } else if (isSaved) {
      deleteFavoriteMovie(movieTemp._id)
      handleIsSaved(false)
      setClassNames(['card-button', 'card-button_movies_active'])
    } else {
      addFavoriteMovie(movie)
      handleIsSaved(true)
      setClassNames(['card-button', 'card-button_movies'])
    }
  }



  return (
    <button className={classNames.join(' ')} type="button" onClick={switchMovieStatus}/>
  )
}