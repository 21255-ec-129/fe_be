import { useState } from "react"
import axios from "axios";
function User(){
    const [userdata,setUserData]=useState({
        'username':'',
        'password':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(userdata)
         axios.post('http://localhost:5000/adduser',{userdata}).then((res)=>console.log(res.data))//it show ntw error thats why we write below code
        
    }
    return(
        <div>
<h3>form data</h3>
<form onSubmit={handlesubmit}>
    <lable>username</lable>
    <input type="text" name="username" onChange={(e)=>setUserData({...userdata,username:e.target.value})}></input><br/>
    <lable>password</lable>
    <input type="password" name="password" onChange={(e)=>setUserData({...userdata,password:e.target.value})}></input><br/>
    <label>submit</label>
    <input  type="submit" value="submit" ></input>
</form>
        </div>
    )
}export default User