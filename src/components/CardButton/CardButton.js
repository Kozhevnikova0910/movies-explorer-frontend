import './CardButton.css';

export function CardButton({isInSavedMovies, isSaved, onClick}) {
  const classNames = ['card-button'];

  if (isInSavedMovies) {
    classNames.push('card-button_saved-movies')
  } else if (isSaved) {
    classNames.push('card-button_movies_active')
  } else {
    classNames.push('card-button_movies')
  }

  return (
    <button className={classNames.join(' ')} type="button" onClick={onClick}/>
  )
}