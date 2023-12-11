import React, { useState, useEffect } from 'react';
import './Page-search-docter.css';
import Null from './Null.jsx';
import Buttonchange from './Buttonchange.jsx';
import Boxdentis from './Boxdentis';
import Tabbarclinic from '../Tabbarclinic/Tabbarclinic.jsx';
// import fetchDataFromMySQL from './dataDent.jsx';
import axios from 'axios';
import { getClinicuuid } from '../../../service/authorize.jsx';
function PageserchDoc() {
  const [searchText, setSearchText] = useState('');
  const [dataDent, setDataDent] = useState([]);

  useEffect(() => {
    const uuidclinic = getClinicuuid();
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/dataDent",{id:uuidclinic});
        // Assuming the API response data is an array of objects
        const dentistsFromAPI = response.data;
        // Map the received data to the desired structure
        const dataDentises = dentistsFromAPI.map(dentist => {
          return {
            imgdentis: dentist.ImgDoc,
            dataname: dentist.Fullname,
            dataTM: dentist.tservice,
            dataPLAB: dentist.plab 
          };
        });
        console.log(dataDentises)
        setDataDent(dataDentises);
        // return dataDentises;
      } catch (error) {
        console.error("Failed to fetch data from MySQL:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const filterDent = dataDent ? dataDent.filter((dataDent) => {
    return dataDent.dataname.includes(searchText);
  }) : [];

  const dataDentElements = filterDent.map((dataDent, index) => {
    return <Boxdentis key={index} dataDentis={dataDent} />;
  });

  return (
    <div className='PageserchDoc'>
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
          <img className='imgsearch' src='imagdentis\image 4.png' />
          <button style={{ cursor: 'pointer' }}><img className='imgsearch' src='imagdentis\image 7.png' /></button>
        </div>
      </center>
      <div className='app-grid'>
        {dataDentElements}
        <Null />
      </div>
    </div>
  );
}

export default PageserchDoc;
