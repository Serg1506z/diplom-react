import { useEffect, useState } from "react"
import style from "./CheckBox.module.css"

export default function CheckBoxToggle ({text, setValue, value}){
    const [active, setActive] = useState(value)

    useEffect(() => {
        setValue(active)
    }, [active])


    return <div className={style.container}>
        <p className={style.text}>{text}</p>
        <label className={`${active && style.block_active} ${style.block}`} onClick = {(e)=>setActive(!active)}>
            <div className={`${style.toggle} ${active && style.toggle_active}`}></div>
        </label>
        <input type="checkbox" className={style.checkBox} checked = {active} onInput={(e)=>setActive(!active)} />
    </div>
}

