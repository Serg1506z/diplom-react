import style from "./SectionFindTicket.module.css"
import { useDispatch } from "react-redux"
import { setState } from "../../Redux/Slices/Route"
import DateCalendar from "../Calendar/Calendar"
import {ReactComponent as CalendarIcon} from "../../Assets/Icons/Calendar.svg"
import { useState } from "react"
import InputHint from "../InputHint/InputHint"

export default function SectionFindTicket({value, handleSubmit}) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState([false, false])
    const setValue = (value) => dispatch(setState(value)) 

    return <section className={style.sectionContainer}>
        <div className={style.sectionSelect}>
            <div className={style.sectionTitle}>
            </div>
            <form className={style.sectionInput} onSubmit={handleSubmit}>
                <div className={style.inputs}>
                    <div className={style.input__container}>
                        <div className={style.sectionTitle}>Направление</div>
                        <InputHint value={{name: value.from_city_name, _id: value.from_city_id}} setValue={(e) => setValue({...value, from_city_name: e.name, from_city_id: e._id})} />
                    </div>
                    <div className={style.input__container}>
                        <InputHint value={{name: value.to_city_name, _id: value.to_city_id}} setValue={(e) => setValue({...value, to_city_name: e.name, to_city_id: e._id})} />
                    </div>
                    <div className={style.input__container}>
                        <div className={style.sectionTitle}>Дата</div>
                        <div className={style.input_container}>
                            <input disabled name="dateDeparte" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_start ? new Date(value.date_start).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                            <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([!isOpen[0], false])} />
                            {isOpen[0] && <DateCalendar value={value.date_start} setValue={(e) => setValue({...value, date_start: e + ''})} />}
                        </div>                    
                    </div>
                    <div className={style.input_container}>
                        <input disabled name="dateDeparte" type="text" className={`${style.selectDate} ${style.date}`} value={value.date_end ? new Date(value.date_end).toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'}) : "ДД/ММ/ГГ"}/>
                        <CalendarIcon className={style.inputIcon} onClick={() => setIsOpen([false, !isOpen[1]])} />
                        {isOpen[1] &&<DateCalendar value={value.date_end} setValue={(e) => setValue({...value, date_end: e + ''})} />}
                    </div>
                </div>
                <div className={style.btn__container}>
                    <button className={`${style.dateBtn}`}>Найти билеты</button>
                </div>
            </form>
        </div>
       
    </section >
}         