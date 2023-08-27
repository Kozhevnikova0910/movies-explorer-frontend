import React from 'react'
import findButton from '../../images/find.svg'
import './SearchForm.css';

export function SearchForm({ isShorts, movies, setIsShorts, search, setSearch, filterMovies, isInSavedMovies }) {

    const [error, setError] = React.useState('')

    function handleSubmit (e) {
        e.preventDefault()
        if (!search) {
            setError('Нужно ввести ключевое слово')
        } else {
            filterMovies()
        }
        if (!isInSavedMovies) {
            localStorage.setItem('lastSearch', JSON.stringify({search: search, movies: movies, isShorts: isShorts}));
        }
    }

    function handleInputChange (e) {
        setSearch(e.target.value)
    }

    function handleShortsChange () {
        setIsShorts(!isShorts)
    }

    return (
        <section className="search">
            <form className="search__form" name="name" onSubmit={handleSubmit}>
                <div className="search__row">
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        type="text"
                        name="search"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <button className="search__button" type="submit">
                        <img className="search__button-image" src={findButton} alt="кнопка поиска"/>
                    </button>
                </div>
                <span className={error ? "search__error" : "search__error_hidden"}>{error}</span>
                <div className="search__checkbox">
                    <p className="search__checkbox-text">Короткометражки</p>
                    <label className="search__checkbox-switch">
                        <input
                            className="search__checkbox-input"
                            type="checkbox"
                            name="shorts"
                            checked={isShorts}
                            onChange={handleShortsChange}
                        />
                        <span className="search__checkbox-slider"></span>
                    </label>
                </div>
            </form>
        </section>
    )
}