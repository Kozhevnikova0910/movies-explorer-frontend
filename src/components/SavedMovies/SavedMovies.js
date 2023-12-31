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
    const [showNotFound, setShowNotFound] = React.useState(false)

    React.useEffect(() => {
        setMovies(favoriteMovies)
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
    }

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm isShorts={isShorts} setIsShorts={setIsShortsState} isInSavedMovies={true} filterMovies={filterMovies} search={search}
                            setSearch={setSearchState} setShowNotFound={setShowNotFound}/>
                {
                    isLoading
                        ? <Preloader/>
                        : <MoviesCardList movies={filteredMovies} favoriteMovies={favoriteMovies} isInSavedMovies={true} getFavoriteMovies={getFavoriteMovies} deleteFavoriteMovie={deleteFavoriteMovie} showNotFound={showNotFound}/>
                }
            </main>
            <Footer/>
        </>
    )
}