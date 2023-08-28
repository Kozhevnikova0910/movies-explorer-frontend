import React from 'react';
import api from '../../utils/MainApi.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute';
import {AuthorizedRoute} from '../AuthorizedRoute/AuthorizedRoute';
import {Main} from '../Main/Main';
import {Movies} from '../Movies/Movies';
import {SavedMovies} from "../SavedMovies/SavedMovies";
import {Profile} from "../Profile/Profile";
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {PageNotFound} from "../PageNotFound/PageNotFound";
import './App.css';

function App() {

    // Переменные пользователя, авторизации
    const [loggedIn, setLoggedIn] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        email: '',
        _id: null,
    })
    const [favoriteMovies, setFavoriteMovies] = React.useState([])
    // Переменные форм
    const [values, setValues] = React.useState({})
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);

    const navigate = useNavigate()

    React.useEffect(() => {
        getCurrentUser()
        if (loggedIn) getFavoriteMovies()
    }, [loggedIn])

    function registration() {
        api.registration(values)
            .then(() => {
                resetForm()
                authorization()
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    function authorization() {
        api.authorization({email: values.email, password: values.password})
            .then((res) => {
                if (res.token) {
                    setLoggedIn(true);
                    localStorage.setItem('token', res.token);
                    getCurrentUser();
                    navigate('/movies', {replace: true});
                }
            })
            .catch((err) => {

                setErrorMessage(err)
            })
    }

    function updateUserInfo() {
        api.updateMe({email: values.email, name: values.name})
            .then((res) => {
                setSuccessMessage('Данные успешно обновлены')
                setErrorMessage('')
                setIsVisible(false)
                setCurrentUser(values)
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    function getCurrentUser() {
        if (localStorage.getItem('token')) {
            api.getMe()
                .then(res => {
                    if (res) {
                        setLoggedIn(true);
                        setCurrentUser({
                            _id: res._id,
                            name: res.name,
                            email: res.email,
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                    signOut()
                })
        } else {
            setLoggedIn(false);
        }
    }

    function getFavoriteMovies() {
        api.getFavoriteMovies()
            .then((res) => {
                setFavoriteMovies(res)
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    function addFavoriteMovie(movie) {
        api.addFavoriteMovie({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/beatfilm-movies/${movie.image.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        })
            .then((res) => {
                setFavoriteMovies([res, ...favoriteMovies])
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    function deleteFavoriteMovie(id) {
        api.deleteFavoriteMovie(id)
            .then(() => {
                setFavoriteMovies((saveMovies) => {
                    return saveMovies.filter((item) => {
                        return item._id !== id;
                    });
                });
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value})
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest("form").checkValidity())
    }

    function resetForm() {
        setValues({});
        setErrors({});
        setIsValid(false);
    }

    function handleValues(values) {
        setValues(values)
    }

    function handleErrorState(value) {
        setErrorMessage(value)
    }

    function handleSuccessState(value) {
        setSuccessMessage(value)
    }

    function handleVisibleState(value) {
        setIsVisible(value)
    }

    function signOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('lastSearch');
        localStorage.removeItem('movies');
        setCurrentUser({});
        setLoggedIn(false);
        navigate('/', {replace: true});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main loggedIn={loggedIn}/>}/>

                    <Route path="/movies" element={
                        <ProtectedRoute element={Movies} loggedIn={loggedIn} favoriteMovies={favoriteMovies}
                                        getFavoriteMovies={getFavoriteMovies} addFavoriteMovie={addFavoriteMovie}
                                        deleteFavoriteMovie={deleteFavoriteMovie}/>
                    }/>

                    <Route path="/saved-movies" element={
                        <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} favoriteMovies={favoriteMovies}
                                        getFavoriteMovies={getFavoriteMovies}
                                        deleteFavoriteMovie={deleteFavoriteMovie}/>
                    }/>

                    <Route path="/profile" element={
                        <ProtectedRoute element={Profile}
                                        loggedIn={loggedIn}
                                        values={values}
                                        onValues={handleValues}
                                        errors={errors}
                                        errorMessage={errorMessage}
                                        onErrorChange={handleErrorState}
                                        successMessage={successMessage}
                                        onSuccessChange={handleSuccessState}
                                        isVisible={isVisible}
                                        onVisibleChange={handleVisibleState}
                                        isValid={isValid}
                                        onSubmit={updateUserInfo}
                                        onSignOut={signOut}
                                        onInputChange={handleInputChange}/>
                    }/>

                    <Route path="/sign-in" element={
                        <AuthorizedRoute element={Login}
                                         loggedIn={loggedIn}
                                         values={values}
                                         errors={errors}
                                         errorMessage={errorMessage}
                                         isValid={isValid}
                                         onSubmit={authorization}
                                         onInputChange={handleInputChange}/>
                    }/>

                    <Route path="/sign-up" element={
                        <AuthorizedRoute element={Register}
                                         loggedIn={loggedIn}
                                         values={values}
                                         errors={errors}
                                         errorMessage={errorMessage}
                                         isValid={isValid}
                                         onSubmit={registration}
                                         onInputChange={handleInputChange}/>
                    }/>

                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
