import Rangeprice from "../RangePrice/RangePrice"
import {ReactComponent as Cupe} from '../../Assets/Icons/Cupe.svg'
import style from "./Settings.module.css"
import { useSelector, useDispatch } from "react-redux"
import {ReactComponent as CalendarIcon} from "../../Assets/Icons/Calendar.svg"
import { useEffect, useState } from "react"
import DateCalendar from "../Calendar/Calendar"
import { setState } from "../../Redux/Slices/Route"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import ToggleSetting from "../ToggleSetting/ToggleSetting"

export default function Settings() {
    const value = useSelector(state => state.route.filterSettings)
    const [isOpen, setIsOpen] = useState([false, false])
    const setValue = (value) => dispatch(setState(value)) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getRoutesThunk({...value}))
        // eslint-disable-next-line
    }, [value])


    return <section className={style.setting}>
        <div className={style.settingDate}>
            <h2 className={style.dateTitle}>Дата поездки</h2>
            <div className={style.input_container}>
                <input disabled name="dateDeparte" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_start ? new Date(value.date_start).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([!isOpen[0], false])} />
                {isOpen[0] && <DateCalendar value={value.date_start} setValue={(e) => setValue({...value, date_start: e + ''})} />}
            </div> 
            <h2 className={style.dateTitle}>Дата возвращения</h2>
            <div className={style.input_container}>
                <input disabled name="dateDeparte" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_end ? new Date(value.date_end).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([false, !isOpen[1]])} />
                {isOpen[1] &&<DateCalendar value={value.date_end} setValue={(e) => setValue({...value, date_end: e + ''})} />}
            </div>
        </div>
        <div className={style.asideLine}></div>
        <div className={style.settingOption}>
            <div className={style.optionItems}>
                <ToggleSetting text="Купе" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_second_class: value}))} value={value.have_second_class} />
                <ToggleSetting text="Плацкарт" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_third_class : value}))} value={value.have_third_class } />
                <ToggleSetting text="Сидячий" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_fourth_class : value}))} value={value.have_fourth_class } />
                <ToggleSetting text="Люкс" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_first_class : value}))} value={value.have_first_class } />
                <ToggleSetting text="Wi-Fi" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_wifi : value}))} value={value.have_wifi } />
                <ToggleSetting text="Экспресс" Icon={() => <Cupe />} setValue={(value) => dispatch(setState({...value, have_express : value}))} value={value.have_express } />
            </div>
        </div>
        <div className={style.asideLine}></div>
        <div className={style.settingPrice}>
            <h2 className={style.priceTitle}>Стоимость </h2>
            <Rangeprice max={7000} min={1920} setValue={({min, max}) => dispatch(setState({...value, price_from : min, price_to : max}))}/>
        </div>
        <div className={style.asideLine}></div>
        <div className={style.settingSaid}>
            <button className={`${style.settingBtn} ${style.settingBtn_forward}`}></button>
            <p className={style.saidTitle}>Туда</p>
            <button className={style.settingBtn_add}></button>
        </div>
        <div className={style.asideLine}></div>
        <div className={style.settingSaid}>
            <button className={`${style.settingBtn} ${style.settingBtn_reverce}`}></button>
            <p className={style.saidTitle}>Обратно</p>
            <button className={style.settingBtn_add}></button>
        </div>
    </section>
}