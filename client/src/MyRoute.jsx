import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./ClientPages/profile/Profile.jsx";
import Login_main from "./components/page-login/Login_main.jsx";
import Register from "./components/pageRegis/Register.jsx";
import Login_main_clinic from "./components/page-login/Login_main-clinic.jsx";
import PageserchDoc from "./clinicpages/Page-search-docter/Page-search-docter.jsx";
import EditDoctor from "./clinicpages/Createdoc/EditDoctor.jsx";
import Pagesearchpa from "./clinicpages/Page-search-patient/Page-search-patient.jsx";
import Clinichome from "./clinicpages/home/Clinichome.jsx";
import Clienthome from "./ClientPages/Home/Clienthome.jsx";
const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Clienthome />} />
                <Route path="/homeClinic" element={<Clinichome />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ClientLogin" element={<Login_main />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ClinicLogin" element={<Login_main_clinic />} />
                <Route path="/SearchDoc" element={<PageserchDoc />} />
                <Route path="/EditDoc" element={<EditDoctor />} />
                <Route path="/SearchClient" element={<Pagesearchpa />} />
            </Routes>
        </Router>
    )
}

export default MyRoute