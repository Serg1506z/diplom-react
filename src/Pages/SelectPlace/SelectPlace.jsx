import Header from '../../Components/Header/Header'
import style from './SelectPlace.module.css'
import Footer from '../../Components/Footer/Footer'
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import Settings from "../../Components/Settings/Settings"
import LastTicket from "../../Components/LastTicket/LastTicket"
import PlaceCard from '../../Components/PlaceCard/PlaceCard'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import { useNavigate, useParams } from 'react-router-dom'
import { getSeatsThunk } from '../../Redux/Slices/Seats/thunks'
import { setFilterSettings, setCurrentSeats } from '../../Redux/Slices/Seats'


export default function SelectPlace() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const seats = useSelector(state => state.seats.seats)
    const routes = useSelector(state => state.route.routes)
    const value = useSelector(state => state.seats.filterSettings)
    const [currentRoute, setCurrentRoute] = useState({})
    const [userCurrentSeats, setUserCurrentSeats] = useState({ currentRoute: currentRoute, coach: {}, seats: []})

    console.log(userCurrentSeats);
    
    useEffect(() => {
        if (!routes.length) return
        setCurrentRoute(routes.find(route => route.departure._id == id))
    }, [routes])

    useEffect(() => {
        if (!currentRoute?.departure?._id) return
        dispatch(setFilterSettings({...value, id : currentRoute.departure._id}))
        setUserCurrentSeats({...userCurrentSeats, currentRoute})
    }, [currentRoute])

    useEffect(() => {
        if(!value.id) return
        dispatch(getSeatsThunk(value))
    }, [value])

    function handleSubmit (e) {
        e.preventDefault()    
        dispatch(getRoutesThunk({...value,}))
    }

    function handleClick (e) {  
        dispatch(setCurrentSeats(userCurrentSeats))
        navigate('/passengers')
    }

    return <div className={style.SelectPlace}>
        <Header />
        <main className={style.mainContainer}>
            <SectionFindTicket value={value} handleSubmit={handleSubmit} />
            <ProgressBar />
            <section className={style.middleSection}>
                <div className={style.leftColumn}>
                    <Settings />
                    <div className={style.lastTicket}>
                        <h2 className={style.ticketsTitle}>последние билеты</h2>
                        <LastTicket />
                    </div>
                </div> 
                <div className={style.rightColumn}>
                    <h2 className={style.placeCardTitle}>Выбор мест</h2>
                    <div className={style.scrollContainer}>
                        {seats.map((item, index) => {
                            return <PlaceCard key={index} setUserCurrentSeats={(elem) => setUserCurrentSeats({...userCurrentSeats,coach : item.coach, seats: elem.seats})} currentRoute={currentRoute} seats={item} />
                        })}
                    </div>
                    <button onClick={handleClick} disabled={userCurrentSeats.seats.length === 0 || !userCurrentSeats.coach} className={style.nextBtn}>Далее</button>
                </div>
                
            </section>
        </main>
        <Footer />
    </div>
}