import style from "./App.module.css"
import { Routes, Route } from "react-router";
import Home from "../../Pages/Home/Home";
import SelectTrain from "../../Pages/SelectTrain/SelectTrain";

function App() {
  return <div className={style.App} >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/selectTrain" element={<SelectTrain/>}/>
    </Routes>
  </div>
}

export default App;
