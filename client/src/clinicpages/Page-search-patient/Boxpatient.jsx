import "./Boxpatient.css";
import ApModal from "../../ClientPages/modal/ApModal"
import Profile from "../../../public/images-tabbar/profile.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setClientUuid } from "../../store/slices/ClinicSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
function BoxPatient(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataPatient } = props;
  const [Modalstate, setModalstate] = useState(false);
  const [clientId,setID] = useState(null);
  const goView = () =>{
    dispatch(setClientUuid(dataPatient.dataAN));
    navigate("/viewProfile");
  }
  const handleEditButtonClick = () => {
    setID(dataPatient.dataAN);
    setModalstate(true);
  };
  const imgSource = dataPatient.imgpatient ? dataPatient.imgpatient : Profile ;
  console.log(dataPatient)
  const complete = () => {
    try {
      Swal.fire({
        title: "Complete",
        icon: "success"
      }).then(async (result) => {
        console.log(dataPatient.datatime);
            if (result.isConfirmed) {
                await axios.put("http://localhost:3001/api/complete", { date:dataPatient.dataAD, time: dataPatient.datatime ,uuid:dataPatient.dataAN})
                    .then((res) => {
                        if (res.data.status === "Cancel Complete") {
                            console.log("complete")
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!"
                            });
                        }
                    })
                .then((res) => location.reload());
            }
        })

    }
    catch (err) {
        console.error("Cannot cancel dentis")
    }
}

  return (
    <>
    
      {Modalstate && <ApModal setOpenModal={setModalstate} id={clientId} />}
    <div className="BoxPatient">
      <div className="box">
        <img className="imgpatient" src={imgSource} />
        <h5>
          <div className="dataname">{dataPatient.dataname}</div>
          <div className="dataAN">Number AN :{dataPatient.dataAN}</div>
          <div className="dataLA">Tel :{dataPatient.Tel}</div>
          <div className="dataLA">Status :{dataPatient.status}</div>
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
            <button className="edit" onClick={goView}>View</button>
            {dataPatient.status === "Not Complete"&&<button className="edit" onClick={complete}>Complete</button>}
        </div>{" "}
        {/*ใส่ฟังชั่นทีหลัง*/}
      </div>
    </div></>
  );
}

export default BoxPatient;