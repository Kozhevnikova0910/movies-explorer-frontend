import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../AuthForm/AuthForm.css';

export function Login({ values, errors, errorMessage, isValid, onSubmit, onInputChange }) {

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(e)
    }

    function handleInputChange(e) {
        onInputChange(e)
    }

    return (
        <main className="form">
            <div className="form__content">
                <Link to="/" className="form__link-header">
                    <img className="form__logo" src={logo} alt="Логотип"/>
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__auth form__auth_login" name="form-login" action="#" onSubmit={handleSubmit}
                      noValidate>
                    <div className="form__block">
                        <label>
                            <p className="form__label">E-mail</p>
                            <input
                                className="form__input"
                                name="email"
                                type="email"
                                minLength="4"
                                maxLength="40"
                                placeholder="Email"
                                required
                                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                                value={values.email || ''}
                                onChange={handleInputChange}
                            />
                            <span className={errors.email ? 'form__error' : 'form__error'}>{errors.email}</span>
                        </label>
                    </div>
                    <div className="form__block">
                        <label>
                            <p className="form__label">Пароль</p>
                            <input
                                className="form__input form__input_color"
                                name="password"
                                type="password"
                                minLength="8"
                                maxLength="40"
                                placeholder="Пароль"
                                required
                                value={values.password || ''}
                                onChange={handleInputChange}
                            />
                            <span className={errors.password ? 'form__error' : 'form__error'}>{errors.password}</span>
                        </label>
                    </div>
                    <span
                        className={`form__error form__error_server form__error_margin_login ${
                            !errorMessage ? 'form__error_hidden' : ''
                        }`}
                    >
              {errorMessage}
            </span>
                    <button
                        className={isValid ? 'form__button' : 'form__button form__button_disabled'}
                        type="submit"
                        disabled={!isValid}
                    >
                        Войти
                    </button>
                </form>
                <p className="form__text">
                    Еще не зарегистрированы?
                    <Link to="/sign-up" className="form__link-footer">
                        Регистрация
                    </Link>
                </p>
            </div>
        </main>
    )
}