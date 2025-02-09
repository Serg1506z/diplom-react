import { useEffect, useRef, useState } from "react"
import style from "./Rangeprice.module.css"

export default function Rangeprice (){

    const [isToggle, setIsToggle] = useState({boo : false, toggle: null})
    const ref = useRef()
    const rangePriceRef = useRef()

    console.log(isToggle);
    useEffect(() => {
        window.addEventListener('mouseup', () => {
            setIsToggle({boo : false, toggle: null})
        })
    }, [])

    function handleMove(e){
        if(!isToggle.boo) return
        const containerWidth = rangePriceRef.current.clientWidth
        const right = (e.clientX - 578) * -1
        const left = e.clientX - 300
        
        if(isToggle.toggle === 1 && e.clientX > 300 && e.clientX < 550){
            // const left = e.clientX - 300  
            if(containerWidth - 10 > 38){
                ref.current.style.left  = left + 'px'
            }
        } else if(isToggle.toggle === 2 && e.clientX > 290 && ref.current.clientWidth > 48){
            // const right = (e.clientX - 578) * -1
            ref.current.style.right  = right + 'px'
        }
    }
    
    return <div ref={rangePriceRef} className={style.rangepriceContainer} onMouseMove={handleMove}>
        <div ref={ref} className={style.rangePrice}>
            <div className={`${style.toggler1} ${style.toggle}`} onMouseDown={() => setIsToggle({boo : true, toggle: 1})}></div>
            <div className={`${style.toggler2} ${style.toggle}`} onMouseDown={() => setIsToggle({boo : true, toggle: 2})} ></div>
        </div>
    </div>
}