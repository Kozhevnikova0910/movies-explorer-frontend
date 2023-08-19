import './AboutMe.css';
import photo_me from '../../images/photo_me.png'

export function AboutMe() {
    return (
        <section className="about">
            <h2 className="about__title">Студент</h2>
            <div className="about__content">
                <div className="about__life">
                    <h2 className="about__life-name">Екатерина</h2>
                    <p className="about__life-me">Фронтенд-разработчик</p>
                    <p className="about__life-description">Я родилась и живу в Москве. Занимаюсь преподаванием. В прошлом году начала увлекаться программированием и сайтами. Также я люблю путешествовать и заниматься йогой. Решила изменить свою жизнь и, наконец, пошла на курсы Веб-разработчика.</p>
                    <a className="about__life-github" href="src/components/AboutMe/AboutMe" target="_blank"
                       rel="noreferrer">Github</a>
                </div>
                <img className="about__photo" src={photo_me} alt="мое фото"/>
            </div>
        </section>
    )
}