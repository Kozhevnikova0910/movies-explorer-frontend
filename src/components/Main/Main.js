import {Promo} from '../Promo/Promo.js';
import {NavTab} from "../NavTab/NavTab";
import React from "react";
import {AboutProject} from "../AboutProject/AboutProject";
import {Techs} from "../Techs/Techs";
import {AboutMe} from "../AboutMe/AboutMe";
import {Portfolio} from "../Portfolio/Portfolio";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export function Main() {

    return (
        <>
            <Header loggedIn={false}/>
            <main>
                <Promo/>
                <NavTab/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    )
}