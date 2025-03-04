import style from './VanType.module.css'
import sit from '../../Assets/Images/option-item(сидячий).svg'
import reservedSeat from '../../Assets/Images/option-item(плац).svg'
import compartment from '../../Assets/Images/option-item(купе).svg'
import luxury from '../../Assets/Images/option-item(люкс).svg'
import {ReactComponent as Wifi} from '../../Assets/Images/option-item(wi-fi).svg'
import {ReactComponent as Conditioner} from '../../Assets/Icons/conditioner-icon.svg'
import {ReactComponent as Underwear} from '../../Assets/Icons/underwear.svg'
import {ReactComponent as Cofe} from '../../Assets/Icons/cofe-icon.svg'
export default function VanType() {
    return <div className={style.vanType}>
        <h2 className={style.vanTypeTitle}>Тип вагона</h2>
        <div className={style.vanTypeContainer}>
            <div className={style.vanTypeItem}>
                <img src={sit} alt="" />
                <p>Сидячий</p>
            </div>
            <div className={style.vanTypeItem}>
                <img src={reservedSeat} alt="" />
                <p>Плацкарт</p>
            </div>
            <div className={style.vanTypeItem}>
                <img src={compartment} alt="" />
                <p>Купе</p>
            </div>
            <div className={style.vanTypeItem}>
                <img src={luxury} alt="" />
                <p>Люкс</p>
            </div>            
        </div>
        {/* Возможно UI компонент */}
        <div className={style.vanTypeLine}>
            <p>Вагоны <span className={style.white}>07</span> 09</p>
            <p>Нумерация вагонов начинается с головы поезда</p>
        </div>
        <div className={style.vanTypeTable}>
            <div className={style.vanNumber}>
                <h1>07</h1>
                <p>вагон</p>
            </div>
            <div className={style.vanTypeTable__container}>
                <div className={style.vanTypeTable__column}>
                    <p className={style.vanTypeTable__title}>Места  11</p>
                    <p className={style.vanTypeTable__value}>Верхние  3</p>
                    <p className={style.vanTypeTable__value}>Нижние  8</p>
                </div>
                <div className={style.vanTypeTable__column}>
                    <p className={style.vanTypeTable__title}>Стоимость</p>
                    <p className={style.vanTypeTable__value}>2 920 ₽</p>
                    <p className={style.vanTypeTable__value}>3 530 ₽</p>
                </div>
                <div className={style.vanTypeTable__column}>
                    <p className={style.vanTypeTable__title}>Обслуживание ФПК</p>
                    <div className={style.vanTypeTable__tools}>
                        <button className={style.vanTypeTable__tool}><Conditioner /></button>
                        <button className={style.vanTypeTable__tool}><Wifi /></button>
                        <button className={style.vanTypeTable__tool}><Underwear /></button>
                        <button className={style.vanTypeTable__tool}><Cofe /></button>
                    </div>
                </div>
            </div>
        </div>
        {/*  */}
    </div>
}