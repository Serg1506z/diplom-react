import style from './Calendar.module.css'
import './Calendar.css'
import Calendar from 'react-calendar'

export default function DateCalendar ({value, setValue}) {
    return <div className={style.calendar__container}>
        <Calendar value={value} onChange={setValue} />
    </div>
}