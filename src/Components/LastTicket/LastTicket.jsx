import style from "./LastTicket.module.css"

export default function LastTicket() {
    return <section class={style.tickets}>
       
        <div class={style.ticket}>
            <div class={style.cities}>
                <div class={style.city}>Санкт-Петербург</div>
                <div class={style.city}>Самара</div>
            </div>
            <div class={style.trainStations}>
                <div class={style.trainStation_left}>Курский вокзал</div>
                <div class={style.trainStation_right}>Московский
                    вокзал</div>
            </div>
            <div class={style.ticketFooter}>
                <div class={style.ticketIcons}></div>
                <div class={style.ticketPraice}><span class={style.praiceText}>от</span>2 500</div>
            </div>
        </div>
    </section>
}

