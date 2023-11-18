import Axios from "axios";
import { useState } from "react";
import { authentication } from "../../../service/authorize";
import { Link, useNavigate } from "react-router-dom";
import "./Login_main.css";
import Tabbar from "../../ClientPages/Home/Tabbar";
import { useDispatch } from "react-redux";
import { setClinic } from "../../store/slices/ClinicSlice";
function Login_main_clinic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/auth/loginclinic", {
      Email: email,
      Password: password,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "ok") {
          dispatch(setClinic(response.data.user))
          authentication(response,()=> navigate("/homeClinic"))
        } else {
          alert("Login failed. " + response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };
  return (
    <div className="LoginLogin_main">
      <Tabbar />
      <div className="box">
        {/* relative กำหนดกรอบคงที่ */}
        <img className="bg" src="images-login\bg.svg" />
        <div id="boxin"></div> {/* กล่องใส */}
        <div className="h">
          {/* สร้างกล่องแยกเพื่อให้ตัวอักษรชัด */}
          <center>
            <h1>Log in</h1>
          </center>
          <div id="boxfrom"></div>
          <Link to="/ClientLogin">
            <div id="boxPersonal" style={{ backgroundColor: "#D9D9D9" }}>Personal</div>
          </Link>
          <div id="boxClinic" style={{ backgroundColor: "#769FCD" }}>Clinic</div>
          {/* กรอกข้อมูล */}
          {/* ใส่formแยกทีหลัง */}
          <form onSubmit={handleLogin}>
            <br />
            <h2>Enter Email</h2>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <h2>Enter Password</h2>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <div className="check-remember">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              REMEMBER ME
            </div>
            <br />
            <center>
              <button id="submit" type="submit" onClick={handleLogin}>
                Log in
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_main_clinic;
