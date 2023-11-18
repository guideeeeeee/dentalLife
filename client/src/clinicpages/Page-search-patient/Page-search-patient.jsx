import React,{useState} from 'react';
import './Page-search-patient.css';
import Boxpatient from './Boxpatient';
import dataPatients from './dataPatients';
import Null from './Null.jsx';
import Buttonchange from './Buttonchange';
import Tabbarclinic from '../Tabbarclinic/Tabbarclinic.jsx';



function Pagesearchpa() {
  const [searchText, setSearchText] = useState('');

  const filterpatient = dataPatients.filter((dataPatient) => {
    return dataPatient.dataname.includes(searchText)
  });
  
  const dataPatientsElements = filterpatient.map((dataPatient,index) => {
    return <Boxpatient key={index} dataPatient={dataPatient}/>
  });

  return (
    <div className='Pagesearchpa'>
      <Tabbarclinic/>
      <Buttonchange/>
    
      <center>
      <div className='app-search'>
        <input
          className="app-search-input"
          type="text"
          placeholder="    search patient"
          value = {searchText}
          onChange={(event) => {setSearchText(event.target.value)}}
        />
        <img className='imgsearch' src='imagp\searchyellow.png'/>
        <button style={{ cursor: 'pointer' }}><img className='imgsearch'src='imagdentis\image 7.png'/></button>{/*ปุ่มกรอง*/ }
      </div>
      </center>
      
      <div className='app-grid'>
        {dataPatientsElements} {/*เรียกใช้ข้อมูลจากอาเรย์*/}
        <Null/>
      </div>

      

    </div>
  );
}

export default Pagesearchpa;
