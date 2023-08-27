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
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [search, setSearch] = React.useState('');
    const [isShorts, setIsShorts] = React.useState(false);

    const [error, setError] = React.useState('')

    React.useEffect(() => {
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
    }, [filteredMovies])

    function searchMovies() {
        getMovies()
            .then((res) => {
                setMovies(res)
            })
            .catch(() => {
                setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
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

    React.useEffect(() => {
        setStoredValues()
    }, []);

    function setStoredValues() {
        const storedSearch = JSON.parse(localStorage.getItem('lastSearch'))
        if (storedSearch) {
            setSearch(storedSearch.search)
            setMovies(storedSearch.movies || [])
            setIsShorts(storedSearch.isShorts)
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm movies={filteredMovies} isShorts={isShorts} setIsShorts={setIsShortsState}
                            isInSavedMovies={false} filterMovies={filterMovies} search={search}
                            setSearch={setSearchState} searchMovies={searchMovies} error={error}/>
                {
                    !movies.length
                        ? <Preloader/>
                        :
                        <MoviesCardList movies={filteredMovies} favoriteMovies={favoriteMovies} isInSavedMovies={false}
                                        getFavoriteMovies={getFavoriteMovies} addFavoriteMovie={addFavoriteMovie}
                                        deleteFavoriteMovie={deleteFavoriteMovie}/>
                }
            </main>
            <Footer/>
        </>
    )
}