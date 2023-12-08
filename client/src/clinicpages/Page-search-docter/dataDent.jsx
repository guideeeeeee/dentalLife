import axios from 'axios';
import { getClinicuuid } from '../../../service/authorize';
const setuuid = getClinicuuid();
const fetchDataFromMySQL = async () => {
  try {
    const response = await axios.post("http://localhost:3001/api/dataDent",{id:setuuid});
    
    // Assuming the API response data is an array of objects
    const dentistsFromAPI = response.data;
    // Map the received data to the desired structure
    const dataDentises = dentistsFromAPI.map(dentist => {
      return {
        imgdentis: dentist.ImgDoc,
        dataname: dentist.Fullname,
        dataTM: dentist.tservice,
        dataPLAB: dentist.plab 
      };
    });

    return dataDentises;
  } catch (error) {
    console.error("Failed to fetch data from MySQL:", error);
    return [];
  }
};

export default fetchDataFromMySQL;
