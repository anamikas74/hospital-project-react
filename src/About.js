
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";




const About=()=>
{
    let {id}= useParams();

    const [data,setdata] = useState({});

    const loadData = () => {
        let url = " http://localhost:4000/doctor";
        axios.get(url).then((res) => {
          setdata(res.data);
        });
      }

      useEffect(()=>{
        loadData();

      },[])


    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setdata(values=>({...values,[name]:value}));
    }

    const handleSubmit=()=>
    {
        let url=` http://localhost:4000/doctor/${id}`;
        axios.put(url,data).then((res)=>{
            alert("RECORD SUCCEFULLY UPDATED!!!");
            //localData();
        });
    }


    return(
        <>
        
        <h1 id="demo">Doctor Record Edit</h1>
        DOCTOR NAME : <input type="text" name="name" value={data.name} onChange={handleInput}/>
        <br/>
        SPECILIST : <input type="text" name="specilist" value={data.specilist} onChange={handleInput}/>
        <br/>
        HOSPITAL : <input type="text" name="hospital" value={data.hospital} onChange={handleInput}/>
        <br/>
        CONTACT : <input type="text" name="contact" value={data.contact} onChange={handleInput}/>
        <br/>
        <button onClick={handleSubmit}>EDIT SAVE</button>
        </>
    );
}
export default About;