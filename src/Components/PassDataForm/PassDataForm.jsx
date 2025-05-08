import style from "./PassDataForm.module.css"
import RadioButton from "../RadioButton/RadioButton"
import Initials from "../Initials/Initials"
import { useEffect, useState } from "react"

export default function PassengerDataForm({data, setData, index, setIsDisabled}) {
    const [valuePass, setValuePass] = useState(['', ''])
    const [valid, setValid] = useState({errMessage: '', err: false, accept: false})
    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        patronymic: '',
        is_adult: true,
        gender: true,
        birthday: '',
        document_type: 'паспорт',
        document_data: ''
    })

    useEffect(() => {
        if(data.length > 0){
            setValue(data[index] ? data[index] : {
                first_name: '',
                last_name: '',
                patronymic: '',
                is_adult: true,
                gender: true,
                birthday: '',
                document_type: 'паспорт',
                document_data: ''
            })
        }
    }, [data])

    useEffect(() => {
        setValue({...value, document_data: valuePass.join(' ')})
    }, [valuePass])

    console.log(value);
    

    function handleSubmit (e) {
        e.preventDefault()
        const validity = Object.values(value).filter(item => item === '' || item === undefined)
        if(validity.length){
            setValid({errMessage: 'Ошибка при заполнении формы', err: true, accept: false})
            setIsDisabled((prev) => prev.map((item, i) => {
               return i === index ? true : item
            }))
            return
        } else {
            setValid({errMessage: '', err: false, accept: true})
            setIsDisabled((prev) => prev.map((item, i) => {
                return i === index ? false : item
            }))
        }
        console.log(data);
        console.log(index);
        const res = data.slice()
        
        res.splice(index, 1, value)
        setData(res)
       
    }
    
    console.log(value);
    
    
    
    return <form className={style.PassengerDataForm} onSubmit={handleSubmit}>
        <select className={style.passportDataAge} value={value.is_adult} onChange={(e) => setValue({...value, is_adult: e.target.value})} >
            <option value={true}>Взрослый</option>
            <option value={false}>Детский</option>
        </select>
        <Initials value={value} setValue={setValue}/>
        <div className={style.genderBirthay}>
            <RadioButton value={value} setValue={setValue} />
            <div className={style.birthday}>
                <p className={style.birthdayTitle}>Дата рождения</p>
                <input id="birthday" type="date" className={style.birthdayInput} placeholder="ДД/ММ/ГГ" onChange={(e) => setValue({...value, birthday: e.target.value})} />
            </div>
        </div>
            <div className={style.checkBox}>
                <input type="checkbox" className={style.checkBoxInput} />
                <p className={style.checkBoxText}>ограниченная подвижность</p>
            </div>
        <div className={style.passportData}>
            <div className={style.passportDataField}>
                <label className={style.passportDataLabel}>Тип документа</label>
                <select className={style.PassengerDataSelect} value={value.document_type} style={{minWidth: value.document_type === 'паспорт' ? 205 : 300}} onChange={ (e) => setValue({...value, document_type: e.target.value, document_data: ''})}>
                    <option value={'паспорт'} className={style.passportDataOption}>Паспорт</option>
                    <option value={'Свидетельство о рождении'} className={style.passportDataOption}>Сведетельство о рождении</option>
                </select>
            </div>
           {value.document_type === 'паспорт' ? 
            <div className={style.flex}>
                <div className={style.passportDataField}>
                    <label className={style.passportDataLabel}>Серия</label>
                    <input type="text" maxLength={4} value={valuePass[0]} onInput={(e) => setValuePass([e.target.value, valuePass[1]])} className={style.passportDatainput} placeholder=" ___  ___  ___  ___" />
                </div>
                <div className={style.passportDataField}>
                    <label className={style.passportDataLabel}>Номер</label>
                    <input type="text" maxLength={6} value={valuePass[1]} onInput={(e) => setValuePass([valuePass[0], e.target.value ])} className={style.passportDatainput} placeholder="  ____  ____  ____  ____  ____  ____" />
                </div> 
            </div>
            : <div className={style.passportDataField}>
                <label className={style.passportDataLabel}>Номер</label>
                <input type="text" onInput={(e) => setValue({...value, document_data: e.target.value})} className={style.passportDatainput} placeholder="" />
            </div> }
        </div>
        <div className={`${style.background}`} style={{backgroundColor: valid.accept ? 'green' : valid.err ? 'red' : 'transparent'}}>
            {valid.accept ? <p>Готово</p> : null}
            <p>{valid.errMessage}</p>
            <button className={style.PassengerDataFormBtn}>Следующий пассажир</button>
        </div>
    </form>
}