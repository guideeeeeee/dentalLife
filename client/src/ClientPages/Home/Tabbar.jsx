import './Tabbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import ApModal from '../modal/ApModal';
import { getToken, logout } from '../../../service/authorize';
function Tabbar() {
  const navigate = useNavigate();
  const [Modalstate, setModalstate] = useState(false);
  const handleLogout = () => {
    logout(() => navigate("/"));
    window.location.reload();
  };


  return (
    <>
      {Modalstate && <ApModal setOpenModal={setModalstate} />}
      <div className="tabbar">
        <img className="logo" src="images-tabbar\logo.jpg" />
        <ul className="manu">
          <li className="nav-item">
            <Link to="/" style={{ cursor: 'pointer' }} className="tab-link">
              <img id="img" src="images-tabbar\001-home 2.png" alt="" />
              Home
            </Link>
          </li>
          {getToken()&&<li className="nav-item tab-link">
            <Link to="/Profile" style={{ cursor: 'pointer' }}
              className="tab-link" >
              <img id="img" src="images-tabbar\profile.svg" alt="" />
              PROFILE
            </Link>
          </li>}
          {getToken() && <li className="nav-item" onClick={() => {
            return setModalstate(true)
          }}>
            <p style={{ cursor: 'pointer' }} id="round">
              <img id="img" src="images-tabbar\calendar.png" />
              <span className="h1" > BOOK APPOINTMENT</span>
            </p>
          </li>}
          {getToken() ?
            <button className="nav-item" onClick={handleLogout}>
              log out
            </button>
            : <li className="nav-item" >
              <Link to="/ClientLogin" >Login</Link>
            </li>
          }
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  )
}
export default Tabbar;