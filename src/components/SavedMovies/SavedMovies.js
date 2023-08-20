import {SearchForm} from "../SearchForm/SearchForm";
import {Header} from "../Header/Header";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "../Preloader/Preloader";
import React from "react";
import {Footer} from "../Footer/Footer";

export function SavedMovies() {

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
                        : <MoviesCardList isInSavedMovies={true}/>
                }
            </main>
            <Footer/>
        </>
    )
}