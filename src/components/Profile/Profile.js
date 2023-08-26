import React from 'react';
import {Header} from "../Header/Header";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

export function Profile({values, onValues, errors, errorMessage, onErrorChange, successMessage, onSuccessChange, isValid, onSubmit, onSignOut, isVisible, onVisibleChange, onInputChange, loggedIn}) {

    const currentUser = React.useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(e)
    }

    function handleInputChange(e) {
        onInputChange(e)
    }

    function changeButton() {
        onErrorChange('')
        onSuccessChange('')
        onVisibleChange(true)
    }

    React.useEffect(() => {
        onValues(currentUser)
    }, [currentUser])

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main className="profile">
                <div className="profile__content">
                    <form className="profile__form" name="form-profile" onSubmit={handleSubmit}>
                        <h3 className="profile__title">Привет, {currentUser.name || ''}!</h3>
                        <div className="profile__block">
                            <label className="profile__label">Имя</label>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                minLength="2"
                                maxLength="40"
                                placeholder="Имя"
                                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                                required
                                disabled={!isVisible}
                                value={values.name || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <span className={errors.name ? 'form__error' : 'form__error'}>
                            {errors.name || ''}
                        </span>
                        <div className="profile__line"/>
                        <div className="profile__block">
                            <label className="profile__label">E-mail</label>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                minLength="4"
                                maxLength="40"
                                placeholder="E-mail"
                                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                                required
                                disabled={!isVisible}
                                value={values.email || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <span className={errors.email ? 'form__error' : 'form__error'}>
                            {errors.email || ''}
                        </span>
                        <div className="profile__buttons">
                            {isVisible ?
                                (<>
                                <span className={`form__error profile__error_server ${!errorMessage ? 'profile__error_hidden' : ''}`}>
                                  {errorMessage || ''}
                                </span>
                                    <button
                                        key="save"
                                        className={!isValid ? 'profile__button profile__button_type_save profile__button_disabled' : 'profile__button profile__button_type_save'}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Сохранить
                                    </button>
                                </>)
                                :
                                (<>
                                    <span className={`profile__success ${!successMessage ? 'profile__success_hidden' : ''}`}>
                                     {successMessage || ''}
                                    </span>
                                    <button key="edit" className='profile__button profile__button_type_edit' type="button" onClick={changeButton}>
                                        Редактировать
                                    </button>
                                    <button key="exit" className='profile__button profile__button_type_exit' type="button" onClick={onSignOut}>
                                        Выйти из аккаунта
                                    </button>
                                </>)
                            }
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}