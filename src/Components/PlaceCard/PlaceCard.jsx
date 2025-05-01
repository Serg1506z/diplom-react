import style from "./PlaceCard.module.css"
import QuantityTickets from "../../UI/QuantityTickets/QuantityTickets"
import TrainInfo from "../../UI/TrainInfo/TrainInfo"
import TrainNav from "../../UI/TrainNav/TrainNav"
import VanType from "../VanType/VanType"
import NumberVam from "../../UI/NumberVan/NumberVan"
import CarLayoutReserved from "../CarLayoutReserved/CarLayoutReserved"
import CarLayout from "../CarLayoutCompartment/CarLayout"
import CarLayoutLuxury from "../CarLayoutLuxury/CarLayoutLuxury"
import CarLayoutSeatingPosition from "../CarLayoutSeatingPositions/CarLayoutSeatingPosition"
import { useState, useEffect} from "react"

export default function PlaceCard({currentRoute, seats, setUserCurrentSeats}) {
    const [currentSeats, setCurrentSeats] = useState([])

   
    useEffect(() => {
        if(currentSeats.length === 0) return
        setUserCurrentSeats({...seats, seats:seats.seats.filter(elem => currentSeats.some(item => item.index === elem.index))})
    }, [currentSeats])
    
    

    return <div className={style.placeCard}>
        <div className={style.placeCardContainer}>
            <TrainNav />
            <TrainInfo currentRoute={currentRoute} />
            <QuantityTickets currentSeats={currentSeats} seats={seats.seats}/>
            <VanType type={seats.coach.class_type} />
            <NumberVam data={seats}/>
            {seats.coach.class_type === 'first' && <CarLayoutLuxury setCurrentSeats={setCurrentSeats} currentSeats={currentSeats} seats={seats.seats} />}
            {seats.coach.class_type === 'second' && <CarLayout setCurrentSeats={setCurrentSeats} currentSeats={currentSeats} seats={seats.seats} />}
            {seats.coach.class_type === 'third' && <CarLayoutReserved setCurrentSeats={setCurrentSeats} currentSeats={currentSeats} seats={seats.seats} />}
            {seats.coach.class_type === 'fourth' && <CarLayoutSeatingPosition setCurrentSeats={setCurrentSeats} currentSeats={currentSeats} seats={seats.seats} />}
        </div>
    </div>
}