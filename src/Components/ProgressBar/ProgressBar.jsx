import style from "./ProgressBar.module.css"

export default function ProgressBarr (){
    return <div className={style.progressBar_container}>
        <div className={`${style.itemContainer} ${style.item1}`}> <div className={style.itemIcon}>1</div> Билеты</div>
        <div className={`${style.itemContainer} ${style.item2}`}> <div className={style.itemIcon}>2</div> Пассажиры</div>
        <div className={`${style.itemContainer} ${style.item3}`}> <div className={style.itemIcon}>3</div> Оплата </div>
        <div className={`${style.itemContainer} ${style.item4} `}> <div className={style.itemIcon}>4</div> Проверка</div>
    </div>
}