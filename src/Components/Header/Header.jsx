import style from "./Header.module.css"

export default function Header() {
    return <div className={style.headerContainer}>
        <a className={style.logo} href="#">Лого</a>
        <nav className={style.headerNav}>
            <a className={style.link} href="#">О нас</a>
            <a className={style.link} href="#">Как это работает</a>
            <a className={style.link} href="#">Отзывы</a>
            <a className={style.link} href="#">Контакты</a>
        </nav>
    </div>
}