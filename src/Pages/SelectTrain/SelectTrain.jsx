import style from "./SelectTrain.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CheckBoxToggle from "../../Components/CheckBox/CheckBoxToggle"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TrainCard from "../../Components/TrainCards/TrainCard"
import Settings from "../../Components/Settings/Settings"
import ChangePage from "../../Components/ChangePage/ChangePage"
import LastTicket from "../../Components/LastTicket/LastTicket"

export default function SelectTrain() {
  return <div className={style.SelectTrain}>
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
          <TrainCard />
        </div>
      </section>
      <ChangePage />
    </main>
    <Footer />
  </div>
}