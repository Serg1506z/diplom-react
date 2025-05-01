import style from "./TripDetails.module.css"
import { useMemo } from "react";

export default function TripDetails({currentSeats}) {

    // туда
    const numberTrain = useMemo(() => currentSeats?.currentRoute?.departure?.train?.name)
    const nameRoute = useMemo(() => [currentSeats?.currentRoute?.departure?.from.city.name, currentSeats?.currentRoute?.departure?.to.city.name])
    const sityFrom = useMemo(() => currentSeats?.currentRoute?.departure?.from.city.name)
    const sityTo = useMemo(() => currentSeats?.currentRoute?.departure?.to.city.name)
    const sityFromPlatform = useMemo(() => currentSeats?.currentRoute?.departure?.from.railway_station_name)
    const sityToPlatform = useMemo(() => currentSeats?.currentRoute?.departure?.to.railway_station_name)
    
    const dateTo = useMemo(() => new Date(currentSeats?.currentRoute?.departure?.from.datetime * 1000)
        .toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'}))
    const timeFrom = useMemo(() => new Date(currentSeats?.currentRoute?.departure?.from.datetime * 1000)
        .toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'}))
    const timeTo = useMemo(() => new Date(currentSeats?.currentRoute?.departure?.to.datetime * 1000)
        .toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'}))
    const dateTimeTo = useMemo(() => new Date(currentSeats?.currentRoute?.departure?.to.datetime * 1000)
        .toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'}))
    const travelTime = useMemo(() => new Date(new Date(currentSeats?.currentRoute?.departure?.to.datetime * 1000) - new Date(currentSeats?.currentRoute?.departure?.from.datetime * 1000)))
    
    // обратно

    console.log(currentSeats);
    
    
    

    return <div className={style.details}>
        <div className={style.detailsTitle}>
            <h2 className={style.titleText}>ДЕТАЛИ ПОЕЗДКИ</h2>
        </div>
        <div className={style.forward}>
            <div className={style.aboutTrain}>
                <div className={style.title}>
                    <button className={style.forwardTitleBtn}></button>
                    <p className={style.aboutTraintitleText}>Туда</p>
                    <time className={style.titleTime}>{dateTo}</time>
                    <button className={style.titleBtnRemove}></button>
                </div>
                <div className={style.numberTrain}>
                    <div className={style.numberLeft}><p className={style.leftNumberText}>№ Поезда</p></div>
                    <div className={style.numberRight}><p className={style.rightNumberText}>{numberTrain}</p></div>
                </div>
                <div className={style.wayTrain}>
                    <div className={style.wayLeft}><p className={style.leftWayText}>Название</p></div>
                    <div className={style.wayRight}>
                        <div className={style.rightWayText}>{nameRoute[0]}</div>
                        <div className={style.rightWayText}> {nameRoute[1]}</div>
                    </div>
                </div>
                <div className={style.departureTime}>
                    <div className={style.leftDepartureTime}>
                        <div className={style.time}>{timeFrom}</div>
                        <div className={style.date}>{dateTo}</div>
                    </div>
                    <div className={style.middledepartureTime}>
                        <p className={style.middleTime}>{(travelTime.getDate() * 24 + travelTime.getHours())} : {travelTime.getMinutes()}</p>
                        <div className={`${style.middleIcon} ${style.middleIconForward}`}></div>
                    </div>
                    <div className={style.rightDepertureTime}>
                        <div className={style.time}>{timeTo}</div>
                        <div className={style.date}>{dateTimeTo}</div>
                    </div>
                </div>
                <div className={style.railways}>
                    <div className={style.lefrRailway}>
                        <div className={style.city}>{sityFrom}</div>
                        <div className={`${style.railway} ${style.left}`}>{sityFromPlatform}</div>
                    </div>
                    <div className={style.rightRailway}>
                        <div className={style.city}>{sityTo}</div>
                        <div className={`${style.railway} ${style.right}`}>{sityToPlatform}</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className={style.back}>
            <div className={style.aboutTrain}>
                <div className={style.title}>
                    <button className={style.backTitleBtn}></button>
                    <p className={style.aboutTraintitleText}>Обратно</p>
                    <time className={style.titleTime}>09.09.2018</time>
                    <button className={style.titleBtnRemove}></button>
                </div>
                <div className={style.numberTrain}>
                    <div className={style.numberLeft}><p className={style.leftNumberText}>№ Поезда</p></div>
                    <div className={style.numberRight}><p className={style.rightNumberText}>{numberTrainBack}</p></div>
                </div>
                <div className={style.wayTrain}>
                    <div className={style.wayLeft}><p className={style.leftWayText}>Название</p></div>
                    <div className={style.wayRight}>
                        <div className={style.rightWayText}>Адлер</div>
                        <div className={style.rightWayText}> Санкт-Петербург</div>
                    </div>
                </div>
                <div className={style.departureTime}>
                    <div className={style.leftDepartureTime}>
                        <div className={style.time}>00:10</div>
                        <div className={style.date}>09.09.2018</div>
                    </div>
                    <div className={style.middledepartureTime}>
                        <p className={style.middleTime}>9 : 42</p>
                        <div className={`${style.middleIcon} ${style.middleIconBack}`}></div>
                    </div>
                    <div className={style.rightDepertureTime}>
                        <div className={style.time}>09:52</div>
                        <div className={style.date}>08.09.2018</div>
                    </div>
                </div>
                <div className={style.railways}>
                    <div className={style.lefrRailway}>
                        <div className={style.city}>Москва</div>
                        <div className={`${style.railway} ${style.left}`}>Курский вокзал</div>
                    </div>
                    <div className={style.rightRailway}>
                        <div className={style.city}>Санкт-петербург</div>
                        <div className={`${style.railway} ${style.right}`}>Ладожский вокзал</div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className={style.passengers}>
            <div className={style.passengersTitle}>
                <div className={style.passengersIcon}></div>
                <p className={style.passengersText}>Пассажиры</p>
                <button className={style.passengersBtnRemove}></button>
            </div>
            <div className={style.passengerPrice}>
                <p className={style.text}>{`${currentSeats.seats.length} Взрослых`}</p>
                <div className={style.priceSection}>
                    <p className={style.prece}>{currentSeats.coach.price * currentSeats.seats.length}</p>
                    <div className={style.priceIcon}></div>
                </div>
            </div>
            {/* <div className={style.passengerPrice}>
                <p className={style.text}>1 Ребенок</p>
                <div className={style.priceSection}>
                    <p className={style.prece}>1 920</p>
                    <div className={style.priceIcon}></div>
                </div>
            </div> */}
        </div>
        <div className={style.total}>
            <p className={style.totalText}>ИТОГ</p>
            <div className={style.totalPrice}>
                <p className={style.totalPriceText}>{currentSeats.coach.price * currentSeats.seats.length}</p>
                <div className={style.totalPriceIcon}></div>
            </div>
        </div>
    </div>
}