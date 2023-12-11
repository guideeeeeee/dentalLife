import { useEffect, useState } from 'react';
import './Accordion.css';
import { getuuid } from '../../../service/authorize';
import {useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
function Accordion() {
    const setuuid = getuuid() ;
    const newuuid = useSelector((state)=>state.Clinic.clientUuid);
    const [transcript, setTranscript] = useState([]);
    const [iscancel,setcancel] = useState(false);
    /// fetch data ///
    const fetchdata = async () =>{
       if(!setuuid){
        try{
            const res = await axios.post("http://localhost:3001/auth/viewTranscript",{uuid:newuuid})
            console.log(res.data);
            setTranscript(res.data)
            console.log(transcript);
            
        }catch (error) {
            console.error("Failed to fetch data:", error);
          }
       }else {
        try{
            const res = await axios.post("http://localhost:3001/auth/viewTranscript",{uuid:setuuid}) 
            console.log(res.data);
            setTranscript(res.data)
            console.log(transcript);
        }catch (error) {
            console.error("Failed to fetch data:", error);
          }
           
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

    const cancel = (date, time) => {
        console.log(new Date(date).toLocaleDateString('en-CA'))
        console.log(time)
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Cancel it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.put("http://localhost:3001/api/cancel", { date: new Date(date).toLocaleDateString('en-CA'), time: time ,uuid:setuuid})
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
                    Swal.fire({
                        title: "Cancel!",
                        text: "Your file has been cancel.",
                        icon: "success"
                    }).then((res) => location.reload());
                }
            })

        }
        catch (err) {
            console.error("Cannot cancel dentis")
        }
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
                            {item.status == 'Not Complete' && (
                                <button className='cancel' onClick={() => cancel(item.date, item.time)}>
                                    <img className='wrong' src='imagp/wrong.png' />
                                </button>
                            )}
                            {/* <button className='cancel' onClick={() => cancel(item.date, item.time)}><img className='wrong' src='imagp/wrong.png' /></button> */}
                            <img className='according' src='assets/accordion.png' alt='accordion' />
                        </div>
                        <div className={selected == i ? 'content show' : 'content'}>
                            {datatreatment.map((itemtreatment, j) => (
                                <div key={j} className='Treatment'>
                                    <div className='treatment'>
                                    <li>
                                        <p>Treatment</p>
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


