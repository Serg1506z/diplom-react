import style from './TrainInfo.module.css'
import {ReactComponent as YTrain} from '../../Assets/Images/yellowTrain.svg'
import {ReactComponent as RightVector} from '../../Assets/Images/middleIcon.svg'
import {ReactComponent as OClock} from '../../Assets/Images/OClock.svg'
export default function TrainInfo (){
    return <div className={style.trainInfo}>
        <YTrain className={style.trainIcon} />
        <div className={style.info}>
            <h4 className={style.title}>116С</h4>
            <p className={style.gray}>Адлер</p>
            <p>Москва</p>
            <p>Санкт-Петербург</p>
        </div>
        <div className={style.departure}>
            <h4 className={style.title}>00:10</h4>
            <p>Москва</p>
            <p className={style.gray}>Курский вокзал</p>
        </div>
        <RightVector className={style.rightVector} />
        <div className={style.departure}>
            <h4 className={style.title}>09:52</h4>
            <p>Санкт-Петербург</p>
            <p className={style.gray}>Ладожский вокзал</p>
        </div>
        <div className={style.time}>
            <OClock className={style.oclock} />
            <div>
                <p>9 часов</p>
                <p>42 минуты</p>
            </div>
        </div>
    </div>
}