import style from "./RadioButton.module.css"

export default function RadioButton() {
    return <div className={style.radioButton}>
        <p className={style.radioTitle}>Пол</p>
        <div className={style.radioBlock}>
            <label for="men" className={`${style.radioButtonLabel} ${style.radioMen}`}>М</label>
            <input type="radio" id="men" name="gender" value="men" className={style.radioButtonInput} />
            <label for="women" className={`${style.radioButtonLabel}  ${style.radioWomen}`}>Ж</label>
            <input type="radio" id="women" name="gender" value="women" className={style.radioButtonInput} />
        </div>
    </div>
}