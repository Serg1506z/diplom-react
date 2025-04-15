import style from './HomeSlider.module.css'
import { useState } from 'react'

export default function HomeSlider({slides}) {
    const [stage, setStage] = useState(0)
    const paginations = Array.from({length: Math.ceil(slides.length / 2)}, (_, index) => index)

    return <div className={style.slider}>
        <div className={style.sliderContainer} style={{transform: `translateX(-${stage * 100}%)`}}>
            {slides.map((slide, index) => {
                return <div key={index} className={style.slide} >
                    <img className={style.slideImg} src={slide.img} alt="" />
                    <div className={style.slideTextContainer}>
                        <h2 className={style.slideTitle}>{slide.name}</h2>
                        <p className={style.slideText}>{slide.text}</p>
                    </div>
                </div>
            })}
        </div>
        <div className={style.paginationContainer}>
            {paginations.map((_, index) => {
                return <div key={index} onClick={() => setStage(index)} className={`${style.paginationItem} ${index === stage ? style.active : ''}`}></div>
            })}
        </div>
    </div>
}