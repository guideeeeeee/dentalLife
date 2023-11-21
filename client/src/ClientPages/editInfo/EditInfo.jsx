import "./editInfo.css";
import "../../components/pageRegis/Register.css";
import React, { useState ,useEffect} from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import home from "/images-login/home.svg";
import { Link, useNavigate } from "react-router-dom";
import Tabbar from "../Home/Tabbar";
import { getuuid } from "../../../service/authorize";
export default function EditInfo() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [pass1, setCheckPass] = useState();
  const showIcon = <VisibilityIcon />;
  const hideIcon = <VisibilityOffIcon />;
  const setuuid = getuuid();
  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const [formData, setFormData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/EditInfo",{id:setuuid});
      // console.log(setuuid);
      console.log(response.data);
      setFormData(
        response.data[0]
      )
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  
  useEffect(() => {
    fetchData(); // Call the function to initiate the fetch when the component mounts
  }, []);
  
  // const [formData, setFormData] = useState({
  //   fname: "",
  //   lname: "",
  //   Tel: null,
  //   IDline: null,
  //   Email: "",
  //   Password: "",
  //   Religion: null,
  //   Nationality: null,
  //   DOB: null,
  //   Occupation: null,
  //   Weight: null,
  //   Height: null,
  //   Address: null,
  //   allergy: null,
  //   idcard: null,
  // });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Password !== pass1) {
      window.alert("Password and confirm password do not match");
      return;
    }
    try {
      //เปลี่ยนเป็นupdate
      const response = await axios.put(
        "http://localhost:3001/auth/SaveInfo",
        formData
      );
      console.log(response.data);
      navigate("/Profile");
    } catch (error) {
      console.error("SaveInfo failed:", error);
    }
  };

  return (
    <div className="appEditInfo">
      <Tabbar />
      <div className="createApp">
        <h1>EDIT INFORMATION</h1>
        <div className="form1">
          <form className="formleft" onSubmit={handleSubmit}>
            {/* name */}
            <div className="column">
              <div className="column-name-text">
                <label>Firstname:*</label>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="column-name-text">
                <label>Lastname:*</label>
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* tel idLine */}
            <div className="column">
              <div className="column-name-text">
                <label>Tel:</label>
                <input
                  type="number"
                  name="Tel"
                  value={formData.Tel}
                  onChange={handleChange}
                />
              </div>
              <div className="column-name-text">
                <label>ID line:</label>
                <input
                  type="text"
                  name="IDline"
                  value={formData.IDLine}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* email */}
            <div className="name-text">
              <label>Email:*</label>
              <input
                type="email"
                name="Email"
                value={formData.email}
                onChange={handleChange}
                readOnly
              />
            </div>

            {/* password */}
            <div className="password-input">
              <label>Password:*</label>
              <input
                type={passwordShown ? "text" : "password"}
                // value={formData.password}
                onChange={handleChange}
                name="Password"
                readOnly
              />
              <i className="show-hide-icon" onClick={togglePasswordVisibility}>
                {passwordShown ? hideIcon : showIcon}
              </i>
            </div>

            {/* confirm password */}
            <div className="password-input">
              <span>
                <label>Confirm password:*</label>
              </span>

              <input
                type={passwordShown ? "text" : "password"}
                value={pass1}
                onChange={(e) => setCheckPass(e.target.value)}
                name="password1"
                readOnly
              />
              <i className="show-hide-icon" onClick={togglePasswordVisibility}>
                {passwordShown ? hideIcon : showIcon}
              </i>
            </div>

            {/* ID card */}
            <div className="name-text">
              <label>ID Card:</label>
              <input
                type="number"
                name="id"
                value={formData.idcard}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <form className="formright">
            {/* religion Nation */}
            <div className="column">
              <div className="column-name-text">
                <label>Religion:</label>
                <input
                  type="text"
                  name="Religion"
                  value={formData.Religion}
                  onChange={handleChange}
                />
              </div>
              <div className="column-name-text">
                <label>Nationality:</label>
                <input
                  type="text"
                  name="Nationality"
                  value={formData.Nationality}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* dob race */}
            <div className="column">
              <div className="column-name-text">
                <label>Race:</label>
                {/* <input type="text" name="Race" value={formData.Race} onChange={handleChange} /> */}
                <input type="text" name="Race" />
              </div>
              <div className="column-name-text">
                <label>Date of Birth:</label>
                <input
                  type="text"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* occupation */}
            <div className="name-text">
              <label>Occupation:</label>
              <input
                type="text"
                name="Occupation"
                value={formData.Occupation}
                onChange={handleChange}
              />
            </div>

            {/* weight height */}
            <div className="column">
              <div className="column-name-text">
                <label>Weight:</label>
                <input
                  type="number"
                  name="Weight"
                  value={formData.Weight}
                  onChange={handleChange}
                />
              </div>
              <div className="column-name-text">
                <label>Height:</label>
                <input
                  type="number"
                  name="Height"
                  value={formData.Height}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* address */}
            <div className="name-text">
              <label>Address:</label>
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
              />
            </div>

            {/* history */}
            <div className="name-text">
              <label>Allergy History:</label>
              <input
                type="text"
                name="allergy"
                value={formData.allergy}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="bottomEdit">
            <Link to="/Profile" style={{ cursor: 'pointer' }} className="EditInfoText">
            <p className="EditInfoText">CANCEL
            </p>
            </Link>
            <button className="buttonEditInfo" onClick={handleSubmit} >CONFIRM</button>
            </div>
      </div>
    </div>
  );
}
