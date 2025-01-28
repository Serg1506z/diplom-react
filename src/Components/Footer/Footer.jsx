import style from "./Footer.module.css"

export default function Footer() {
    return <div className={style.footer}>
        <div className={style.footerLine}></div>
        <div className={style.leftColumn}>
            <h3 className={style.contact}>Свяжитесь с нами</h3>
            <div className={style.contactItems}>
                <a className={style.contactItem} href="#"><div className={style.contactIcon_phone}></div>8 (800) 000 00 00</a>
                <a className={style.contactItem} href="#"><div className={style.contactIcon_mail}></div>inbox@mail.ru</a>
                <a className={style.contactItem} href="#"><div className={style.contactIcon_skype}></div>tu.train.tickets</a>
                <a className={style.contactItem} href="#"><div className={style.contactIcon_coordinates}></div>г. Москва
                    ул. Московская 27-35
                    555 555</a>
            </div>
        </div>
        <div className={style.rightColumn}>
            <h3 className={style.subscription}>Подписка</h3>
            <form action="" className={style.formSubscription}>
                <h2 className={style.inputTitle} >Будьте в курсе событий</h2>
                <input type="mail" className={style.inputSub} placeholder="e-mail" />
                <button className={style.btnSub}>отправить</button>
            </form>
            <div className={style.subscriptionIcon}>
                <h3 className={style.iconTitle}>Подписывайтесь на нас</h3>
                <div className={style.icons}>
                    <a className={style.iconYoutube} href="#"></a>
                    <a className={style.iconIn} href="#"></a>
                    <a className={style.iconGoogle} href="#"></a>
                    <a className={style.iconFacebook} href="#"></a>
                    <a className={style.iconTwitter} href="#"></a>
                </div>
            </div>
        </div>
        <div className={style.sub}>
            <div className={style.logoSub}>Лого</div>
            <div className={style.iconSub}></div>
            <div className={style.dateSub}>2018 WEB</div> 
        </div>
    </div>
}