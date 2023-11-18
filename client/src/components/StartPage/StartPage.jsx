import "./StartPage.css";
import { useNavigate } from 'react-router-dom';
import { getUser } from "../../../service/authorize";
function StartPage() {
  const description = `As well as investing in the latest dental equipment and restorative\n
  materials, our approach to dental care is based on three core\n
  pillars of dental attention: Health, Function and Aesthetics.\n
  These areas overlap and each one affects your physical,\n
  functional and emotional well-being.`;
  const navigate = useNavigate();
  return (
    <div className="wholepage">
      <div className="homepage">
        <div className="titlehomepage">
          <p className="page-title-head">Ensuring top dental health now</p>
          <p className="page-title-head">and into the future</p>
        </div>
        <div className="description">
          <p className="description-text">{description}</p>
        </div>
        {!getUser() &&
          <div className="login">
            <button className="login-btn" onClick={() => navigate("/ClientLogin")}>LOGIN</button>
          </div>}
      </div>
    </div>
  );
}
export default StartPage;
