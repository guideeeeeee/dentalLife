import "./Boxdentiss.css";
import Profile from "../../../public/images-tabbar/profile.svg"
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlab } from "../../store/slices/ClinicSlice";
function BoxDentis(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataDentis } = props;
  const imgSource = dataDentis.imgdentis ? dataDentis.imgdentis : Profile;
  const EditnDoc = () =>{
    dispatch(setPlab(dataDentis.dataPLAB));
    navigate(`/EditnDoc`)
  }
  const deleteDoc = () => {
    console.log(dataDentis.dataPLAB);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.post("http://localhost:3001/api/deleteDoc", { plab: dataDentis.dataPLAB })
            .then((res) => {
              if (res.data.status === "Delete Complete") {
                console.log("complete")
              }
              else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!"
                });
              }
            })
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then((res)=> location.reload());
        }
      })

    }
    catch (err) {
      console.error("Cannot delete dentis")
    }

  }

  return (
    <div className="BoxDentiss">
      <div className="box">
        <img className="imgdentis" src={imgSource} />
        <h5>
          <div className="dataname">{dataDentis.dataname}</div>
          <div className="dataTM">{dataDentis.dataTM}</div>
          <div className="dataPLAB">PLAB:{dataDentis.dataPLAB}</div>
        </h5>
        <div className="grid" style={{ cursor: "pointer" }}>
          <button className="edit" onClick={EditnDoc}>Edit</button>
          <button className="edit" onClick={deleteDoc}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default BoxDentis;