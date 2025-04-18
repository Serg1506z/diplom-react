import style from './TrainNav.module.css'
import {ReactComponent as RBtn} from '../../Assets/Images/settingBtn_forward.svg'
import { useNavigate } from 'react-router-dom'

export default function TrainNav (){
    const navigate = useNavigate()
    return   <div className={style.flex}>
        <RBtn className={style.placeCardIcon} />
        <button className={style.placeCardBtn} onClick={() => navigate('/selectTrain')}>Выбрать другой поезд</button>
    </div>
}