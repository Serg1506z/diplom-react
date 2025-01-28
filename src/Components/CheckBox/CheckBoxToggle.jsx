import { useState } from "react"
import style from "./CheckBox.module.css"

export default function CheckBoxToggle ({text}){
    const [active, setActive] = useState(false)


    return <div className={style.container}>
        <p>{text}</p>
        <label className={`${active && style.block_active} ${style.block}`} onClick = {(e)=>setActive(!active)}>
            <div className={`${style.toggle} ${active && style.toggle_active}`}></div>
        </label>
        <input type="checkbox" className={style.checkBox} checked = {active} onInput={(e)=>setActive(!active)} />
    </div>
}

