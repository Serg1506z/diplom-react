import style from './TrainInfo.module.css'
import {ReactComponent as YTrain} from '../../Assets/Images/yellowTrain.svg'
import {ReactComponent as RightVector} from '../../Assets/Images/middleIcon.svg'
import {ReactComponent as OClock} from '../../Assets/Images/OClock.svg'
import { useEffect, useState } from 'react';


export default function TrainInfo ({currentRoute}) {
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [difference, setDifference] = useState(0);

    useEffect(() => {
        if(!currentRoute?.departure) return
        setDateFrom(new Date(currentRoute?.departure?.from?.datetime ? new Date(currentRoute?.departure?.from?.datetime * 1000)  : new Date()))
        setDateTo(new Date(currentRoute?.departure?.to?.datetime ? new Date(currentRoute?.departure?.to?.datetime * 1000)  : new Date()))
        setDifference(new Date(new Date(currentRoute?.departure?.to?.datetime * 1000)) - new Date(currentRoute?.departure?.from?.datetime * 1000))
    }, [currentRoute])

    return <div className={style.trainInfo}>
        <YTrain className={style.trainIcon} />
        <div className={style.info}>
            <h4 className={style.title}>{currentRoute?.departure?.train?.name}</h4>
            <p className={style.gray}>Адлер</p>
            <p>{currentRoute?.departure?.from?.city.name}</p>
            <p>{currentRoute?.departure?.to?.city.name}</p>
        </div>
        <div className={style.departure}>
            <h4 className={style.title}>{dateFrom?.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</h4>
            <p>{currentRoute?.departure?.from?.city.name}</p>
            <p className={style.gray}>{currentRoute?.departure?.from?.railway_station_name}</p>
        </div>
        <RightVector className={style.rightVector} />
        <div className={style.departure}>
            <h4 className={style.title}>{dateTo?.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</h4>
            <p>{currentRoute?.departure?.to?.city.name}</p>
            <p className={style.gray}>{currentRoute?.departure?.to?.railway_station_name}</p>
        </div>
        <div className={style.time}>
            <OClock className={style.oclock} />
            <div>
                <p>{new Date(difference).getHours() - 3 + ' часов'}</p>
                <p>{new Date(difference).getMinutes() + ' минуты'}</p>
            </div>
        </div>
    </div>
}