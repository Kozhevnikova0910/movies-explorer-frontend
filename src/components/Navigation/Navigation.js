import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export function Navigation({onClose}) {

    return(
        <nav className="navigation">
            <ul className="navigation__items">
                <li className="navigation__item">
                    <NavLink className="navigation__item-link navigation__item-link_hidden" to="/" onClick={onClose}>Главная</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className={({isActive}) => `navigation__item-link${isActive ? " navigation__item-link_active" : ""}`} to="/movies" onClick={onClose}>Фильмы</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className={({isActive}) => `navigation__item-link${isActive ? " navigation__item-link_active" : ""}`} to="/saved-movies" onClick={onClose}>Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <Link to="/profile" className="navigation__account" onClick={onClose}>Аккаунт
            </Link>
        </nav>
    )
}