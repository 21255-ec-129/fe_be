import {useState} from 'react';
import axios from 'axios';
function Registerform()
{
    const[formdata,setFormdata]=useState({
        'name':'',
        'email':'',
        'password':'',
        'myfile':'',
        'phoneno':''
    })
    const handlesubmit=(e)=>{
        const Inputfields = new FormData()
        Inputfields.append("name",formdata.name)
        Inputfields.append("email",formdata.email)
        Inputfields.append("password",formdata.password)
        Inputfields.append("myfile",formdata.myfile)
        Inputfields.append("phoneno",formdata.phoneno)

        e.preventDefault();
        // if (!formdata.name || !formdata.email || !formdata.password || !formdata.phoneno || !formdata.myfile) 
        // {
        //     alert("Please fill in all the fields");
        //     return;
        // } //if empty input field alerts a message
        axios.post('http://localhost:5000/addrigister',Inputfields)
        .then((result)=>{
            alert("Email sent successfully")
        })
        setFormdata({
            name: "",
            email: "",
            password: "",
            myfile: "",
            phoneno:""
          });
    }
    return(
        <>
            <h1>Email Verification</h1>
            <form onSubmit={handlesubmit}>
                <label>Username</label>
                <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
                <br/><br/>
                <label>Email</label>
                <input type="email" name="email" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
                <br/><br/>
                <label>Password</label>
                <input type="password" name="password" value={formdata.password} onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
                <br/><br/>
                <label>phoneno</label>
                <input type="phoneno" name="phoneno" value={formdata.phoneno} onChange={(e)=>setFormdata({...formdata,phoneno:e.target.value})}/>
                <br/><br/>
                <label>File Upload</label>
                <input type="file" name="myfile" onChange={(e)=>setFormdata({...formdata,myfile:e.target.files[0]})}/>
                <br/><br/>
                <input type="submit" value="submit"/>

            </form>
        </>
    )
}
export default Registerform;

   
    