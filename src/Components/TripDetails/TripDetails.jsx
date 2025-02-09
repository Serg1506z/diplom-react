import style from "./TripDetails.module.css"

export default function TripDetails() {
    return <div className={style.details}>
        <div className={style.detailsTitle}>
            <h2 className={style.titleText}>ДЕТАЛИ ПОЕЗДКИ</h2>
        </div>
        <div className={style.forward}>
            <div className={style.aboutTrain}>
                <div className={style.title}>
                    <button className={style.forwardTitleBtn}></button>
                    <p className={style.aboutTraintitleText}>Туда</p>
                    <time className={style.titleTime}>30.08.2018</time>
                    <button className={style.titleBtnRemove}></button>
                </div>
                <div className={style.numberTrain}>
                    <div className={style.numberLeft}><p className={style.leftNumberText}>№ Поезда</p></div>
                    <div className={style.numberRight}><p className={style.rightNumberText}>116С</p></div>
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
                        <div className={style.date}>30.08.2018</div>
                    </div>
                    <div className={style.middledepartureTime}>
                        <p className={style.middleTime}>9 : 42</p>
                        <div className={`${style.middleIcon} ${style.middleIconForward}`}></div>
                    </div>
                    <div className={style.rightDepertureTime}>
                        <div className={style.time}>09:52</div>
                        <div className={style.date}>31.08.2018</div>
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
        </div>
        <div className={style.back}>
        <div className={style.aboutTrain}>
                <div className={style.title}>
                    <button className={style.backTitleBtn}></button>
                    <p className={style.aboutTraintitleText}>Обратно</p>
                    <time className={style.titleTime}>09.09.2018</time>
                    <button className={style.titleBtnRemove}></button>
                </div>
                <div className={style.numberTrain}>
                    <div className={style.numberLeft}><p className={style.leftNumberText}>№ Поезда</p></div>
                    <div className={style.numberRight}><p className={style.rightNumberText}>116С</p></div>
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
        </div>
        <div className={style.passengers}>
            <div className={style.passengersTitle}>
                <div className={style.passengersIcon}></div>
                <p className={style.passengersText}>Пассажиры</p>
                <button className={style.passengersBtnRemove}></button>
            </div>
            <div className={style.passengerPrice}>
                <p className={style.text}>2 Взрослых</p>
                <div className={style.priceSection}>
                    <p className={style.prece}>5 840</p>
                    <div className={style.priceIcon}></div>
                </div>
            </div>
            <div className={style.passengerPrice}>
                <p className={style.text}>1 Ребенок</p>
                <div className={style.priceSection}>
                    <p className={style.prece}>1 920</p>
                    <div className={style.priceIcon}></div>
                </div>
            </div>
        </div>
        <div className={style.total}>
            <p className={style.totalText}>ИТОГ</p>
            <div className={style.totalPrice}>
                <p className={style.totalPriceText}>7 760</p>
                <div className={style.totalPriceIcon}></div>
            </div>
        </div>
    </div>
}