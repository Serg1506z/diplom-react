import style from './Preloader.module.css'
import gif from '../../Assets/gif/анимация-загрузки.gif'

export default function Preloader() {
    return (
        <div className={style.preloader}>
            <h1>ИДЕТ ПОИСК</h1>
            <img className={style.gif} src={gif} alt="" />
        </div>
    )
}
