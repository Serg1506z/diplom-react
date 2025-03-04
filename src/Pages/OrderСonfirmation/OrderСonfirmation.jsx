import style from "./OrderConfirmation.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import TripDetails from "../../Components/TripDetails/TripDetails"


export default function OrderConfirmation() {
    return <div className={style.orderConfirmation}>
        <Header />
        <main className={style.mainContainer}>
            <SectionFindTicket />
            <ProgressBar />
            <section className={style.midlleSection}>
                <div className={style.leftColumn}>
                    <TripDetails />
                </div>
                <div className={style.rightColumn}>
                    <div className={style.passangers}>
                        <div className={style.passangersTitle}>Пассажиры</div>
                        <div className={style.passangersContent}>
                            <div className={style.leftPassangerContentColumn}>
                                <div className={style.passangerItem}>
                                    <div className={style.passangerItemIcon}>
                                        <div className={style.passangerIcon}></div>
                                        <div className={style.passangerIconSub}>Взрослый</div>
                                    </div>
                                    <div className={style.passangerItemDesc}>
                                        <div className={style.passangerInitial}>Мартынюк Ирина Эдуардовна</div>
                                        <div className={style.passangerGender}>Пол женский</div>
                                        <div className={style.passangerDate}>Дата рождения 17.02.1985</div>
                                        <div className={style.passangerDocument}>Паспорт РФ 4204 380694</div>
                                    </div>
                                </div>
                                <div className={`${style.passangerItem} ${style.miidlePassangerItem}`}>
                                    <div className={style.passangerItemIcon}>
                                        <div className={style.passangerIcon}></div>
                                        <div className={style.passangerIconSub}>Детский</div>
                                    </div>
                                    <div className={style.passangerItemDesc}>
                                        <div className={style.passangerInitial}>Мартынюк Кирилл Сергеевич</div>
                                        <div className={style.passangerGender}>Пол мужской</div>
                                        <div className={style.passangerDate}>Дата рождения 25.01.2006</div>
                                        <div className={style.passangerDocument}>Свидетельство о рождении VIII УН 256319</div>
                                    </div>
                                </div>
                                <div className={style.passangerItem}>
                                    <div className={style.passangerItemIcon}>
                                        <div className={style.passangerIcon}></div>
                                        <div className={style.passangerIconSub}>Взрослый</div>
                                    </div>
                                    <div className={style.passangerItemDesc}>
                                        <div className={style.passangerInitial}>Мартынюк Сергей Петрович</div>
                                        <div className={style.passangerGender}>Пол мужской</div>
                                        <div className={style.passangerDate}>Дата рождения 19.06.1982</div>
                                        <div className={style.passangerDocument}>Паспорт РФ 4204 380694</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.rightPaseangerContentColumn}>
                                <div className={style.total}>
                                    <div className={style.totalText}>Всего</div>
                                    <div className={style.totalSum}>
                                        <div className={style.totalSumNum}>7 760</div>
                                        <div className={style.totalSumIcon}></div>
                                    </div>
                                </div>
                                <button className={style.rightPaseangerContentColumnbtn}>Изменить</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.paymentMethod}>
                        <div className={style.paymentMethodTitle}><span className={style.paymentMethodTitleText}>Способ оплаты</span></div>
                        <div className={style.paymentMethodFooter}>
                            <div className={style.paymentMethodFooterText}>Наличными</div>
                            <button className={style.paymentMethodFooterBtn}>Изменить</button>
                        </div>
                    </div>
                    <button className={style.rightColumnBtn}>подтвердить</button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
}