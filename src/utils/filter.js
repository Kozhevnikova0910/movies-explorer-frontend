
export function filterMoviesByName (movies, name) {
  return movies.filter((item) => {
    return item.nameRU.toLowerCase().includes(name.toLowerCase()) || item.nameEN.toLowerCase().includes(name.toLowerCase())
  })
}

export function filterMoviesByDuration (movies) {
  return movies.filter((item) => {
    return item.duration <= 40
  })
}
