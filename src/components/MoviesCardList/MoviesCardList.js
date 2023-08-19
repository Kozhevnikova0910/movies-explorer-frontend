import './MoviesCardList.css';
import React from 'react'
import {MoviesCard} from "../MoviesCard/MoviesCard";
import movie_test from "../../images/movie_test.jpg"

export function MoviesCardList({isInSavedMovies}) {

    const [displayedMovies, setDisplayedMovies] = React.useState([
        {
            id: 0,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: true,
        },
        {
            id: 1,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: false,
        },
        {
            id: 2,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: false,
        },
        {
            id: 3,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: false,
        },
        {
            id: 4,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: true,
        },
        {
            id: 5,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: false,
        },
        {
            id: 6,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: true,
        },
        {
            id: 7,
            nameRU: '33 слова о дизайне',
            duration: '1ч42м',
            trailerLink: '#',
            image: movie_test,
            isSaved: true,
        },
    ]);

    return (
        <section className="movies">
                {displayedMovies.length > 0 ?
                    (<ul className="movies__items">
                        {displayedMovies.map((movie) => (
                            <li className="movies__item" key={movie.id}>
                                <MoviesCard
                                    movie={movie}
                                    isInSavedMovies={isInSavedMovies}
                                />
                            </li>
                        ))}
                    </ul>)
                    :
                    (<div className="movies__text">Ничего не найдено</div>)}
                {displayedMovies.length > 0 && (
                    <button className="movies__button" type="button">Ещё</button>)}
        </section>
    )
}