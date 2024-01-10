import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import delimg from "./IMAGES/download.png"

const Delete = () => {
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

  const MyRecDelete=(myid)=>{
    let myStatus=window.confirm("ARE YOU SURE YOU WANT TO DELETE RECORD !");
    if (myStatus==false)
    {
        return false;

    }

    let url=`http://localhost:4000/doctor/${myid}`;
    axios.delete(url).then((res)=>{
      document.getElementById("demo").innerHTML=
        `<div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Danger!</strong> Records succesfully delete!!
      </div>`
    });
  }


  const mydata = data.map((key) => {
    return (
      <>

      


        <tr>
          <td>{key.name}</td>
          <td>{key.specilist}</td>
          <td>{key.hospital}</td>
          <td>{key.contact}</td>
           <td>

             <a href="#" onClick={()=>{MyRecDelete(key.id)}}>
             <img src={delimg} width='20px'/>
             </a>
           
           </td>
        </tr>
      </>
    );
  });

  return (
    <>
    <h1 id="demo"></h1>
      <h1>DELETE RECORDS IN ASIAN PAINTS</h1>

      <table id="customers">

        <tr>
          <th>DOCTOR NAME</th>
          <th>DOCTOR SPECILITY</th>
          <th>HOSPITAL NAME</th>
          <th>CONTACT</th>
          <th>DELETE</th>
          
        </tr>

        {mydata}

      </table>

    </>
  );
};
export default Delete;
