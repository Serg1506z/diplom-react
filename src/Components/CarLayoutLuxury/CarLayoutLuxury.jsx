import style from "./CarLayoutLuxury.module.css"


export default function CarLayoutLuxury ({seats, setCurrentSeats, currentSeats}){

    
    function handleClick (item) {
        if(!item.available) return
        if(currentSeats.some(elem => elem.index === item.index)) {
            return setCurrentSeats(currentSeats.filter(elem => elem.index !== item.index))
        } else {
            setCurrentSeats([...currentSeats, item])
        }
    }
    
    return <div className={style.carlayout}>
        {
            seats.map((item, index) => {
               return index % 2 === 0 
                ? <div className={style.room} key={index}>
                    <div className={style.plaseContainer}>
                        <div onClick={() => handleClick(item)} className={`${style.plase} ${currentSeats.some(elem => elem.index === item.index) && style.active} ${item.available && style.available}`}>{item.index}</div>
                    </div>
                    <div className={style.plaseContainer}>
                        <div onClick={() => handleClick(seats[index + 1])} className={`${style.plase} ${currentSeats.some(elem => elem.index === seats[index + 1]?.index) && style.active} ${seats[index + 1]?.available && style.available}`}>{seats[index + 1]?.index}</div>
                    </div>
                </div> : null
            })
        }
</div>
}