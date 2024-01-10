import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import editImg from "./IMAGES/update.png"
import { Link } from "react-router-dom";

const Update = () => {
  const [data, setdata] = useState([]);

  const loadData = () => {
    let url = " http://localhost:4000/doctor";
    axios.get(url).then((res) => {
      setdata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const MyRecUpdate=(myid)=>{
    let myStatus=window.confirm("ARE YOU SURE YOU WANT TO DELETE RECORD !");
    if (myStatus==false)
    {
        return false;

    }

    let url=`http://localhost:4000/doctor/${myid}`;
    axios.delete(url).then((res)=>{
        alert ('RECORD UPDATED');
        loadData();
    });
  }


  const mydata = data.map((key) => {
    return (
      <>

      <div id="demo"></div>


        <tr>
          <td>{key.name}</td>
          <td>{key.specilist}</td>
          <td>{key.hospital}</td>
          <td>{key.contact}</td>
           <td>

             <Link to={`/editrec/${key.id}`}>
                <img src={editImg} width="30" height="30"/>
             </Link>
           
           </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>DELETE RECORDS IN ASIAN PAINTS</h1>

      <table id="customers">

        <tr>
          <th>DOCTOR NAME</th>
          <th>DOCTOR SPECILITY</th>
          <th>HOSPITAL NAME</th>
          <th>CONTACT</th>
          <th>UPDATE</th>
          
        </tr>

        {mydata}

      </table>

    </>
  );
};
export default Update;
