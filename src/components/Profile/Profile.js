import './Profile.css';
import {Header} from "../Header/Header";

export function Profile() {


    function handleInputChange() {

    }

    function handleSubmit() {

    }


    return (
        <>
            <Header loggedIn={true}/>
            <section className="profile">
                <div className="profile__content">
                    <form className="profile__form" name="form-profile" onSubmit={handleSubmit}>
                        <h3 className="profile__title">Привет, Виталий!</h3>
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
                                value="Виталий"
                                onChange={handleInputChange}
                            />
                        </div>
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
                                value="pochta@yandex.ru"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile__buttons">
                            {/*<button*/}
                            {/*    key="save"*/}
                            {/*    className="profile__button profile__button_type_save"*/}
                            {/*    type="submit">*/}
                            {/*    Сохранить*/}
                            {/*</button>*/}
                            <button key="edit" className='profile__button profile__button_type_edit' type="button">
                                Редактировать
                            </button>
                            <button key="exit" className='profile__button profile__button_type_exit' type="button">
                                Выйти из аккаунта
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}