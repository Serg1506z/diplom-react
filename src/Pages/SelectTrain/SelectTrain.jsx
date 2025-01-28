import style from "./SelectTrain.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CheckBoxToggle from "../../Components/CheckBox/CheckBoxToggle"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TrainCard from "../../Components/TrainCards/TrainCard"

export default function SelectTrain() {
    return <div className={style.SelectTrain}>
        <Header />
      <main className={style.mainContainer}>
      <SectionFindTicket/>
      <ProgressBar />
      <TrainCard />
      </main>
        <Footer />
        <CheckBoxToggle text={"купе"} />
    </div>
}