import style from "./Header.module.css"
import { Link } from "react-router-dom"

export default function Header() {
    return <div className={style.headerContainer}>
        <div className={style.logo}>
            <Link href="#">Лого</Link>
        </div>
        <div className={style.nav__container}>
            <nav className={style.headerNav}>
                <Link className={style.link} href="#">О нас</Link>
                <Link className={style.link} href="#">Как это работает</Link>
                <Link className={style.link} href="#">Отзывы</Link>
                <Link className={style.link} href="#">Контакты</Link>
            </nav>
        </div>
    </div>
}