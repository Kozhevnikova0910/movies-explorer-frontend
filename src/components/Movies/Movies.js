import {SearchForm} from "../SearchForm/SearchForm";
import {Header} from "../Header/Header";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from 'react'
import {Preloader} from "../Preloader/Preloader";
import {Footer} from "../Footer/Footer";

export function Movies() {

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <Header loggedIn={true}/>
            <main>
                <SearchForm/>
                {
                    isLoading
                        ? <Preloader/>
                        : <MoviesCardList isInSavedMovies={false}/>
                }
            </main>
            <Footer/>
        </>
    )
}