import style from "./CarLayoutReserved.module.css"


export default function CarLayoutReserved ({seats, setCurrentSeats, currentSeats}){

    function handleClick (item) {
        if(!item.available) return
        if(currentSeats.some(elem => elem.index === item.index)) {
            return setCurrentSeats(currentSeats.filter(elem => elem.index !== item.index))
        } else {
            setCurrentSeats([...currentSeats, item])
        }
    }

    return <div className={style.carlayout}>
        <div className={style.roomContainer}>
            {seats.filter((_, index) => index <= seats.length / 3 * 2).map((item, index) => {
                return index % 4 === 0 && index + 3 < seats.length
                    ? <div className={style.room} key={index}>
                        <div className={style.plaseContainer}>
                            <div onClick={() => handleClick(seats[index + 1])} className={`${style.plase} ${currentSeats.some(elem => elem.index === seats[index + 1]?.index) && style.active} ${seats[index + 1]?.available && style.available}`}>{seats[index + 1]?.index}</div>
                            <div onClick={() => handleClick(seats[index])} className={`${style.plase} ${currentSeats.some(elem => elem.index === seats[index]?.index) && style.active} ${seats[index]?.available && style.available}`}>{seats[index]?.index}</div>
                        </div>
                        <div className={style.plaseContainer}>
                            <div onClick={() => handleClick(seats[index + 3])} className={`${style.plase} ${currentSeats.some(elem => elem.index === seats[index + 3]?.index) && style.active} ${seats[index + 3]?.available && style.available}`}>{seats[index + 3]?.index}</div>
                            <div onClick={() => handleClick(seats[index + 2])} className={`${style.plase} ${currentSeats.some(elem => elem.index === seats[index + 2]?.index) && style.active} ${seats[index + 2]?.available && style.available}`}>{seats[index + 2]?.index}</div>
                        </div>
                    </div>
                    : null
            })}
        </div>
        <div className={style.sideSeats}>
           {seats.filter((_, index) => index > seats.length / 3 * 2).map((_, index, arr) => {
                return index % 2 === 0 && index + 1 < seats.length 
                ? <div className={style.sideSeatsRoom} key={index}>
                    <div onClick={() => handleClick(seats[index])} className={`${style.sideSeatsPlase} ${currentSeats.some(elem => elem.index === seats[index]?.index) && style.active} ${seats[index]?.available && style.available}`}>{arr[index]?.index}</div>
                    <div onClick={() => handleClick(seats[index + 1])} className={`${style.sideSeatsPlase} ${currentSeats.some(elem => elem.index === seats[index + 1]?.index) && style.active} ${seats[index + 1]?.available && style.available}`}>{arr[index + 1]?.index}</div>
                </div>
                : null
           })}
    </div>
</div>
}