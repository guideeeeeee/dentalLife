import "./Boxpatient.css";

function BoxPatient(props) {
  const { dataPatient } = props;
  return (
    <div className="BoxPatient">
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
        <button className="edit" style={{ cursor: "pointer" }}>
          <center>Edit Profile</center>
        </button>{" "}
        {/*ใส่ฟังชั่นทีหลัง*/}
      </div>
    </div>
  );
}

export default BoxPatient;
