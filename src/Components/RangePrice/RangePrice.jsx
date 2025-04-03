import { useEffect, useRef, useState } from "react"
import style from "./Rangeprice.module.css"

export default function Rangeprice({min = 1900, max = 7000, setValue}) {
    const [minPrice, setMinPrice] = useState(min);
    const [maxPrice, setMaxPrice] = useState(max);
    const [sliderTrack, setSliderTrack] = useState(null);
    const minGap = 0
    const [timeout1, setT1] = useState(null)
    const [timeout2, setT2] = useState(null)


    console.log(timeout1);
    
    useEffect(() => {
        clearTimeout(timeout1)
        if (maxPrice - minPrice <= minGap) {
            setMinPrice(maxPrice - minGap)
        }
        setT1(setTimeout(() => setValue({min: minPrice, max: maxPrice}), 1000))
        fillColor()
    }, [minPrice])

    useEffect(() => {
        clearTimeout(timeout2)
        if (maxPrice - minPrice <= minGap) {
            setMaxPrice(+minPrice + minGap)
        }
        setT2(setTimeout(() => setValue({min: minPrice, max: maxPrice}), 1000))
        fillColor()
    }, [maxPrice])
    
    function handleMinChange(e) {
        setMinPrice(e.target.value);
    }

    function handleMaxChange(e) {
        setMaxPrice(e.target.value);

    }


    function fillColor() {
        const percent1 = (minPrice - min) / max * 100;
        const percent2 = (maxPrice) / max * 100;
        // setSliderTrack(`linear-gradient(to right, #dadae5 ${percent1}% , rgba(255, 168, 0, 1) ${percent1}% ,rgba(255, 168, 0, 1) ${percent2}%, #dadae5 ${percent2}%)`)
    }
 
    return <div className={style.Rangeprice}>
        <div className={style.rangePriceTitle}>
            <span className={style.spanTitle}>от</span>
            <span className={style.spanTitle}>до</span>
        </div>
        <div  className={style.rangepriceContainer} >
            <div  className={style.rangePrice} style={{ background: sliderTrack }}>
                <input type="range" min={min} max={max} value={minPrice} onInput={handleMinChange} style={{ width: '100%', }}/>
                <input type="range" min={min} max={max} value={maxPrice} onInput={handleMaxChange} style={{ width: '100%', }}/>
            </div>
        </div>
        <div className={style.rangePriceValue}>
            <span className={style.spanValue}>{minPrice}</span>
            <span className={style.spanValue}>{maxPrice}</span>
        </div>
    </div>
}