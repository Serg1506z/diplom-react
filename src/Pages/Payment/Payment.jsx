import style from "./Payment.module.css"
import Header from "../../Components/Header/Header"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import Footer from "../../Components/Footer/Footer"
import TripDetails from "../../Components/TripDetails/TripDetails"
import Initials from "../../Components/Initials/Initials"
import { useSelector, useDispatch } from "react-redux"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import { useState } from "react"

export default function Payment() {
    const value = useSelector(state => state.seats.filterSettings)
    const dispatch = useDispatch()
    const personalData = useSelector(state => state.tickets.personalData)
    const currentSeats = useSelector(state => state.seats.currentSeats)
    const [paymentData, setPaymentData] = useState({})

    function handleSubmit (e) {
        e.preventDefault()    
        dispatch(getRoutesThunk({...value,}))
    }

    function handleSubmit(){

    }

    function handleInput(e) {
        setPaymentData({...paymentData, [e.target.name] : e.target.value})
    }

    return <div className={style.paymentContainer}>
        <Header />
        <main className={style.mainContainer}>
            <SectionFindTicket value={value} handleSubmit={handleSubmit} />
            <ProgressBar />
            <div className={style.middleSection}>
                <section className={style.leftSection}>
                    <TripDetails currentSeats={currentSeats} />
                </section>
                <section className={style.rightSection}>
                    <form onSubmit={handleSubmit} className={style.personalData}>
                        <div className={style.personalDataTitle}><span className={style.titleText}>Персональные данные</span></div>
                        <Initials value={paymentData} setValue={setPaymentData} />
                        <div className={style.phone}>
                            <p className={style.phoneTitle}>Контактный телефон</p>
                            <input type="text" name="phone" onInput={handleInput} className={style.PhoneInput} placeholder="+7 ___ ___ __ __" />
                        </div>
                        <div className={style.eMail}>
                            <p className={style.phoneTitle}>E-mail</p>
                            <input type="email" name="email" onInput={handleInput} className={style.PhoneInput} placeholder="inbox@gmail.ru" />
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
                            <span className={style.checkBoxText}>Наличными</span>
                        </div>
                      </div>
                    </form>
                    <button className={style.personalDataBtn}>КУПИТЬ БИЛЕТЫ</button>
                </section>
            </div>
        </main>
        <Footer />
    </div>
}