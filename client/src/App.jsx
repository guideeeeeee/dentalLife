import React, { useState } from "react"
import "./App.css"
import SDmodal from "./clinicpages/modal/SDmodal"
import StartPage from "./components/StartPage/StartPage";
//Component
function App() {
  const [clinicModal, setclinicModal] = useState(false)
  return (
    <div>
      
      {clinicModal && <SDmodal setOpenClinicModal= {setclinicModal}/>} 
      <StartPage/>
    </div>
  )
}
export default App