import style from "./App.module.css"
import { Routes, Route } from "react-router";
import Home from "../../Pages/Home/Home";
import SelectTrain from "../../Pages/SelectTrain/SelectTrain";
import Passengers from "../../Pages/Passengers/Passengers";
import Payment from "../../Pages/Payment/Payment";
import Modal from "../../Pages/Modal/Modal";
import OrderConfirmation from "../../Pages/OrderСonfirmation/OrderСonfirmation";
import SelectPlace from "../../Pages/SelectPlace/SelectPlace";

function App() {
  return <div className={style.App} >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/selectTrain" element={<SelectTrain/>}/>
      <Route path="/passengers" element={<Passengers/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Modal" element={<Modal/>}/>
      <Route path="/OrderConfirmation" element={<OrderConfirmation/>}/>
      <Route path="/selectPlace/:id" element={<SelectPlace/>}/>
    </Routes>
  </div>
}

export default App;
