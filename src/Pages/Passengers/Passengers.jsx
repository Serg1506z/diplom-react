import style from "./Passengers.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TripDetails from "../../Components/TripDetails/TripDetails"
import PassDataForm from "../../Components/PassDataForm/PassDataForm"


export default function Passengers() {
    return <div className={style.Passengers}>
        <Header />
        <section className={style.mainContainer}>
            <SectionFindTicket />
            <ProgressBar />
            <div className={style.middleSection}>
                <section className={style.leftSection}>
                    <TripDetails />
                </section>
                <section className={style.rightSection}>
                    <PassDataForm />
                    <div className={style.addPassenger}>
                        <span className={style.addPassengerText}>Добавить пассажира</span>
                        <button className={style.addPassengerbtn}></button>
                    </div>
                    <button className={style.rightSectionBtn}>ДАЛЕЕ</button>
                </section>
            </div>
        </section>
        <Footer />
    </div>
}