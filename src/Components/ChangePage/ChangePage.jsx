import style from "./ChangePage.module.css"
import { useState } from "react"

export default function ChangePage({routesCount, stateLimit, setPage}) {

    const [statePage, setStatePage] = useState(1)
    const pages = Math.ceil(routesCount / stateLimit)

    function handleClickPage (index) {
        setPage(index - 1)
        setStatePage(index)
    }

    return <div className={style.changePage}>
        <button onClick={() => handleClickPage(statePage === 1 ? 1 : statePage - 1)} className={`${style.pageBtn} ${style.btnBack}`}></button>
        {pages > 3 &&  statePage > 3 && <button onClick={() => handleClickPage(1)} className={`${style.pageBtn}  ${statePage === 1 && style.active}`}>1</button>}
        {pages > 3 &&  statePage > 3 && <button className={`${style.pageBtn} ${style.btnDots}`}>...</button>}
        {pages <= 3 && Array.from({length: Math.ceil(routesCount / stateLimit)}).map((item, index) => {
           return <button onClick={() => handleClickPage(index + 1)} className={`${style.pageBtn} ${statePage === index + 1 && style.active}`}>{index + 1}</button>
        })}
        {pages > 3 && [...Array.from({length: Math.ceil(routesCount / stateLimit)}, (_, index) => index + 1)]
        .map((item, index) => {
           return <button onClick={() => handleClickPage(index + 1)} className={`${style.pageBtn} ${statePage === index + 1 && style.active}`}>{index + 1}</button>
        }).slice(statePage === 1 ? 0 : statePage - 2, statePage === 1 ? statePage + 2 : statePage + 1)}
        {pages > 3 && pages - statePage > 1 && <button className={`${style.pageBtn} ${style.btnDots}`}>...</button>}
        {pages > 3 && pages - statePage > 1 && <button onClick={() => handleClickPage(pages - 1)} className={`${style.pageBtn}  ${statePage === pages - 1 && style.active}`}>{pages}</button>}
        <button onClick={() => handleClickPage(statePage === pages ? statePage : statePage + 1)} className={`${style.pageBtn} ${style.btnForward}`}></button>
    </div>
}
