import style from "./Header.module.css"

export default function Header() {
    return <div className={style.headerContainer}>
        <div className={style.logo}>
            <a  href="#">Лого</a>
        </div>
        <div className={style.nav__container}>
            <nav className={style.headerNav}>
                <a className={style.link} href="#">О нас</a>
                <a className={style.link} href="#">Как это работает</a>
                <a className={style.link} href="#">Отзывы</a>
                <a className={style.link} href="#">Контакты</a>
            </nav>
        </div>
    </div>
}