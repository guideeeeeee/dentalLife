import './Boxprofile.css'
import { Link, useNavigate } from "react-router-dom";
function Boxprofile(){
    return(
        <div className='boxprofile'>
            <div className='flexin'>
                <center><img src='imagp\p6.jpg'/></center>
                    <p>Number An :</p>
                    <p>Lastname :</p>
                    <p>Name :</p>
                    <p>Date of birth :</p>
                    <p>Sex :</p>
                    <p>Weight :</p>
                    <p>Height :</p>
                    <p>Tel :</p>
                <Link to="/EditInfo" style={{ cursor: 'pointer' }}>
                <center><div className='editInformation'>EDIT INFORMATION</div></center>
                </Link>
            </div>
        </div>
    )


}

export default Boxprofile;