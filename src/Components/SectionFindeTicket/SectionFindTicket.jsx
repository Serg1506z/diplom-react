import style from "./SectionFindTicket.module.css"

export default function SectionFindTicket() {
    return <section className={style.sectionContainer}>
        <div className={style.sectionSelect}>
            <div className={style.sectionTitle}>
                <div className={style.sectionTitle}>Направление</div>
                <div className={style.sectionTitle}>Дата</div>
            </div>
            <form className={style.sectionInput}>
                <input type="text" className={`${style.selectDate} ${style.dateIn}`} />
                <input type="text" className={`${style.selectDate} ${style.dateOut}`} />
                <input type="date" className={style.selectDate} />
                <input type="date" className={style.selectDate} />
                <button className={`${style.selectDate} ${style.dateBtn}`}>Найти билеты</button>
            </form>
        </div>
       
    </section >
}         