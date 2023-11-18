import "./ApModal.css";
import React, { useState } from "react";
import Sclinic from "./SClinic.jsx";
import SclinicP2 from "./SClinicP2.jsx";
import SclinicP3 from "./SClinicP3.jsx";
import {useSelector } from 'react-redux';
import axios from "axios";
import { getuuid } from "../../../service/authorize.jsx";
function ApModal({ setOpenModal }) {
  const [currentStep, setCurrentStep] = useState(1);
  const selecClinic = useSelector((state) => state.Booking.id);
  const selecTreat = useSelector((state) => state.Booking.selecTreat);
  const selecDoc = useSelector((state) => state.Booking.selecDoc);
  const date = useSelector((state) => state.Booking.date);
  const time = useSelector((state) => state.Booking.time);
  const status = useSelector((state) => state.Booking.status);
  const userid = getuuid();
  const handleDone = async() => {
    console.log(userid)
    await axios.post("http://localhost:3001/api/booking",
      {
        idclinic: selecClinic,
        craft: selecTreat,
        name: selecDoc,
        date: date,
        time: time,
        status:status,
        userid:userid
      }
    ).then((response) => {
      console.log(response.data);
      if (response.data.status === "Booking Complete") {
        console.log("done")
        alert("Booking Complete");
        setOpenModal(false);
      } else {
        alert("Booking fail " + response.data.message);
      }
    })
      .catch((error) => {
        console.error("Error during Booking:", error);
      });

  }
  const handleContinueClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };



  const doneactive = (a, b) => {
    if ((a && b) === null) { return true }
    else {
      return false
    }
  };

  return (
    <div className="modalBackground ">
      <div
        className="oc-bg"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title client">
          <h1 style={{ color: "#FFA45B" }}>Book Appointment</h1>
        </div>
        {currentStep === 1 && <Sclinic handleContinueClick={handleContinueClick} />}
        {currentStep === 2 && <SclinicP2 handleContinueClick={handleContinueClick} handleBackClick={handleBackClick} />}
        {currentStep === 3 && <SclinicP3 />}
        <div className="footer">
          {currentStep === 3 && (
            <button style={{ backgroundColor: "#FFD89C" }} id="backBtn" onClick={handleBackClick}>
              Back
            </button>
          )}
          {currentStep === 3 && (
            <button style={{ backgroundColor: "#FFD89C" }} id="doneBtn" onClick={handleDone} disabled={doneactive(date, time)}>
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApModal;
