import './SearchForm.css';
import findButton from '../../images/find.svg'

export function SearchForm() {
    return (
        <section className="search">
            <form className="search__form" name="name">
                <div className="search__row">
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        type="text"
                        name="search"
                        required
                    />
                    <button className="search__button" type="submit">
                        <img className="search__button-image" src={findButton} alt="кнопка поиска"/>
                    </button>
                </div>
                <div className="search__checkbox">
                    <p className="search__checkbox-text">Короткометражки</p>
                    <label className="search__checkbox-switch">
                        <input
                            className="search__checkbox-input"
                            type="checkbox"
                            name="shorts"
                        />
                        <span className="search__checkbox-slider"></span>
                    </label>
                </div>
            </form>
        </section>
    )
}