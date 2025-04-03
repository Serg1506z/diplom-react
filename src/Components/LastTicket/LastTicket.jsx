import style from "./LastTicket.module.css"


export default function LastTicket() {
    return <section className={style.tickets}>
       
        <div className={style.ticket}>
            <div className={style.cities}>
                <div className={style.city}>Санкт-Петербург</div>
                <div className={style.city}>Самара</div>
            </div>
            <div className={style.trainStations}>
                <div className={style.trainStation_left}>Курский вокзал</div>
                <div className={style.trainStation_right}>Московский
                    вокзал</div>
            </div>
            <div className={style.ticketFooter}>
                <div className={style.ticketIcons}></div>
                <div className={style.ticketPraice}>
                    <span className={style.praiceText}>от</span>2 500</div>
            </div>
        </div>
    </section>
}

