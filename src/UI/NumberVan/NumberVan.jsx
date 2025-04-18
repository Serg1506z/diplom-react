import style from "./NumberVam.module.css"
import {ReactComponent as Wifi} from '../../Assets/Icons/wifi-icon.svg'
import {ReactComponent as Conditioner} from '../../Assets/Icons/conditioner-icon.svg'
import {ReactComponent as Underwear} from '../../Assets/Icons/underwear.svg'
import {ReactComponent as Cofe} from '../../Assets/Icons/cofe-icon.svg'

export default function NumberVam ({data}){

    console.log(data);

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
                    <p className={style.vanTypeTable__title}>Места  {data.coach.available_seats}</p>
                    <p className={style.vanTypeTable__value}>Верхние</p>
                    <p className={style.vanTypeTable__value}>Нижние</p>
                </div>
                <div className={style.vanTypeTable__column}>
                    <p className={style.vanTypeTable__title}>Стоимость</p>
                    <p className={style.vanTypeTable__value}>{data.coach.top_price} ₽</p>
                    <p className={style.vanTypeTable__value}>{data.coach.bottom_price} ₽</p>
                </div>
                <div className={style.vanTypeTable__column}>
                    <p className={style.vanTypeTable__title}>Обслуживание ФПК</p>
                    <div className={style.vanTypeTable__tools}>
                        <button className={style.vanTypeTable__tool} style={{backgroundColor: data.coach.have_air_conditioning ? '#FFA800' : 'white', borderColor: data.coach.have_air_conditioning ? '#FFA800' : 'black'}} >
                            <Conditioner fill={data.coach.have_air_conditioning ? 'white' : 'black'} />
                        </button>
                        <button className={style.vanTypeTable__tool} style={{backgroundColor: data.coach.have_wifi ? '#FFA800' : 'white', borderColor: data.coach.have_wifi ? '#FFA800' : 'black'}} >
                            <Wifi fill={data.coach.have_wifi ? 'white' : 'black'} />
                        </button>
                        <button className={style.vanTypeTable__tool} style={{backgroundColor: data.coach.is_linens_included ? '#FFA800' : 'white', borderColor: data.coach.is_linens_included ? '#FFA800' : 'black'}} >
                            <Underwear fill={data.coach.is_linens_included ? 'white' : 'black'} />
                        </button>
                        {/* <button className={style.vanTypeTable__tool}><Cofe fill={condition ? 'white' : 'black'} /></button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}