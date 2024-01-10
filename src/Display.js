import { useEffect, useState } from "react";
import axios from "axios";
import DoctorDesign from "./DoctorDesign"

const Display = () => {
  const [data, setData] = useState([]);
  const localhost = () => {
    let url = "http://localhost:4000/doctor";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    localhost();
  }, []);

 const myAns = data.map((key)=><DoctorDesign
  nm={key.name}
  hos={key.hospital}
  spe={key.specilist}
  con={key.contact}
  />);
  return (
    <>
      <h1>DISPLAY ASIAN PAINTS</h1>

      <table id="customers">

        <tr>
          <th>DOCTOR NAME</th>
          <th>DOCTOR SPECILITY</th>
          <th>HOSPITAL NAME</th>
          <th>CONTACT</th>
          
        </tr>

        {myAns}

      </table>
    </>
  );
};
export default Display;
