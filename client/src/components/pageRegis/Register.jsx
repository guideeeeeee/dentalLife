import "./Register.css";
import React, { useState } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Profile from "../../../public/images-tabbar/profile.svg";
import home from "/images-login/home.svg";
import { useNavigate } from "react-router-dom";
import Tabbar from "../../ClientPages/Home/Tabbar";
export default function Register() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [pass1, setCheckPass] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    console.log("Image selected");
  };
  const handleClearImage = () => {
    setSelectedImage(null);
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = null;
    }
  };
  const showIcon = <VisibilityIcon />;
  const hideIcon = <VisibilityOffIcon />;

  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    Tel: null,
    IDline: null,
    Email: "",
    Password: "",
    Religion: null,
    Nationality: null,
    DOB: null,
    Occupation: null,
    Weight: null,
    Height: null,
    Address: null,
    allergy: null,
    idcard: null,
  });

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
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        formData
      );
      console.log(response.data);
      navigate("/ClientLogin");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="app">
      <Tabbar />
      <div className="createApp">
        <h1>CREATE NEW ACCOUNT</h1>
        <div className="imagepatient">
              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    alt="selected"
                    className="selected-image"
                  />
                  <button onClick={handleClearImage}>Clear Image</button>
                </>
              ) : (
                <label htmlFor="fileInput">
                  <img
                    id="imagepatient"
                    src={Profile}
                    alt="profile"
                    className="imagepatient"
                  />
                  <input
                    type="file"
                    id="fileInput"
                    name="ImageDentist"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              )}
            </div>
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
                  type="text"
                  name="Tel"
                  maxLength={"10"}
                  value={formData.Tel}
                  onChange={handleChange}
                />
              </div>
              <div className="column-name-text">
                <label>ID line:</label>
                <input
                  type="text"
                  name="IDLine"
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
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>

            {/* password */}
            <div className="password-input">
              <label>Password:*</label>
              <input
                type={passwordShown ? "text" : "password"}
                value={formData.Password}
                onChange={handleChange}
                name="Password"
                required
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
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <button className="signUpbtn" type="submit">
              Sign up
            </button>
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
                  type="date"
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

        <ul>
          <span className="bottomClick">
            <li>FORGOT PASSWORD?</li>
          </span>
        </ul>
      </div>
    </div>
  );
}
