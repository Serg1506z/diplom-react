import Header from '../../Components/Header/Header'
import style from './SelectPlace.module.css'
import Footer from '../../Components/Footer/Footer'
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TrainCard from "../../Components/TrainCards/TrainCard"
import Settings from "../../Components/Settings/Settings"
import ChangePage from "../../Components/ChangePage/ChangePage"
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
                        <h2 class={style.ticketsTitle}>последние билеты</h2>
                        <LastTicket />
                    </div>
                </div> 
                <div className={style.rightColumn}>
                    <PlaceCard />
                </div>
            </section>
            <ChangePage />
        </main>
        <Footer />
    </div>
}