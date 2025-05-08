import style from "./SelectTrain.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import SectionFindTicket from "../../Components/SectionFindeTicket/SectionFindTicket"
import ProgressBar from "../../Components/ProgressBar/ProgressBar"
import TrainCard from "../../Components/TrainCards/TrainCard"
import Settings from "../../Components/Settings/Settings"
import ChangePage from "../../Components/ChangePage/ChangePage"
import LastTicket from "../../Components/LastTicket/LastTicket"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getRoutesThunk } from "../../Redux/Slices/Route/thunks"
import Preloader from "../../Components/Preloader/Preloader"
import { setIsLoading } from "../../Redux/Slices/Route"
import { SelectSort } from "../../Components/Select/SelectSort"

const options = [
  {name: 'времени', type : 'date'},
  {name: 'стоимости', type : 'price'},
  {name: 'длительности', type : 'duration'},

]

export default function SelectTrain() {
  const [stateLimit, setStateLimit] = useState(5)
  const [page, setPage] = useState(0)
  const [sortValue, setSortValue] = useState(null)
  const routes = useSelector(state => state.route.routes)
  const routesCount = useSelector(state => state.route.routesCount)
  const value = useSelector(state => state.route.filterSettings)
  const isLoading = useSelector(state => state.route.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!sortValue) return
    setIsLoading(true)
    dispatch(getRoutesThunk({...value, limit : stateLimit, offset : page * stateLimit, sort : sortValue?.type}))
    setTimeout(() => setIsLoading(false), 3000)
    // eslint-disable-next-line
  }, [stateLimit, page, sortValue])

  function handleSubmit (e) {
    e.preventDefault()    
    dispatch(getRoutesThunk({...value, limit : stateLimit, offset : page * stateLimit, sort : sortValue?.type}))
  }

  console.log(routes);
  
  
  
  return <div className={style.SelectTrain}>
    <Header />
    <main className={style.mainContainer}>
      <SectionFindTicket value={value} handleSubmit={handleSubmit}/>
      <ProgressBar num={1} />
      <div className={style.preloaderContainer}>
      <section className={style.middleSection}>
        {isLoading && <Preloader />}
        <div className={style.leftColumn}>
            <Settings />
          <div className={style.lastTicket}>
            <h2 className={style.ticketsTitle}>последние билеты</h2>
            <LastTicket />
          </div>
        </div>
        <div className={style.rightColumn}>
          <div className={style.sortTicket}>
            <div className={style.find}><p className={style.findeText}>найдено {routesCount} </p></div>
            <SelectSort options={options} label={'Сортировать по: '} value={sortValue} setValue={setSortValue} />
            <div className={style.view}><p className={style.viewText}>показывать по:  
              <span className={`${style.accept_limit} ${stateLimit === 5 && style.active}`} onClick={() => setStateLimit(5) }>5</span>
              <span className={`${style.accept_limit} ${stateLimit === 10 && style.active}`} onClick={() => setStateLimit(10)}>10</span>
              <span className={`${style.accept_limit} ${stateLimit === 20 && style.active}`} onClick={() => setStateLimit(20)}>20</span>
            </p></div>
          </div>
          <div className={style.trainCards}>
            {routes.map(route => {
              return <TrainCard key={route.id} route={route} />
            })}
          </div>
        </div>
      </section>
      <ChangePage routesCount={routesCount} stateLimit={stateLimit} setPage={(page) => setPage(page)} />
      </div>
    </main>
    <Footer />
  </div>
}