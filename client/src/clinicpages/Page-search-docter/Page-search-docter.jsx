import React, { useState } from 'react';
import './Page-search-docter.css'
import Null from './Null.jsx';
import Buttonchange from './Buttonchange.jsx';
import Boxdentis from './Boxdentis'
import dataDentises from './dataDentuses';
import Tabbarclinic from '../Tabbarclinic/Tabbarclinic.jsx';
function PageserchDoc() {
  const [searchText, setSearchText] = useState('');

  const filterdentis = dataDentises.filter((dataDentis) => {
    return dataDentis.dataname.includes(searchText)
  });

  // เอาข้อมูลอาเรย์มาใช้ สามารถแยกใส่ข้อมูลjsได้เลย
  const dataDentisesElements = filterdentis.map((dataDentis, index) => {
    return <Boxdentis key={index} dataDentis={dataDentis} />
  });

  return (
    <div className='PageserchDoc'>
      <Tabbarclinic/>
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
          <button style={{ cursor: 'pointer' }}><img className='imgsearch' src='imagdentis\image 7.png' /></button>{/*ปุ่มกรอง*/}
        </div>
      </center>
      <div className='app-grid'>
        {dataDentisesElements} {/*เรียกใช้ข้อมูลจากอาเรย์*/}
        <Null />
      </div>
    </div>
  );
}

export default PageserchDoc;
