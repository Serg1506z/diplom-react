import style from "./Payment.module.css"
import Header from "../../Components/Header/Header"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import Footer from "../../Components/Footer/Footer"
import TripDetails from "../../Components/TripDetails/TripDetails"
import Initials from "../../Components/Initials/Initials"

export default function Payment() {
    return <div className={style.paymentContainer}>
        <Header />
        <section className={style.mainContainer}>
            <SectionFindTicket />
            <ProgressBar />
            <div className={style.middleSection}>
                <section className={style.leftSection}>
                    <TripDetails />
                </section>
                <section className={style.rightSection}>
                    <form className={style.personalData}>
                        <div className={style.personalDataTitle}><span className={style.titleText}>Персональные данные</span></div>
                        <Initials />
                        <div className={style.phone}>
                            <p className={style.phoneTitle}>Контактный телефон</p>
                            <input type="text" className={style.PhoneInput} placeholder="+7 ___ ___ __ __" />
                        </div>
                        <div className={style.eMail}>
                            <p className={style.phoneTitle}>E-mail</p>
                            <input type="email" className={style.PhoneInput} placeholder="inbox@gmail.ru" />
                        </div>
                        <div className={style.paymentType}>
                            <div className={style.titleText}>Способ оплаты</div>
                            <div className={style.paymentTypeCheckBox}>
                                <div className={style.checkBoxBlock}>
                                    <input type="radio" name="payment" className={style.checkBoxInput} />
                                    <span className={style.checkBoxText}>Онлайн</span>
                                </div>
                                <div className={style.paymentMethod}>
                                    <span className={style.paymentMethodText}>Банковской
                                        картой</span>
                                    <span className={style.paymentMethodText}>PayPal</span>
                                    <span className={style.paymentMethodText}>Visa QIWI Wallet</span>
                                </div>
                            </div>
                        </div>
                      <div className={style.cash}>
                      <div className={style.checkBoxBlock}>
                            <input type="radio" name="payment" className={style.checkBoxInput} />
                            <span className={style.checkBoxText}>Онлайн</span>
                        </div>
                      </div>
                    </form>
                    <button className={style.personalDataBtn}>КУПИТЬ БИЛЕТЫ</button>
                </section>
            </div>
        </section>
        <Footer />
    </div>
}