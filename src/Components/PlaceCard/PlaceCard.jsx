import style from "./PlaceCard.module.css"
import QuantityTickets from "../../UI/QuantityTickets/QuantityTickets"
import TrainInfo from "../../UI/TrainInfo/TrainInfo"
import TrainNav from "../../UI/TrainNav/TrainNav"
import VanType from "../VanType/VanType"


export default function PlaceCard() {
    return <div className={style.placeCard}>
        <h2 className={style.placeCardTitle}>Выбор мест</h2>
        <div className={style.placeCardContainer}>
            <TrainNav />
            <TrainInfo />
            <QuantityTickets />
            <VanType />
        </div>
    </div>
}