import { useState } from "react"
import axios from "axios";
function Form(){
    const [Formdata,setFormData]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':''
    })//const formdata={'fname','lname'}
    //console.log(formdata)
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(Formdata)
         axios.post('http://localhost:5000/adddata',{Formdata}).then((res)=>console.log(res.data))//it show ntw error thats why we write below code
        // fetch('http://ocalhost:5000/addstudent',{
        //     method:'post',
        //     headers:{'Content-type':'application.json'},
        //     body:JSON.stringify({Formdata})

        // })
        // .then(response => response.json())
        // .then(data => console.log(data));
    }
    return(
        <div>
<h3>form data</h3>
<form onSubmit={handlesubmit}>
    <lable>name</lable>
    <input type="text" name="name" onChange={(e)=>setFormData({...Formdata,name:e.target.value})}></input><br/>
    <lable>rollno</lable>
    <input type="text" name="rollno" onChange={(e)=>setFormData({...Formdata,rollno:e.target.value})}></input><br/>
    <lable>college</lable>
    <input type="text" name="college" onChange={(e)=>setFormData({...Formdata,college:e.target.value})}></input><br/>
    <lable>branch</lable>
    <input type="text" name="branch" onChange={(e)=>setFormData({...Formdata,branch:e.target.value})}></input><br/>
    <label>submit</label>
    <input  type="submit" value="submit" ></input>

</form>
        </div>
    )
}export default Form