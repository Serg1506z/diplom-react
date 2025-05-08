import style from "./ProgressBar.module.css"

const arr = [
    {number : 1, name : 'Билеты'},
    {number : 2, name : 'Пассажиры'},
    {number : 3, name : 'Оплата'},
    {number : 4, name : 'Проверка'},
]

export default function ProgressBarr ({num}){
    return <div className={style.progressBar_container}>
        {arr.map((item, index) => {
            return <div key={index} className={`${style.itemContainer} ${style[`item${item.number}`]} ${num >= item.number ? style.active : ''}`}> 
                <div className={style.itemIcon}>{item.number}</div>{item.name}
            </div>
        })}
    </div>
}