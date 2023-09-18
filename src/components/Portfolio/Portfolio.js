import './Portfolio.css';

export function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="https://kozhevnikova0910.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="https://kozhevnikova0910.github.io/russian-travel/" rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="https://kozhevnikova.students.nomoredomains.xyz/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}