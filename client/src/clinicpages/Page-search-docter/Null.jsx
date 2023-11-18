import './Boxdentiss.css'
import { Link } from 'react-router-dom';
function Null() {
    return (
        <div className='BoxDentiss'>
            <Link to="/EditDoc">
                <button className='box'>
                    <center><img className='plus' src='imagdentis\plus.svg' /></center> {/*ใส่ฟังชั่นทีหลัง*/}
                </button>
            </Link>
        </div>
    )
}
export default Null;