import CheckBoxToggle from "../CheckBox/CheckBoxToggle"
import style from "./Settings.module.css"

export default function Settings() {
    return <section class={style.setting}>
        <div class={style.settingDate}>
            <h2 class={style.dateTitle}>Дата поездки</h2>
            <input type="date" class={style.dateInput} />
            <h2 class={style.dateTitle}>Дата возвращения
            </h2>
            <input type="date" class={style.dateInput} />
        </div>
        <div class={style.asideLine}></div>
        <div class={style.settingOption}>
            <div class={style.optionItems}>
                <div class={style.optionItem}>
                    <div className={style.itemIcon1}></div>
                    <p className={style.itemText}>Купе</p>
                    <div><CheckBoxToggle /></div>
                </div>
                <div class={style.optionItem}>
                    <div className={style.itemIcon2}></div>
                    <p className={style.itemText}>Плацкарт </p>
                    <div><CheckBoxToggle /></div>
                </div>
                <div class={style.optionItem}>
                <div className={style.itemIcon3}></div>
                    <p className={style.itemText}>Сидячий</p>
                    <div><CheckBoxToggle /></div>
                </div>
                <div class={style.optionItem}>
                <div className={style.itemIcon4}></div>
                    <p className={style.itemText}>Люкс</p>
                    <div><CheckBoxToggle /></div>
                </div>
                <div class={style.optionItem}>
                <div className={style.itemIcon5}></div>
                    <p className={style.itemText}>Wi-Fi</p>
                    <div><CheckBoxToggle /></div>
                </div>
                <div class={style.optionItem}>
                <div className={style.itemIcon6}></div>
                    <p className={style.itemText}>Плацкарт</p>
                    <div><CheckBoxToggle /></div>
                </div>
            </div>
        </div>
        <div class={style.asideLine}></div>
        <div class={style.settingPrice}>
            <h2 class={style.priceTitle}>Стоимость </h2>
            <input type="range" class={style.inputPrice} min="1920" max="7000" />
        </div>
        <div class={style.asideLine}></div>
        <div class={style.settingSaid}>
            <button class={`${style.settingBtn} ${style.settingBtn_forward}`}></button>
            <p class={style.saidTitle}>Туда</p>
            <button class={style.settingBtn_add}></button>
        </div>
        <div class={style.asideLine}></div>
        <div class={style.settingSaid}>
            <button class={`${style.settingBtn} ${style.settingBtn_reverce}`}></button>
            <p class={style.saidTitle}>Обратно</p>
            <button class={style.settingBtn_add}></button>
        </div>
    </section>
}