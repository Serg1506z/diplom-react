import style from './QuantityTickets.module.css'

export default function QuantityTickets() {
    return <div className={style.quantityTickets}>
        <h2 className={style.quantityTicketsTitle}>Количество билетов</h2>
        <div className={style.quantityTicketsContainer}>
            <div className={style.quantityTicketsItem}>
                <input type="text" value={'Взрослых - 2'}/>
                <p>Можно добавить еще 3 пассажиров</p>
            </div>
            <div className={style.quantityTicketsItem}>
                <input type="text" value={'Детских — 1'}/>
                <p>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
            </div>
            <div className={style.quantityTicketsItem}>
                <input type="text" value={'Детских «без места» — 0'}/>
            </div>
        </div>
    </div>
}