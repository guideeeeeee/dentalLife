import './Tabbarclinic.css';
import SDmodal from '../modal/SDmodal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../service/authorize';
function Tabbarclinic() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setModal(true);
  };
  const handleLogout = () => {
    logout(() => navigate("/"));
    window.location.reload();
  };
  return (
    <>
      {modal && <SDmodal setOpenClinicModal= {setModal}/>}
      <div className="tabbarclinic">
        <img className="logo" src="images-tabbar/logo.jpg" />
        <div className='gridclinic'>
          <button className='home' style={{ cursor: 'pointer' }} onClick={()=>{
            navigate("/homeClinic")
          }}>
            <img className='imgtab' src='images-tabbar\home.svg' />HOME
          </button>
          <button className='call' style={{ cursor: 'pointer' }} >
            <img className='imgtab' src='images-tabbar\CALL.svg' />0813568554
          </button>
          <button className='profile' style={{ cursor: 'pointer' }} onClick={()=>{
            navigate("/SearchDoc")
          }} >
            <img className='imgtab' src='images-tabbar\porfilewhite.png' />SHARCH PROFILE
          </button>
          <button className='appinment' style={{ cursor: 'pointer' }} onClick={openModal}>
            <img className='imgtab' src='images-tabbar\calendar.png' />BOOK APPOINTMENT
          </button>
          <button className="nav-item" onClick={handleLogout}>
              log out
            </button>
        </div>
      </div>
    </>
  );
}

export default Tabbarclinic;
