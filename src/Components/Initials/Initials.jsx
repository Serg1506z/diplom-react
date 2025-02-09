import style from "./initials.module.css"

export default function Initials (){
    return <div className={style.initials}>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Фамилия</label>
        <input type="text" className={style.formFieldInput} />
    </div>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Имя</label>
        <input type="text" className={style.formFieldInput} />
    </div>
    <div className={style.formField}>
        <label className={style.formFieldLabel}>Отчество</label>
        <input type="text" className={style.formFieldInput} />
    </div>
</div>
}