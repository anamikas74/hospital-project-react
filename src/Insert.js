
import { useState } from "react";
import axios from "axios";

const Insert = () => {

    const [input,setInput] = useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=()=>
    {
        let url="http://localhost:4000/doctor";
        axios.post(url,input).then((res)=>{
            alert ("data inserted")
        });
    }



  return (
    <>
    <h1>INSERT DOCTORS RECORD</h1>

    <div>
  <form action="/action_page.php">
    <label for="fname">Docters Name</label>
    <input type="text" id="name" name="name" value={input.name} onChange={handleInput}/>


    <label for="country">Hospita Namel</label>
    <input type="text" id="hospital" name="hospital" value={input.hospital} onChange={handleInput}/>

    <label for="lname">Speciality</label>
    <input type="text" id="specialist" name="specialist" value={input.specialist} onChange={handleInput}/>
    
    
    <label for="country">Contact</label>
    <input type="text" id="contact" name="contact" value={input.contact} onChange={handleInput}/>
    
    
    <input type="button" value="Data Submit" onClick={handleSubmit}/>
  </form>
</div>


      
    </>
  );
};
export default Insert;
