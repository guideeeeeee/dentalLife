import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import Axios
import './Page-search-patient.css';
import Boxpatient from './Boxpatient';
import Null from './Null.jsx';
import Buttonchange from './Buttonchange';
import Tabbarclinic from '../Tabbarclinic/Tabbarclinic.jsx';
import { getClinicuuid } from '../../../service/authorize.jsx';

function Pagesearchpa() {
  const [searchText, setSearchText] = useState('');
  const [patientData, setPatientData] = useState([]); // Use a different name for patient data state
  const clinicuuid = getClinicuuid();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/clientbookinghistory", { clinicuuid: clinicuuid, status: "Not Complete" });
        const fetchdata = res.data.map((res) => ({
          imgpatient: '',
          dataname: res.fname + res.lname,
          dataAN: res.uuid,
          Tel: res.tel,
          dataAD:  new Date(res.date).toLocaleDateString('en-CA'),
          datatime: res.time,
          dataRFA: res.craft,
          dataprice: res.price
        }));
        console.log(fetchdata);
        setPatientData(fetchdata);
      } catch (error) {
        console.error("Cannot fetch data:", error);
      }
    };

    fetchData();
  }, [clinicuuid]);

  const filterpatient = patientData.filter((dataPatient) => {
    return dataPatient.dataname.includes(searchText);
  });

  const dataPatientsElements = filterpatient.map((dataPatient, index) => {
    return <Boxpatient key={index} dataPatient={dataPatient} />;
  });

  return (
    <div className='Pagesearchpa'>
      <Tabbarclinic />
      <Buttonchange />

      <center>
        <div className='app-search'>
          <input
            className="app-search-input"
            type="text"
            placeholder="    search patient"
            value={searchText}
            onChange={(event) => { setSearchText(event.target.value) }}
          />
          <img className='imgsearch' src='imagp\searchyellow.png' alt='search-icon' />
          <button style={{ cursor: 'pointer' }}><img className='imgsearch' src='imagdentis\image 7.png' alt='filter-icon' /></button>{/*ปุ่มกรอง*/}
        </div>
      </center>

      <div className='app-grid'>
        {dataPatientsElements} {/*เรียกใช้ข้อมูลจากอาเรย์*/}
        <Null />
      </div>
    </div>
  );
}

export default Pagesearchpa;
