import style from "./App.module.css"
import { Routes, Route } from "react-router";
import Home from "../../Pages/Home/Home";
import SelectTrain from "../../Pages/SelectTrain/SelectTrain";
import Passengers from "../../Pages/Passengers/Passengers";
import Payment from "../../Pages/Payment/Payment";


function App() {
  return <div className={style.App} >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/selectTrain" element={<SelectTrain/>}/>
      <Route path="/passengers" element={<Passengers/>}/>
      <Route path="/Payment" element={<Payment/>}/>
    </Routes>
  </div>
}

export default App;
