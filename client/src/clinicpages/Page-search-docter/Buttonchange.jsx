import './Buttonchange.css';
import { useNavigate } from 'react-router-dom';
function Buttonchange(){
    const navigate = useNavigate();
    return(
        <button className="buttonchangedoc" style={{ cursor: 'pointer' }} onClick={()=>navigate("/SearchClient")}>
            <div className="circle"/><p>DN</p>
        </button>
    )
}

export default Buttonchange;