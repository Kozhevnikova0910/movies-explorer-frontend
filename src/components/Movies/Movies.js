import {SearchForm} from "../SearchForm/SearchForm";
import {Header} from "../Header/Header";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from 'react'
import {Preloader} from "../Preloader/Preloader";

export function Movies() {

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <section>
            <Header loggedIn={true}/>
            <SearchForm/>
            {
                isLoading
                ? <Preloader/>
                : <MoviesCardList isInSavedMovies={false}/>
            }
        </section>
    )
}