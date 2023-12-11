import "./EditDoctor.css";
import Profile from "./component/profile.svg";
import Tabbarclinic from "../Tabbarclinic/Tabbarclinic.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { getClinicuuid } from "../../../service/authorize.jsx";
function EditnDoc(props) {
  const plabDoc = props;
  /// set select Craft ///
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
   /// get craft ///
   const [craft, getCraft] = useState([]);
   const handlecraft = async () => {
     try {
       const response = await axios.get("http://localhost:3001/api/craft");
       getCraft(response.data);
     } catch (error) {
       console.error("fail to pulled:", error);
     }
   };

  /// set object image ///

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  /// dataform ///

  const [formData, setFormData] = useState({
    plab: null,
    fname: null,
    lname: null,
    tel: null,
    IDLine: null,
    tservice: null,
    S_exper: null,
    CenClinic: getClinicuuid(),
    language: null,
    gYear1: null,
    gYear2: null,
    gYear3: null,
    gS_exper1: null,
    gS_exper2: null,
    gS_exper3: null,
    university1: null,
    university2: null,
    university3: null,
    wduration1: null,
    wduration2: null,
    wduration3: null,
    wduration4: null,
    wduration5: null,
    wS_exper1: null,
    wS_exper2: null,
    wS_exper3: null,
    wS_exper4: null,
    wS_exper5: null,
    wlocation1: null,
    wlocation2: null,
    wlocation3: null,
    wlocation4: null,
    wlocation5: null,
    gender: null,
    ImgDoc:null,
    fileDoc:null,
  });

  /// show&clear image ///
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) =>({
      ...prevData,fileDoc: file
    }));
    setSelectedImage(URL.createObjectURL(file));
    console.log("Image selected");
  };
  const handleClearImage = () => {
    setSelectedImage(null);
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = null;
    }
  };

  /// option ///
  const handleSelectionChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    const selectedValuesString = selectedValues.join(",");
    setSelectedOptions(selectedValues);
    setFormData((prevData) => ({
      ...prevData,
      tservice: selectedValuesString,
    }));
  };
  const handleToggleOptions = () => {
    handlecraft();
    setShowOptions(!showOptions);
  };

  /// setFormData ///
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /// summit ///
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/regisDent",
        formData
      );
      //const response1 = await axios.post("http://localhost:3001/api/uploadDent",Imgdata);
      //console.log(response1.data)
      console.log(response.data);
      navigate("/SearchDoc");
    } catch (error) {
      console.error("Registration failed:", error.response ,error.response1);
    }
  };

  return (
    <>
      <div className="wpage">
        <Tabbarclinic />
        <div className="topForm">
          {/* topform */}
          <div className="leftForm">
            {/* fullname */}
            <div className="fullname">
              <div className="fullname-text">
                <label className="fntext">First Name :*</label>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="fullname-text">
                <label className="fntext">Last Name :*</label>
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            {/* specialized */}
            <div className="expertise">
              <label className="DocNormalText">Specialized expertise :</label>
              <input
                type="text"
                name="S_exper"
                value={formData.S_exper}
                onChange={handleChange}
              ></input>
            </div>
            {/* PLAB */}
            <div className="Plab">
              <label className="DocNormalText">PLAB :*</label>
              <input
                type="text"
                name="plab"
                value={formData.plab}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          {/* image */}
          <div className="imagedoc">
  {selectedImage ? (
    <>
      <img src={selectedImage} alt="selected" className="selected-image" name="file" />
      <button onClick={handleClearImage}>Clear Image</button>
    </>
  ) : (
    <label htmlFor="fileInput">
      <img
        id="imgDoc"
        src={Profile}
        alt="profile"
        className="profile-image"
      />
      <input
        type="file"
        id="fileInput"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </label>
  )}
</div>
        </div>
        <div className="bottomForm">
          <div className="part1">
            <div className="test">
              {/* language */}
              <text className="DocNormalText">Language:</text>
              <input
                type="text"
                className="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
              ></input>
            </div>
            <div className="multi-select-dropdown">
              <label className="DocNormalText">Treatment and service :* </label>
              <label onClick={handleToggleOptions} className="dropdown-label">
                Selected options:
              </label>
              {showOptions && (
                <select
                  multiple
                  name="tservice"
                  value={selectedOptions}
                  onChange={handleSelectionChange}
                  className="dropdown-select"
                >
                  {craft.map((craftOption, index) => (
                    <option key={index} value={craftOption.nameOfcraft}>
                      {craftOption.nameOfcraft}
                    </option>
                  ))}
                </select>
              )}

              <p>Selected options: {selectedOptions.join(", ")}</p>
            </div>
          </div>
          <div className="part2">
            <div className="part2-1">
              <text className="DocNormalText">Graduated education :</text>
            </div>
            <div className="theBox">
              <div className="year">
                <label className="DocNormalText">Year :</label>
                <input
                  type="text"
                  className="year-input"
                  name="gYear1"
                  value={formData.gYear1}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="year-input"
                  name="gYear2"
                  value={formData.gYear2}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="year-input"
                  name="gYear3"
                  value={formData.gYear3}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="S-expertise">
                <label className="DocNormalText">Specialized expertise :</label>
                <input
                  type="text"
                  className="spec-input"
                  name="gS_exper1"
                  value={formData.gS_exper1}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="spec-input"
                  name="gS_exper2"
                  value={formData.gS_exper2}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="spec-input"
                  name="gS_exper3"
                  value={formData.gS_exper3}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="S-expertise">
                <label className="DocNormalText">University :</label>
                <input
                  type="text"
                  className="spec-input"
                  name="university1"
                  value={formData.university1}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="spec-input"
                  name="university2"
                  value={formData.university2}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  className="spec-input"
                  name="university3"
                  value={formData.university3}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="part3">
              <label className="DocNormalText">Work experience :</label>
              <div className="theBox-1">
                <div className="duration">
                  <label className="DocNormalText">Duration :</label>
                  <input
                    type="text"
                    className="du-input"
                    name="wduration1"
                    value={formData.wduration1}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="du-input"
                    name="wduration2"
                    value={formData.wduration2}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="du-input"
                    name="wduration3"
                    value={formData.wduration3}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="du-input"
                    name="wduration4"
                    value={formData.wduration4}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="du-input"
                    name="wduration5"
                    value={formData.wduration5}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="S-expertise">
                  <label className="DocNormalText">
                    Specialized expertise :
                  </label>
                  <input
                    type="text"
                    className="spec-input"
                    name="wS_exper1"
                    value={formData.wS_exper1}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="spec-input"
                    name="wS_exper2"
                    value={formData.wS_exper2}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="spec-input"
                    name="wS_exper3"
                    value={formData.wS_exper3}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="spec-input"
                    name="wS_exper4"
                    value={formData.wS_exper4}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="spec-input"
                    name="wS_exper5"
                    value={formData.wS_exper5}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="wtfcol">
                  <label className="DocNormalText">Location :</label>
                  <input
                    type="text"
                    className="wtf-input"
                    name="wlocation1"
                    value={formData.wlocation1}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="wtf-input"
                    name="wlocation2"
                    value={formData.wlocation2}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="wtf-input"
                    name="wlocation3"
                    value={formData.wlocation3}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="wtf-input"
                    name="wlocation4"
                    value={formData.wlocation4}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    className="wtf-input"
                    name="wlocation5"
                    value={formData.wlocation5}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className="part4">
              <div className="theBox-1">
                <div className="gender">
                  <label className="DocNormalText">Gender :</label>
                  <input
                    type="text"
                    className="du-input"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="tel">
                  <label className="DocNormalText">Tel :</label>
                  <input
                    type="number"
                    className="tel-input"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="tel">
                  <label className="DocNormalText">ID Line :</label>
                  <input
                    type="number"
                    className="tel-input"
                    name="IDLine"
                    value={formData.IDLine}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="finalpart">
            <button className="btnfinal" type="submit" onClick={handleSubmit}>
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditnDoc;
