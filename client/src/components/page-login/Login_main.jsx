import { Link, useNavigate } from "react-router-dom";
import "./Login_main.css";
import Axios from "axios";
import { useState } from "react";
import { authentication } from "../../../service/authorize";
import Tabbar from "../../ClientPages/Home/Tabbar";
import {addClient} from "../../store/slices/ClientSlice";
import { useDispatch } from "react-redux";
function Login_main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/auth/login", {
      Email: email,
      Password: password,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "ok") {
          dispatch(addClient(response.data.user))
          authentication(response, ()=>navigate("/"))
        } else {
          alert("Login failed. " + response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };


  return (
    <div>
      <Tabbar />
      <div className="LoginLogin_main">
        <div className="box">
          {/* relative กำหนดกรอบคงที่ */}
          <img className="bg" src="images-login\bg.svg" />
          <div id="boxin"></div> {/* กล่องใส */}
          <div className="h">
            {" "}
            {/* สร้างกล่องแยกเพื่อให้ตัวอักษรชัด */}
            <center>
              <h1>Log in</h1>
            </center>
            <div id="boxfrom"></div>
            <Link to="/ClientLogin">
              <div id="boxPersonal">Personal</div>
            </Link>
            <Link to="/ClinicLogin">
              <div id="boxClinic">Clinic</div>
            </Link>
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
            <Link to="/Register" className="row" >
              CREATE NEW ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_main;
