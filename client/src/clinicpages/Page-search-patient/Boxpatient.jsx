import "./Boxpatient.css";
import ApModal from "../../ClientPages/modal/ApModal"
import { useState } from "react";
function BoxPatient(props) {
  const { dataPatient } = props;
  const [Modalstate, setModalstate] = useState(false);
  const [clientId,setID] = useState(null);
  const handleEditButtonClick = (id) => {
    setID(id);
    setModalstate(true);
  };
  return (
    <div className="BoxPatient">
      {Modalstate && <ApModal setOpenModal={setModalstate} id={clientId} />}
      <div className="box">
        <img className="imgpatient" src={dataPatient.imgpatient} />
        <h5>
          <div className="dataname">{dataPatient.dataname}</div>
          <div className="dataAN">Number AN :{dataPatient.dataAn}</div>
          <div className="dataLA">last appointment :{dataPatient.dataLA}</div>
        </h5>
        <h6>
          <div className="dataAD">Appointment date :{dataPatient.dataAD}</div>
          <div className="datatime">time :{dataPatient.datatime}</div>
          <div className="dataRFA">
            Reason for appointment :{dataPatient.dataRFA}
          </div>
          <div className="dataprice">price :{dataPatient.dataprice}</div>
        </h6>
        <div className="edit" style={{ cursor: "pointer" }}>
            <button className="edit" onClick={handleEditButtonClick}>Booking</button>
            <button className="edit">View</button>
        </div>{" "}
        {/*ใส่ฟังชั่นทีหลัง*/}
      </div>
    </div>
  );
}

export default BoxPatient;