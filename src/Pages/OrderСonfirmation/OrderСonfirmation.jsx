import style from "./OrderConfirmation.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import TripDetails from "../../Components/TripDetails/TripDetails"
import { useSelector, useDispatch } from "react-redux"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import { useState } from "react"
import TrainCard from "../../Components/TrainCards/TrainCard"
import CheckTrainCard from "../../Components/TrainCards/CheckTrainCard"
import { useNavigate } from "react-router-dom"
import { api } from "../../Api"

export default function OrderConfirmation() {
    const [stateLimit, setStateLimit] = useState(5)
    const [page, setPage] = useState(0)
    const value = useSelector(state => state.route.filterSettings)
    const currentSeats = useSelector(state => state.seats.currentSeats)
    const personalData = useSelector(state => state.tickets.personalData)
    const paymentData = useSelector(state => state.tickets.paymentData)
    const navigate = useNavigate()
    

    const dispatch = useDispatch()
    function handleSubmit (e) {
      e.preventDefault()    
      dispatch(getRoutesThunk({...value, limit : stateLimit, offset : page * stateLimit}))
    }

    async function handleClick() {
        const body = {
            "user": paymentData,
              "departure": {
                "route_direction_id": currentSeats.currentRoute.departure._id,
                "seats": personalData.map(item => {
                    return  {
                        "coach_id": currentSeats.coach._id,
                        "person_info": item,
                        "seat_number": currentSeats.seats.index,
                        "is_child": !item.is_adult,
                        "include_children_seat": false
                      }
                })
              }
        }     
        
        const res = await api.orderTicket(body)

       if(res.status){
            navigate('/Modal')
       }
        
    }

    
    return <div className={style.orderConfirmation}>
        <Header />
        <main className={style.mainContainer}>
            <SectionFindTicket value={value} handleSubmit={handleSubmit} />
            <ProgressBar num={4} />
            <section className={style.midlleSection}>
                <div className={style.leftColumn}>
                    <TripDetails currentSeats={currentSeats} />
                </div>
                <div className={style.rightColumn}>
                    <div className={style.passangers}>
                        <div className={style.passangersTitle}>Поезд</div>
                        <CheckTrainCard route={currentSeats.currentRoute} />
                    </div>
                    <div className={style.passangers}>
                        <div className={style.passangersTitle}>Пассажиры</div>
                        <div className={style.passangersContent}>
                            <div className={style.leftPassangerContentColumn}>
                                {personalData.map((item, index) => {
                                    const fullName = `${item.first_name} ${item.last_name} ${item.patronymic}`
                                    return <div key={index} className={style.passangerItem}>
                                    <div className={style.passangerItemIcon}>
                                        <div className={style.passangerIcon}></div>
                                        <div className={style.passangerIconSub}>{item.is_adult ? 'Взрослый' : 'Ребенок'}</div>
                                    </div>
                                    <div className={style.passangerItemDesc}>
                                        <div className={style.passangerInitial}>{fullName}</div>
                                        <div className={style.passangerGender}>Пол {item.gender ? 'мужской' : 'женский'}</div>
                                        <div className={style.passangerDate}>Дата рождения {item.birthday}</div>
                                        <div className={style.passangerDocument}>{item.document_type} {item.document_data}</div>
                                    </div>
                                </div>
                                })}
                            </div>
                            <div className={style.rightPaseangerContentColumn}>
                                <div className={style.total}>
                                    <div className={style.totalText}>Всего</div>
                                    <div className={style.totalSum}>
                                        <div className={style.totalSumNum}>{currentSeats.coach.price}</div>
                                        <div className={style.totalSumIcon}></div>
                                    </div>
                                </div>
                                <button className={style.rightPaseangerContentColumnbtn} onClick={() => navigate('/passengers')}>Изменить</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.paymentMethod}>
                        <div className={style.paymentMethodTitle}><span className={style.paymentMethodTitleText}>Способ оплаты</span></div>
                        <div className={style.paymentMethodFooter}>
                            <div className={style.paymentMethodFooterText}>{paymentData.payment === 'cash' ? 'Наличные' : 'Онлайн'}</div>
                            <button className={style.paymentMethodFooterBtn} onClick={() => navigate('/payment')}>Изменить</button>
                        </div>
                    </div>
                    <button className={style.rightColumnBtn} onClick={handleClick}>подтвердить</button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
}