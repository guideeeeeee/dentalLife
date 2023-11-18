import "./Sclinic.css";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addClinic, AddStatus, Addid } from "../../store/slices/BookingSlice";

import Axios from "axios";
import { setClinic } from "../../store/slices/ClinicSlice";

function Sclinic({ handleContinueClick }) {
    const dispatch = useDispatch();
    const clinic = useSelector((state) => state.Clinic.clinic);
    const [selectedOption, setSelectedOption] = useState(useSelector((state) => state.Booking.selecClinic));
    const [isActive, setIsActive] = useState(false);
    const nextactivate = (state) => {
        if (state === null) { return true }
        else {
            return false
        }
    }
    const toggleDropdown = async () => {
        try {
            const response = await Axios.post("http://localhost:3001/api/clinic");
            dispatch(setClinic(response.data));
            setIsActive(!isActive);
        } catch (error) {
            console.error("Error toggling dropdown:", error);
        }
    };

    const handleOptionClick = (option,id) => {
        setSelectedOption(option);
        setIsActive(false);
        dispatch(addClinic(option))
        dispatch(AddStatus("Not Complete"));
        dispatch(Addid(id));
    };
    return (
        <div>
            <div className="body">
                <p style={{ lineHeight: "1", fontSize: "13px" }}>
                    Please select the clinic you want at the branch you are convenient to
                    travel to
                </p>
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Clinic
                </h5>
                <div
                    className={`dropdown ${isActive ? "active" : ""}`}
                    onClick={toggleDropdown}
                >
                    <div className="select">
                        {selectedOption || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {clinic.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option.NameOfClinic,option.ID_Clinic)}
                                className={selectedOption === option.NameOfClinic ? "selected" : ""}
                            >
                                {option.NameOfClinic}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <button style={{ backgroundColor: "#FFD89C" }} id="continueBtn" onClick={handleContinueClick} disabled={nextactivate(selectedOption)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Sclinic;
