import style from "./PlaceCard.module.css"
import QuantityTickets from "../../UI/QuantityTickets/QuantityTickets"
import TrainInfo from "../../UI/TrainInfo/TrainInfo"
import TrainNav from "../../UI/TrainNav/TrainNav"
import VanType from "../VanType/VanType"
import NumberVam from "../../UI/NumberVan/NumberVan"


export default function PlaceCard({currentRoute, seats}) {

    return <div className={style.placeCard}>
        <div className={style.placeCardContainer}>
            <TrainNav />
            <TrainInfo currentRoute={currentRoute} />
            <QuantityTickets />
            <VanType type={seats.coach.class_type} />
            <NumberVam data={seats}/>
        </div>
    </div>
}