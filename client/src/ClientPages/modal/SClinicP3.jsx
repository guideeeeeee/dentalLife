import "./SClinic.css";
import Calendar from "../../components/CalendarAP";


function SclinicP3(){
    return(
        <div className="body">
            <h5 style={{ lineHeight: "1", textAlign: "left", color: "#FFA45B" }}>
            Date and Time
            </h5>
            <p style={{ lineHeight: "1", fontSize: "13px" }}>
            Please choose a date and time below for your Video Consultation (FREE) treatment in order to proceed.
            </p>
            <Calendar />
        </div>
    )
}

export default SclinicP3;