import { useEffect, useState } from 'react';
import './Accordion.css';
import { getuuid } from '../../../service/authorize';
import axios from 'axios';
function Accordion() {
    const setuuid = getuuid();
    const [transcript, setTranscript] = useState([])
    /// fetch data ///
    const fetchdata = async () =>{
        try{
            const res = await axios.post("http://localhost:3001/auth/viewTranscript",{uuid:setuuid}) //มาแก้ตรงนี้
            console.log(res.data);
            setTranscript(res.data)
            console.log(transcript);
        }catch (error) {
            console.error("Failed to fetch data:", error);
          }
           
    }
    useEffect(()=> {
        fetchdata();
    },[]);
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div >
            {transcript.map((item, i) => (
                <div className="boxAccordion" key={i}>
                    <div >
                        <div className='row' onClick={() => toggle(i)}>
                            <div className='date'>{new Date(item.date).toLocaleDateString('en-CA')}</div>
                            <div className='time'>{item.time}</div>
                            <div className='place'>{item.NameOfClinic}</div>
                            <div className='status'>{item.status}</div>
                            <img className='according' src='assets/accordion.png' alt='accordion' />
                        </div>
                        <div className={selected == i ? 'content show' : 'content'}>
                            {datatreatment.map((itemtreatment, j) => (
                                <div key={j} className='Treatment'>
                                    <div className='treatment'>
                                    <li>
                                        <p>Treament</p>
                                        <p>{item.craft}</p>
                                    </li>
                                        </div>
                                    <div className='docter'><li>
                                        <p>Doctor</p>
                                        <p>{item.fname} {item.lname}</p>
                                    </li></div>
                                    <div className='price'><li>
                                        <p>Price</p>
                                        <p>{item.price}</p>
                                    </li></div>
                                </div>
                            ))}
                            {/* <div className='totalValue'>
                                <div className='total'>Total value</div>
                                <div className='value'>9,000</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion;

const datatreatment = [
    {
        treatment: 'ผ่าตัด',
        docter: 'Docter',
        plice: 'Price'
    },
]

const dataInAccordion = [
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done',
        treatment: 'ผ่าตัด',
        docter: 'Docter',
        plice: 'Price'
        
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
]
