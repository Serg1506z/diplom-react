import style from "./TrainCard.module.css"


export default function TrainCard() {
    return <div class={style.trainCard}>
        <div class={style.infoTrain}>
            <div class={style.logoTrain}></div>
            <div class={style.numberTrain}>116С</div>
            <div class={style.trainStops}>Адлер
                Москва Санкт-Петербург</div>
        </div>
        <div class={style.scheduleTrain}>
            <div class={style.startTrain}>
                <div class={style.startTime}>00:10</div>
                <div class={style.startCity}>Москва</div>
                <div class={style.startRailway}>Курский вокзад</div>
            </div>
            <div class={style.travelTime}>
                <div class={style.travelTime_time}>9 : 42 </div>
                <div class={style.travelTime_icon}></div>
            </div>
            <div class={style.finishTrain}>
                <div class={style.finishTime}>9:52</div>
                <div class={style.finishSity}>Санкт-петербург</div>
                <div class={style.finishRailway}>Ладожский вокзад</div>
            </div>
        </div>
        <div class={style.trainPrice}>
            <div class={style.categoriPlaces}>
                <div class={style.categoriPlace}>
                    <p class={style.placeTitle}>Сидячий</p>
                    <div class={style.Quantity}>88</div>
                    <div class={style.placePraice}><span class={style.textPraice}>от</span>1 920</div>
                </div>
                <div class={style.categoriPlace}>
                    <p class={style.placeTitle}>Плацкарт</p>
                    <div class={style.quantity}>55</div>
                    <div class={style.placePraice}><span class={style.textPraice}>от</span>2 530</div>
                </div>
                <div class={style.categoriPlace}>
                    <p class={style.placeTitle}>Купе</p>
                    <div class={style.quantity}>24</div>
                    <div class={style.placePraice}><span class={style.textPraice}>от</span>3 820</div>
                </div>
                <div class={style.categoriPlace}>
                    <p class={style.placeTitle}>Люкс</p>
                    <div class={style.quantity}>15</div>
                    <div class={style.placePraice}><span class={style.textPraice}>от</span>4 950</div>
                </div>
                <div class={style.trainPlace_icon}></div>
                <button class={style.selectPlace}>Выбрать места</button>
            </div>
        </div>
    </div >
}

