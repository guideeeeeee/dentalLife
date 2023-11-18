import './Boxpatient'
import { Link } from 'react-router-dom';
function Null() {
    return (
        <div className='BoxPatient'>
            <Link to ='/Register'>
            <button className='box'>
                <center><img className='plus' src='imagp/plusyellow.svg' /></center> {/*ใส่ฟังชั่นทีหลัง*/}
            </button>
            </Link>
        </div>
    )
}
export default Null;