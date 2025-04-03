import style from './VanType.module.css'
import sit from '../../Assets/Images/option-item(сидячий).svg'
import reservedSeat from '../../Assets/Images/option-item(плац).svg'
import compartment from '../../Assets/Images/option-item(купе).svg'
import luxury from '../../Assets/Images/option-item(люкс).svg'
import NumberVam from '../../UI/NumberVan/NumberVan'

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
      <NumberVam />
        {/*  */}
    </div>
}