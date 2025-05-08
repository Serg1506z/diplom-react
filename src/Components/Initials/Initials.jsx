import style from "./initials.module.css"

export default function Initials ({value, setValue}){



    return <div className={style.initials}>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Фамилия</label>
        <input type="text" name={'first_name'} value={value?.first_name} className={style.formFieldInput} onInput={(e) => setValue({...value, [e.target.name] : e.target.value})} />
    </div>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Имя</label>
        <input type="text" name={'last_name'} value={value?.last_name} className={style.formFieldInput} onInput={(e) => setValue({...value, [e.target.name] : e.target.value})} />
    </div>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Отчество</label>
        <input type="text" name={'patronymic'} value={value?.patronymic} className={style.formFieldInput} onInput={(e) => setValue({...value, [e.target.name] : e.target.value})} />
    </div>
</div>
}