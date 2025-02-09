import style from "./PassDataForm.module.css"
import RadioButton from "../RadioButton/RadioButton"
import Initials from "../Initials/Initials"

export default function PassengerDataForm() {
    return <form className={style.PassengerDataForm}>
        <select className={style.passportDataAge}>
            <option value="">Взрослый</option>
            <option value="">Детский</option>
        </select>
        <Initials/>
        <div className={style.genderBirthay}>
            <RadioButton />
            <div className={style.birthday}>
                <p className={style.birthdayTitle}>Дата рождения</p>
                <input id="birthday" type="text" className={style.birthdayInput} placeholder="ДД/ММ/ГГ" />
            </div>
        </div>
            <div className={style.checkBox}>
                <input type="checkbox" className={style.checkBoxInput} />
                <p className={style.checkBoxText}>ограниченная подвижность</p>
            </div>
        <div className={style.passportData}>
            <div className={style.passportDataField}>
                <label className={style.passportDataLabel}>Тип документа</label>
                <select className={style.PassengerDataSelect}>
                    <option className={style.passportDataOption}>Паспорт</option>
                    <option className={style.passportDataOption}>Сведетельство о рождении</option>
                </select>
            </div>
            <div className={style.passportDataField}>
                <label className={style.passportDataLabel}>Серия</label>
                <input type="text" className={style.passportDatainput} placeholder=" ___  ___  ___  ___" />
            </div>
            <div className={style.passportDataField}>
                <label className={style.passportDataLabel}>Номер</label>
                <input type="text" className={style.passportDatainput} placeholder="  ____  ____  ____  ____  ____  ____" />
            </div>
        </div>
        <button className={style.PassengerDataFormBtn}>Следующий пассажир</button>
    </form>
}