import style from "./RadioButton.module.css"

export default function RadioButton({value, setValue}) {


    return <div className={style.radioButton}>
        <p className={style.radioTitle}>Пол</p>
        <div className={style.radioBlock}>
            <label for="men" className={`${style.radioButtonLabel} ${style.radioMen} ${value.gender === true && style.active}`}>М</label>
            <input onChange={() => setValue({...value, gender : true})} type="radio"  id="men" name="gender" value={true} className={`${style.radioButtonInput} `} />
            <label for="women" className={`${style.radioButtonLabel}  ${style.radioWomen} ${value.gender === false && style.active}`}>Ж</label>
            <input onChange={() => setValue({...value, gender : false})} type="radio"  id="women" name="gender" value={false} className={`${style.radioButtonInput} `} />
        </div>
    </div>
}