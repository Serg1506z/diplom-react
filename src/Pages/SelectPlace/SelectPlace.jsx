import Header from '../../Components/Header/Header'
import style from './SelectPlace.module.css'
import Footer from '../../Components/Footer/Footer'
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import Settings from "../../Components/Settings/Settings"
import LastTicket from "../../Components/LastTicket/LastTicket"
import PlaceCard from '../../Components/PlaceCard/PlaceCard'


export default function SelectPlace() {
    return <div className={style.SelectPlace}>
        <Header />
        <main className={style.mainContainer}>
            <SectionFindTicket />
            <ProgressBar />
            <section className={style.middleSection}>
                <div className={style.leftColumn}>
                    <Settings />
                    <div className={style.lastTicket}>
                        <h2 className={style.ticketsTitle}>последние билеты</h2>
                        <LastTicket />
                    </div>
                </div> 
                <div className={style.rightColumn}>
                    <PlaceCard />
                </div>
            </section>
        </main>
        <Footer />
    </div>
}