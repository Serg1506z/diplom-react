import style from "./Passengers.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TripDetails from "../../Components/TripDetails/TripDetails"
import PassDataForm from "../../Components/PassDataForm/PassDataForm"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import { setFilterSettings } from "../../Redux/Slices/Seats"
import { useNavigate } from "react-router-dom"
import { setPersonalData } from "../../Redux/Slices/Tickets"


export default function Passengers() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentSeats = useSelector(state => state.seats.currentSeats)
    const value = useSelector(state => state.seats.filterSettings)
    const personalData = useSelector(state => state.tickets.personalData)

    const [isDisabled, setIsDisabled] = useState([])

    function handleSubmit (e) {
        e.preventDefault()    
        dispatch(getRoutesThunk({...value,}))
    }

    useEffect(() => {
        setIsDisabled(currentSeats.seats.map(() => true))
    }, [currentSeats])
   
    function handlePersonal (item) {
        dispatch(setPersonalData(item))
    }


    return <div className={style.Passengers}>
        <Header />
        <section className={style.mainContainer}>
            <SectionFindTicket value={value} handleSubmit={handleSubmit} />
            <ProgressBar />
            <div className={style.middleSection}>
                <section className={style.leftSection}>
                    <TripDetails currentSeats={currentSeats}  />
                </section>
                <section className={style.rightSection}>
                    {
                        currentSeats?.seats.map((_, index) => {
                            return <PassDataForm setIsDisabled={setIsDisabled} index={index} data={personalData} setData={handlePersonal} key={index} />
                        })
                    }
                    <div className={style.addPassenger}>
                        <span className={style.addPassengerText}>Добавить пассажира</span>
                        <button className={style.addPassengerbtn}></button>
                    </div>
                    <button onClick={() => navigate('/Payment')} disabled={isDisabled.some((item) => item)} className={style.rightSectionBtn}>ДАЛЕЕ</button>
                </section>
            </div>
        </section>
        <Footer />
    </div>
}