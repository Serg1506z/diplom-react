import style from "./NumberVam.module.css"
import {ReactComponent as Wifi} from '../../Assets/Icons/wifi-icon.svg'
import {ReactComponent as Conditioner} from '../../Assets/Icons/conditioner-icon.svg'
import {ReactComponent as Underwear} from '../../Assets/Icons/underwear.svg'
import {ReactComponent as Cofe} from '../../Assets/Icons/cofe-icon.svg'

export default function NumberVam (){
    return <div className={style.NumberVamBlock}>
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
    </div>
}