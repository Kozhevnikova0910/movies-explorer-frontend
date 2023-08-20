import '../AuthForm/AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export function Login() {

    function handleSubmit () {

    }

    function handleInputChange () {

    }

    return (
        <main className="form">
            <div className="form__content">
                <Link to="/" className="form__link-header">
                    <img className="form__logo" src={logo} alt="Логотип"/>
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__auth form__auth_register" name="form-registration" action="src/components/Login/Login#"
                      onSubmit={handleSubmit} noValidate>
                    <div className="form__block">
                        <label>
                            <p className="form__label">E-mail</p>
                            <input
                                className='form__input'
                                name="email"
                                type="email"
                                placeholder="Email"
                                minLength="4"
                                maxLength="40"
                                required
                                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                                value="pochta@yandex.ru|"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form__block">
                        <label>
                            <p className="form__label">Пароль</p>
                            <input
                                className='form__input form__input_type_color'
                                name="password"
                                type="password"
                                minLength="8"
                                maxLength="40"
                                placeholder="Пароль"
                                required
                                value=""
                                onChange={handleInputChange}
                            />
                            <span className='form__error'></span>
                        </label>
                    </div>
                    <button
                        className='form__button'
                        type="submit">
                        Войти
                    </button>
                </form>
                <p className="form__text">
                    Еще не зарегистрированы?
                    <Link to="/signup" className="form__link-footer">
                        Регистрация
                    </Link>
                </p>
            </div>
        </main>
    )
}