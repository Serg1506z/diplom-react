import style from "./Form.module.css"
import { useState } from "react"
import DateCalendar from "../Calendar/Calendar"
import {ReactComponent as CalendarIcon} from "../../Assets/Icons/Calendar.svg"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setState } from "../../Redux/Slices/Route"
import InputHint from "../InputHint/InputHint"

export default function FormFindTicket() {
    const value = useSelector(state => state.route.filterSettings)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState([false, false])
    const switchValues = (e) => setValue({...value, from_city_name: value.to_city_name, 
        to_city_name: value.from_city_name, from_city_id: value.to_city_id, to_city_id: value.from_city_id
    })
    const setValue = (value) => dispatch(setState(value)) 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/selectTrain')
    }

    console.log(value);
    

   
    

    return <form className={style.headerSection_input} onSubmit={handleSubmit}>
            <div className={style.headerSection_title}>Направление</div>
            <div className={style.inputWay}>
                <div className={style.input_container}>
                    <InputHint value={{name: value.from_city_name, _id: value.from_city_id}} setValue={(e) => setValue({...value, from_city_name: e.name, from_city_id: e._id})} />
                </div>
                <button type="button" className={style.changeInput} onClick={switchValues}></button>
                <div className={style.input_container}>
                    <InputHint value={{name: value.to_city_name, _id: value.to_city_id}} setValue={(e) => setValue({...value, to_city_name: e.name, to_city_id: e._id})} />
                </div>
            </div>
            <div className={style.headerSection_title}>Дата</div>
            <div className={style.inputDate}>
                <div className={style.input_container}>
                    <input disabled name="date_start" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_start ? new Date(value.date_start).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                    <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([!isOpen[0], false])} />
                    {isOpen[0] && <DateCalendar value={value.date_start} setValue={(e) => setValue({...value, date_start: e + ''})} />}
                </div>

                <div className={style.input_container}>
                    <input disabled name="date_end" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_end ? new Date(value.date_end).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                    <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([false, !isOpen[1]])} />
                    {isOpen[1] &&<DateCalendar value={value.date_end} setValue={(e) => setValue({...value, date_end: e + ''})} />}
                </div>
            </div>
            <button disabled={!value.from_city_id || !value.to_city_id} className={style.selectDate_dateBtn}>Найти билеты</button>
     </form>
}