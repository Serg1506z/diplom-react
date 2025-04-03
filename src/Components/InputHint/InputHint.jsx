import { useEffect } from 'react'
import style from './InputHint.module.css'
import { api } from '../../Api'
import { useState } from 'react'

export default function InputHint ({setValue, value}) {
    const [options, setOptions] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [inpValue, setInpValue] = useState('')

    useEffect(() => {
        setInpValue(value.name)
    }, [value])

    useEffect(() => {
        if (!inpValue) {
            setOptions([])
        } else {
            setIsOpen(true)
            api.getCities(inpValue).then(res => setOptions(res))
        }
    }, [inpValue])

    useEffect(() => {
        if(options.length === 1 && inpValue === options[0].name){
            setIsOpen(false);
        }
        // eslint-disable-next-line
    }, [options])

    return  <>
        <input type="text" className={style.selectDate} placeholder="Откуда"  onInput={(e) => setInpValue( e.target.value )} value={inpValue}/>
        {isOpen && <div className={style.inputHint}>
            {options.length === 0 ? <div className={style.inputHintItem}>Ничего не найдено</div> :
            options.map((item, index) => {
                return <div key={index} onClick={() => {setValue(item); setIsOpen(false); setInpValue( item.name ) }} className={style.inputHintItem}>{item.name}</div>
            })}
        </div>}
    </>
}