import style from './TrainNav.module.css'
import {ReactComponent as RBtn} from '../../Assets/Images/settingBtn_forward.svg'

export default function TrainNav (){
    return   <div className={style.flex}>
        <RBtn className={style.placeCardIcon} />
        <button className={style.placeCardBtn}>Выбрать другой поезд</button>
    </div>
}