import './MoviesCardList.css';
import React from 'react'
import {MoviesCard} from "../MoviesCard/MoviesCard";

export function MoviesCardList({
                                   movies,
                                   favoriteMovies,
                                   getFavoriteMovies,
                                   addFavoriteMovie,
                                   deleteFavoriteMovie,
                                   isInSavedMovies,
                                   showNotFound,
                               }) {

    const [displayedMovies, setDisplayedMovies] = React.useState([])
    const [countMovies, setCountMovies] = React.useState(16);
    const [extraMovies, setExtraMovies] = React.useState(0);

    React.useEffect(() => {
        if (!isInSavedMovies) {
            onResize()
            window.addEventListener("resize", onResize)
        }

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    React.useEffect(() => {
        setDisplayedMovies(movies)
    }, [movies, favoriteMovies, showNotFound]);

    function onResize() {
        const width = window.innerWidth;
        if (width > 1000) {
            setCountMovies(16)
            setExtraMovies(4)
        } else if (width > 580) {
            setCountMovies(8)
            setExtraMovies(2)
        } else {
            setCountMovies(5)
            setExtraMovies(2)
        }
    }

    function moreMovies() {
        setCountMovies(countMovies + extraMovies)
    }


    return (
        <section className="movies">
            {displayedMovies.length > 0 &&
                (<ul className="movies__items">
                    {!isInSavedMovies ?
                        displayedMovies.slice(0, countMovies).map((movie) => (
                            <li className="movies__item" key={movie.id || movie.movieId}>
                                <MoviesCard
                                    movie={movie}
                                    favoriteMovies={favoriteMovies}
                                    getFavoriteMovies={getFavoriteMovies}
                                    addFavoriteMovie={addFavoriteMovie}
                                    deleteFavoriteMovie={deleteFavoriteMovie}
                                    isInSavedMovies={isInSavedMovies}
                                />
                            </li>
                        ))
                        :
                        displayedMovies.map((movie) => (
                            <li className="movies__item" key={movie.id || movie.movieId}>
                                <MoviesCard
                                    movie={movie}
                                    favoriteMovies={favoriteMovies}
                                    getFavoriteMovies={getFavoriteMovies}
                                    addFavoriteMovie={addFavoriteMovie}
                                    deleteFavoriteMovie={deleteFavoriteMovie}
                                    isInSavedMovies={isInSavedMovies}
                                />
                            </li>
                        ))
                    }
                </ul>)}
            {(showNotFound && !displayedMovies.length) &&
                (<div className="movies__text">Ничего не найдено</div>)}
            {countMovies <= displayedMovies.length && (
                !isInSavedMovies && <button className="movies__button" type="button" onClick={moreMovies}>Ещё</button>)}
        </section>
    )
}