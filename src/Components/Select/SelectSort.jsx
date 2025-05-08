import style from "./Select.module.css"
import {useCallback, useEffect, useState} from "react"

export const SelectSort = ({options, value, setValue, label}) => {

    const [open, setOpen] = useState(false)

    function handleClick (option) {
        setValue(option)
        setOpen(false)
    }

    return (
        <div className={style.select}>
            <span className={style.toggle} onClick={() => setOpen(!open)}>
                {label} 
                <div className={style.value__name}>{value?.name}</div>
            </span>
            {open && (
                <ul className={style.options}>
                    {options.map((option, index) => (
                        <div key={index}  onClick={() => handleClick(option)} className={style.option}>
                            {option.name}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}
