import React, { useState } from "react";
import "./Sclinic.css";
import { useSelector, useDispatch } from 'react-redux'
import { AddTreat, AddDoc } from "../../store/slices/BookingSlice";
import axios from "axios"
function SclinicP2({ handleContinueClick, handleBackClick }) {
    const dispatch = useDispatch();
    const [selectedTreatment, setselectedTreatment] = useState(useSelector((state) => state.Booking.selecTreat));
    const [treatmentActive, settreatmentActive] = useState(false);
    const [Treatment, setTreatment] = useState([]);
    const toggleDropdownS1 = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/craft");
            setTreatment(response.data);
            console.log(Treatment)
            settreatmentActive(!treatmentActive);
        } catch (error) {
            console.error("Error toggling dropdown:", error);
        }
    };
    const handleOptionClickS1 = (Treatment) => {
        setselectedTreatment(Treatment);
        settreatmentActive(false);
        dispatch(AddTreat(Treatment))
    };



    const [SelectedDoctor, setSelectedDoctor] = useState(useSelector((state) => state.Booking.selecDoc));
    const [doctorActive, setdoctorActive] = useState(false);
    const [doctor, setdoc] = useState([])
    const docid = useSelector((state)=> state.Booking.id)
    
    const DoctortoggleDropdown = async () => {
        console.log(docid)
        try {
            const response = await axios.post("http://localhost:3001/api/dataDent",{clinicID:docid});// iddoc 
            setdoc(response.data)
            setdoctorActive(!doctorActive);
        } catch (error) {
            console.error("Error toggling dropdown:", error);
        }
    };

    const DoctorHandleOption = (namedoc,id) => {
        setSelectedDoctor(namedoc);
        setdoctorActive(false);
        dispatch(AddDoc(id))
    };
    const nextactivate = (state, state2) => {
        if ((state2 && state) === null) { return true }
        else {
            return false
        }
    }
    return (
        <div>
            <div className="body">
                <p style={{ lineHeight: "1", fontSize: "13px" }}>
                    Please choose a treatment (If your desired treatment isn't listed,
                    please select 'Other Treatments' below)..
                </p>
                
                {/* doctor */}
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Your doctor
                </h5>
                <div
                    className={`dropdown ${doctorActive ? "active" : ""}`}
                    onClick={DoctortoggleDropdown}
                >
                    <div className="select">
                        {SelectedDoctor || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {doctor.map((doctor, index) => (
                            <li
                                key={index}
                                onClick={() => DoctorHandleOption(doctor.Firstname+" "+doctor.Lastname,doctor.ProfessionalLicenseNumber)}
                                className={SelectedDoctor === doctor.Firstname+" "+doctor.Lastname ? "selected" : ""}
                            >
                                {doctor.Firstname+" "+doctor.Lastname}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Treatment */}
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Treatment
                </h5>
                <div
                    className={`dropdown ${treatmentActive ? "active" : ""}`}
                    onClick={toggleDropdownS1}
                >
                    <div className="select">
                        {selectedTreatment || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {Treatment.map((Treatment, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClickS1(Treatment.nameOfcraft)}
                                className={selectedTreatment === Treatment.nameOfcraft ? "selected" : ""}
                            >
                                {Treatment.nameOfcraft}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <button style={{ backgroundColor: "#FFD89C" }} id="backBtn" onClick={handleBackClick} >
                    Back
                </button>
                <button style={{ backgroundColor: "#FFD89C" }} id="continueBtn" onClick={handleContinueClick} disabled={nextactivate(SelectedDoctor, selectedTreatment)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default SclinicP2;
