import style from "./TrainCard.module.css"
import {ReactComponent as Rocket} from '../../Assets/Images/rocket.svg' 
import {ReactComponent as Wifi} from '../../Assets/Images/wifi.svg' 
import {ReactComponent as Cofe} from '../../Assets/Images/cofe.svg'
import { useNavigate } from "react-router-dom"


export default function TrainCard({route}) {
    const navigate = useNavigate()
    function handleClick () {
        navigate('/selectPlace/' + route.departure._id)
    }
    

    return <div className={style.trainCard}>
        <div className={style.infoTrain}>
            <div className={style.logoTrain}></div>
            <div className={style.numberTrain}>{route?.departure?.train?.name}</div>
            <div className={style.trainStops}>
                <p>{route?.departure?.from?.city.name} - {route?.departure?.to?.city.name}</p>
            </div>
        </div>
        <div className={style.scheduleTrain}>
            <div className={style.startTrain}>
                <div className={style.startTime}>{new Date(route?.departure?.from?.datetime * 1000).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</div>
                <div className={style.startCity}>{route?.departure?.from?.city.name}</div>
                <div className={style.startRailway}>{route?.departure?.from?.railway_station_name}</div>
            </div>
            <div className={style.travelTime}>
                <div className={style.travelTime_time}>{new Date(new Date(route?.departure?.to?.datetime * 1000) - new Date(route?.departure?.from?.datetime * 1000) - 10800000).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</div>
                <div className={style.travelTime_icon}></div>
            </div>
            <div className={style.finishTrain}>
                <div className={style.finishTime}>{new Date(route?.departure?.to?.datetime * 1000).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</div>
                <div className={style.finishSity}>{route?.departure?.to?.city.name}</div>
                <div className={style.finishRailway}>{route?.departure?.to?.railway_station_name}</div>
            </div>
        </div>
        <div className={style.trainPrice}>
            <div className={style.categoriPlaces}>
                {route?.available_seats_info?.fourth && <div className={style.categoriPlace}>
                    <p className={style.placeTitle}>Сидячий</p>
                    <div className={style.quantity}>{route.available_seats_info.fourth}</div>
                    <div className={style.placePraice}><span className={style.textPraice}>от</span>{route?.departure?.price_info.fourth?.bottom_price}</div>
                </div>}
                {route?.available_seats_info?.third && <div className={style.categoriPlace}>
                    <p className={style.placeTitle}>Плацкарт</p>
                    <div className={style.quantity}>{route?.available_seats_info?.third}</div>
                    <div className={style.placePraice}><span className={style.textPraice}>от</span>{route?.departure?.price_info.third?.bottom_price}</div>
                </div>}
               {route?.available_seats_info?.second && <div className={style.categoriPlace}>
                    <p className={style.placeTitle}>Купе</p>
                    <div className={style.quantity}>{route.available_seats_info.second}</div>
                    <div className={style.placePraice}><span className={style.textPraice}>от</span>{route?.departure?.price_info.second?.bottom_price}</div>
                </div>}
                {route.available_seats_info.first && <div className={style.categoriPlace}>
                    <p className={style.placeTitle}>Люкс</p>
                    <div className={style.quantity}>{route.available_seats_info.first}</div>
                    <div className={style.placePraice}><span className={style.textPraice}>от</span>{route?.departure?.price_info.first?.bottom_price}</div>
                </div>}
                <div className={style.trainPlace_icon}>
                    <Wifi fill={route.departure.have_wifi ? '#FFA800' : "#C4C4C4"} stroke={route.departure.have_wifi ? '#FFA800' : "#C4C4C4"}/>
                    <Rocket fill={route.departure.is_express ? '#FFA800' : "#C4C4C4"} stroke={route.departure.is_express ? '#FFA800' : "#C4C4C4"}/>
                    <Cofe fill={route.departure.have_air_conditioning ? '#FFA800' : "#C4C4C4"} stroke={route.departure.have_air_conditioning ? '#FFA800' : "#C4C4C4"}/>
                </div>
                <button className={style.selectPlace} onClick={handleClick}>Выбрать места</button>
            </div>
        </div>
    </div >
}

