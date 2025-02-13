import { useEffect, useRef, useState } from "react"
import style from "./Rangeprice.module.css"

export default function Rangeprice() {

    const [isToggle, setIsToggle] = useState({ boo: false, toggle: null })
    const ref = useRef()
    const rangePriceRef = useRef()
    // const [toggler1, setToggler]
    let toggler1 = null
    let toggler2 = null

    useEffect(() => {
        window.addEventListener('mouseup', () => {
            setIsToggle({ boo: false, toggle: null })
        })
    }, [])

    function handle (e) {
        if (!isToggle.boo) return
        if(isToggle.toggle === 1) {
            toggler1 = e.clientX - 300
        } else {
            toggler2 = (e.clientX - 578) * -1
        }

        handleMove(e)
    }

    function handleMove(e) {
       
        const containerWidth = rangePriceRef.current.clientWidth
        console.log(toggler1);
        console.log(toggler2);
        
        

        if (isToggle.toggle === 1 && e.clientX > 300 && e.clientX < 550) {
            // const left = e.clientX - 300  
            if (containerWidth - 10 > 38) {
                ref.current.style.left = toggler1 + 'px'
                  ref.current.style.right = toggler2 + 'px'
            }
        } else if (isToggle.toggle === 2 && e.clientX > 290 && ref.current.clientWidth > 48) {
            // const right = (e.clientX - 578) * -1
            ref.current.style.right = toggler2 + 'px'
            ref.current.style.left = toggler1 + 'px'
        }
    }

    return <div className={style.Rangeprice}>
        <div className={style.rangePriceTitle}>
            <span className={style.spanTitle}>от</span>
            <span className={style.spanTitle}>до</span>
        </div>
        <div ref={rangePriceRef} className={style.rangepriceContainer} onMouseMove={handle}>
            <div ref={ref} className={style.rangePrice}>
                <div className={`${style.toggler1} ${style.toggle}`} onMouseDown={() => setIsToggle({ boo: true, toggle: 1 })}></div>
                <div className={`${style.toggler2} ${style.toggle}`} onMouseDown={() => setIsToggle({ boo: true, toggle: 2 })} ></div>
            </div>
        </div>
        <div className={style.rangePriceValue}>
            <span className={style.spanValue}>1920</span>
            <span className={style.spanValue}>7000</span>
        </div>
    </div>
}