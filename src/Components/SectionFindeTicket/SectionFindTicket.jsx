import style from "./SectionFindTicket.module.css"

export default function SectionFindTicket() {
    return <section className={style.sectionContainer}>
        <div className={style.sectionSelect}>
            <div className={style.sectionTitle}>
            </div>
            <form className={style.sectionInput}>
                <div className={style.inputs}>
                    <div className={style.input__container}>
                        <div className={style.sectionTitle}>Дата</div>
                        <input type="text" className={`${style.selectDate} ${style.dateIn}`} />
                    </div>
                    <div className={style.input__container}>
                        <input type="text" className={`${style.selectDate} ${style.dateOut}`} />
                    </div>
                    <div className={style.input__container}>
                        <div className={style.sectionTitle}>Направление</div>
                        <input type="date" className={style.selectDate} />
                    </div>
                    <div className={style.input__container}>
                        <input type="date" className={style.selectDate} />
                    </div>
                </div>
                <div className={style.btn__container}>
                    <button className={`${style.dateBtn}`}>Найти билеты</button>
                </div>
            </form>
        </div>
       
    </section >
}         