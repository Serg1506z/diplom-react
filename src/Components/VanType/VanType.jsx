import style from './VanType.module.css'
import {ReactComponent as Sit} from '../../Assets/Images/option-item(сидячий).svg'
import {ReactComponent as ReservedSeat} from '../../Assets/Images/option-item(плац).svg'
import {ReactComponent as Compartment} from '../../Assets/Images/option-item(купе).svg'
import {ReactComponent as Luxury} from '../../Assets/Images/option-item(люкс).svg'
import NumberVam from '../../UI/NumberVan/NumberVan'

export default function VanType({type}) {

    // console.log(type);
    
    return <div className={style.vanType}>
        <h2 className={style.vanTypeTitle}>Тип вагона</h2>
        <div className={style.vanTypeContainer}>
            <div className={style.vanTypeItem}>
                <Sit style={{height: '50px', width: '50px'}} fill={type === 'fourth' ? '#FFA800' : '#E5E5E5'}/>
                <p style={{color: type === 'fourth' ? '#FFA800' : 'black'}}>Сидячий</p>
            </div>
            <div className={style.vanTypeItem}>
                <ReservedSeat style={{height: '50px', width: '50px'}} fill={type === 'third' ? '#FFA800' : '#E5E5E5'}/>
                <p style={{color: type === 'third' ? '#FFA800' : 'black'}}>Плацкарт</p>
            </div>
            <div className={style.vanTypeItem}>
                <Compartment style={{height: '50px', width: '50px'}} fill={type === 'second' ? '#FFA800' : '#E5E5E5'}/>
                <p style={{color: type === 'second' ? '#FFA800' : 'black'}}>Купе</p>
            </div>
            <div className={style.vanTypeItem}>
                <Luxury style={{height: '50px', width: '50px'}} fill={type === 'first' ? '#FFA800' : '#E5E5E5'}/>
                <p style={{color: type === 'first' ? '#FFA800' : 'black'}}>Люкс</p>
            </div>            
        </div>
    </div>
}