import React, {  useState } from 'react'
import "./SDmodal.css"
import BodySD from './BodySD';
import SDcalendar from './SDcalendar';
import { getuuid } from '../../../service/authorize';
import axios from 'axios';


function SDmodal({ setOpenClinicModal }) {
    const [dataform, setdata] = useState({
        namedent: null,
        craft: null,
        dates: null,
        timesent: null,
    });
    const uuid = getuuid();
    const handleDoneClick = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/scheduling",
                {
                    IDClinic: uuid,
                    NameDent: dataform.namedent,
                    craft: dataform.craft,
                    date: dataform.dates,
                    time: dataform.timesent,
                });
            console.log(response.data);
            if (response.data.status === "Scheduling Complete") {
                console.log("done");
                alert("Complete");
                setOpenClinicModal(false);
            } else {
                alert(" fail " + response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div className="modalBackground ">
            <div
                className="oc-bg"
                onClick={() => {
                    setOpenClinicModal(false);
                }}
            ></div>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenClinicModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title clinic">
                    <h1 style={{ color: "#A0C49D" }}>Scheduling</h1>
                </div>
                <div className='ingrid'>
                    <BodySD treat={(value) => setdata({ ...dataform, craft: value })} doc={(value) => setdata({ ...dataform, namedent: value })} />
                    <SDcalendar Time={(value) => setdata({ ...dataform, timesent: value })} date={(value)=>setdata({ ...dataform, dates: value })}/>
                </div>

                <div className="footer">
                    <button style={{ backgroundColor: "#94B49F" }} id="doneBtn" onClick={handleDoneClick}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SDmodal;
