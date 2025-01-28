import style from "./Form.module.css"

export default function FormFindTicket() {
    return <form className={style.headerSection_input}>
            <div className={style.headerSection_title}>Направление</div>
            <div className={style.inputWay}>
                <input type="text" className={style.selectDate} placeholder="Откуда" />
                <button className={style.changeInput}></button>
                <input type="text" className={style.selectDate } placeholder="Куда" />
            </div>
            <div className={style.headerSection_title}>Дата</div>
            <div className={style.inputDate}>
                <input type="date" className={style.selectDate} />
                <input type="date" className={style.selectDate} />
            </div>
            <button className={style.selectDate_dateBtn}>Найти билеты</button>
     </form>
}