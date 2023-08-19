import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {Navigation} from "../Navigation/Navigation";
import {MenuButton} from "../MenuButton/MenuButton";
import {Menu} from "../Menu/Menu";
import {NavAuth} from "../NavAuth/NavAuth";

export function Header({loggedIn}) {

    const [isOpened, setIsOpened] = React.useState(false);

    function open() {
        setIsOpened(true);
    }

    function close() {
        setIsOpened(false);
    }

    return (
        <>
            <header className={`header ${loggedIn ? 'header_color_white' : 'header_color_blue'}`}>
                <div className="header__content">
                    <Link to="/" className="header__link">
                        <img className="header__logo" src={logo} alt="Логотип"/>
                    </Link>
                    {loggedIn
                        ? <>
                            <div className="header__navigation">
                                <Navigation onClose={close}/>
                            </div>
                            <MenuButton onOpen={open}/>
                        </>
                        : <NavAuth/>}
                </div>
            </header>
            {loggedIn && <Menu open={isOpened} onClose={close}/>}
        </>
    )
}