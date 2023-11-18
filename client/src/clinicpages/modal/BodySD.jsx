import React, { useState } from "react";
import axios from "axios";
import { getuuid } from "../../../service/authorize";
function BodySD({treat,doc}) {

    //TREATMENT DATA
    const [selectedTreatment, setselectedTreatment] = useState(null);
    const [treatmentActive, settreatmentActive] = useState(false);
    const [Treatment, setTreatment] = useState([]);
    const toggleDropdownS1 = async() => {
        try {
            const response = await axios.get("http://localhost:3001/api/craft");
            setTreatment(response.data);
            console.log(Treatment)
            settreatmentActive(!treatmentActive);
            settreatmentActive(!treatmentActive);
        } catch (error) {
            console.error("Error toggling dropdown:", error);
        }
    };
    const handleOptionClickS1 = (Treatment) => {
        setselectedTreatment(Treatment);
        settreatmentActive(false);
        treat(Treatment);
    };


    //DOCTOR DATA
    const [SelectedDoctor, setSelectedDoctor] = useState(null);
    const [doctorActive, setdoctorActive] = useState(false);
    const [doctor, setdoc] = useState([])
    const clinicidd = getuuid();
    const DoctortoggleDropdown = async() => {
        console.log(clinicidd)
        try {
            const response = await axios.post("http://localhost:3001/api/dataDent",{clinicID:clinicidd});// iddoc 
            setdoctorActive(!doctorActive);
            setdoc(response.data)
            setdoctorActive(!doctorActive);
        } catch (error) {
            console.error("Error toggling dropdown:", error);
        }
    };
    const DoctorHandleOption = (doctor,id) => {
        setSelectedDoctor(doctor);
        setdoctorActive(false);
        doc(id);
    };



    return (
        <div className="body">

            {/* Treatment */}
            <h5 style={{ lineHeight: "2", textAlign: "left", color: "#A0C49D" }}>
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




            {/* doctor */}
            <h5 style={{ lineHeight: "2", textAlign: "left", color: "#A0C49D" }}>
                Dentist Name
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
        </div>
    );
}

export default BodySD;
