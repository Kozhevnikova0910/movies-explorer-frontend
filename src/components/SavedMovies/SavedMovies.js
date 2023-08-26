import {SearchForm} from "../SearchForm/SearchForm";
import {Header} from "../Header/Header";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "../Preloader/Preloader";
import React from "react";
import {Footer} from "../Footer/Footer";
import {filterMoviesByDuration, filterMoviesByName} from "../../utils/filter";

export function SavedMovies({ loggedIn, favoriteMovies, getFavoriteMovies, deleteFavoriteMovie }) {

    const [movies, setMovies] = React.useState([])
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [search, setSearch] = React.useState('');
    const [isShorts, setIsShorts] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setMovies(favoriteMovies)
        setStoredValues()
    }, [favoriteMovies])

    React.useEffect(() => {
        filterMovies()
    }, [favoriteMovies, isShorts])

    function filterMovies() {
        let filteredMovies = []
        if (isShorts) {
            filteredMovies = filterMoviesByDuration(favoriteMovies)
        } else {
            filteredMovies = favoriteMovies
        }
        filteredMovies = filterMoviesByName(filteredMovies, search)
        setFilteredMovies(filteredMovies)
    }

    function setSearchState (value) {
        setSearch(value)
    }

    function setIsShortsState (value) {
        setIsShorts(value)
        filterMovies(favoriteMovies)
    }

    function setStoredValues() {
        const storedSearch = JSON.parse(localStorage.getItem('lastSearch'))
        if (storedSearch) {
            setSearch(storedSearch.search)
            setMovies(storedSearch.movies)
            setIsShorts(storedSearch.isShorts)
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm isShorts={isShorts} setIsShorts={setIsShortsState} filterMovies={filterMovies} search={search}
                            setSearch={setSearchState}/>
                {
                    isLoading
                        ? <Preloader/>
                        : <MoviesCardList movies={filteredMovies} favoriteMovies={favoriteMovies} isInSavedMovies={true} getFavoriteMovies={getFavoriteMovies} deleteFavoriteMovie={deleteFavoriteMovie}/>
                }
            </main>
            <Footer/>
        </>
    )
}