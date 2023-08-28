import React from 'react'
import {SearchForm} from "../SearchForm/SearchForm";
import {Header} from "../Header/Header";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "../Preloader/Preloader";
import {Footer} from "../Footer/Footer";
import {getMovies} from "../../utils/MoviesApi";
import {filterMoviesByName, filterMoviesByDuration} from "../../utils/filter";

export function Movies({loggedIn, favoriteMovies, getFavoriteMovies, addFavoriteMovie, deleteFavoriteMovie}) {

    const [movies, setMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [search, setSearch] = React.useState('');
    const [isShorts, setIsShorts] = React.useState(false);
    const [showNotFound, setShowNotFound] = React.useState(false)

    const [error, setError] = React.useState('')

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem('lastSearch'))) {
            searchOrSetMovies()
        }
        setStoredValues()
    }, [])

    React.useEffect(() => {
        filterMovies()
    }, [movies, isShorts])

    React.useEffect(() => {
        if (filteredMovies.length) {
            localStorage.setItem('lastSearch', JSON.stringify({
                search: search,
                movies: filteredMovies,
                isShorts: isShorts
            }));
        }
    }, [filteredMovies, isShorts])

    function searchMovies() {
        setIsLoading(true)
        getMovies()
            .then((res) => {
                setMovies(res)
                localStorage.setItem('movies', JSON.stringify(res));
            })
            .catch(() => {
                setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function filterMovies() {
        let filteredMovies = []
        if (isShorts) {
            filteredMovies = filterMoviesByDuration(movies).slice(0)
        } else {
            filteredMovies = movies.slice(0)
        }
        filteredMovies = filterMoviesByName(filteredMovies, search)
        setFilteredMovies(filteredMovies)
    }

    function setSearchState(value) {
        setSearch(value)
    }

    function setIsShortsState(value) {
        setIsShorts(value)
    }

    function setStoredValues() {
        const storedSearch = JSON.parse(localStorage.getItem('lastSearch'))
        if (storedSearch) {
            setSearch(storedSearch.search)
            setFilteredMovies(storedSearch.movies)
            setIsShorts(storedSearch.isShorts)
        }
    }

    function searchOrSetMovies () {
        if (JSON.parse(localStorage.getItem('movies'))) {
            setMovies(JSON.parse(localStorage.getItem('movies')))
        } else {
            searchMovies()
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm movies={filteredMovies} isShorts={isShorts} setIsShorts={setIsShortsState}
                            isInSavedMovies={false} filterMovies={filterMovies} search={search}
                            setSearch={setSearchState} searchMovies={searchMovies} error={error} searchOrSetMovies={searchOrSetMovies}  setShowNotFound={setShowNotFound}/>
                {
                    isLoading
                        ? <Preloader/>
                        :
                        <MoviesCardList movies={filteredMovies} favoriteMovies={favoriteMovies} isInSavedMovies={false}
                                        getFavoriteMovies={getFavoriteMovies} addFavoriteMovie={addFavoriteMovie}
                                        deleteFavoriteMovie={deleteFavoriteMovie} showNotFound={showNotFound}/>
                }
            </main>
            <Footer/>
        </>
    )
}