import style from './ToggleSetting.module.css'
import CheckBoxToggle from '../CheckBox/CheckBoxToggle'


export default function ToggleSetting ({text, Icon, setValue, value}) {
    return <div className={style.optionItem}>
        <Icon />
        <div><CheckBoxToggle text={text} setValue={setValue} value={value}/></div>
    </div>

}