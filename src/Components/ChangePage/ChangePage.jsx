import style from "./ChangePage.module.css"

export default function ChangePage() {
    return <div class={style.changePage}>
        <button class={`${style.pageBtn} ${style.btnBack}`}></button>
        <button class={`${style.pageBtn} ${style.page1}`}></button>
        <button class={`${style.pageBtn} ${style.page2}`}></button>
        <button class={`${style.pageBtn} ${style.page3}`}></button>
        <button class={`${style.pageBtn} ${style.btnForward}`}></button>
    </div>
}
