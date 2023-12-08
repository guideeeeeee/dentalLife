import './Boxprofile.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { getuuid } from '../../../service/authorize';
import { useEffect, useState } from 'react';
const setUuid= getuuid();
function Boxprofile(){
    const [data,setData] = useState([]);
    const fetchData = async () =>{
        try{
            const response = await axios.post("http://localhost:3001/auth/profileClient",{uuid:setUuid});
            setData(response.data[0])
        }
        catch(e){
            console.error("Failed to fetch data from mySQL:",e);
        }
    };
    useEffect(()=>{fetchData();
    },[]);
    const newDOB = new Date(data.DOB).toLocaleDateString('en-CA');
    return(
        <div className='boxprofile'>
            <div className='flexin'>
                <center><img src='imagp\p6.jpg'/></center>
                    <p>Number An : {data.uuid}</p>
                    <p>Lastname : {data.lname}</p>
                    <p>Name : {data.fname}</p>
                    <p>Date of birth :{newDOB}</p>
                    <p>Weight : {data.Weight}</p>
                    <p>Height : {data.Height}</p>
                    <p>Tel : {data.Tel}</p>
                <Link to="/EditInfo" style={{ cursor: 'pointer' }}>
                <center><div className='editInformation'>EDIT INFORMATION</div></center>
                </Link>
            </div>
        </div>
    )


}

export default Boxprofile;