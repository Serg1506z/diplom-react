import style from "./CarLayoutLuxury.module.css"


export default function carLayoutLuxury (){
    return <div className={style.carlayout}>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>1</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>2</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>3</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>4</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>5</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>6</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>7</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>5</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>9</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>10</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>11</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>12</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>13</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>14</div>
        </div>
    </div>
    <div className={`${style.room} ${style.last}`}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>15</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>16</div>
        </div>
    </div>
</div>
}