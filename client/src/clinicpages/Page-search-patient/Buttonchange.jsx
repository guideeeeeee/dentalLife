import { useNavigate } from 'react-router-dom';
import './Buttonchange.css';

function Buttonchange() {
    const navigate = useNavigate();
    return (
        <button className="buttonchange" style={{ cursor: 'pointer' }} onClick={() => navigate("/SearchDoc")} >
            <div className="circle" /><p>DN</p>
        </button>
    )
}

export default Buttonchange;