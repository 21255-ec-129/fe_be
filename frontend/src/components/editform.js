import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

function EditForm() {

    const[form,setForm]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':'',
    })

    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        axios.get('http://localhost:5000/getstudentsbyid/'+id)
        .then((res)=>{
            console.log(res.data)
            setForm(res.data.studentdata)
        })
        .catch((err)=>console.log(err))
    },[])
    
    const sumbit = (obj)=>{
        obj.preventDefault();
        console.log(form);
         axios.put('http://localhost:5000/updatestudent/'+id,form)
         .then((result)=>{
            alert(result.data.msg)
        window.location.reload()
    })
    }
    return(
        <>
        <h1><u>Edit Form Data</u></h1>
        <form onSubmit={sumbit}>
            <label>First Name</label>
            <input type="text" name="name" value={form.name} onChange={(obj)=>setForm({...form,name:obj.target.value})} /><br/><br/>
            <label>Roll.No</label>
            <input type="text" name="rollno" value={form.rollno} onChange={(obj)=>setForm({...form,rollno:obj.target.value})} /><br/><br/>
            <label>College</label>
            <input type="text" name="college" value={form.college} onChange={(obj)=>setForm({...form,college:obj.target.value})} /><br/><br/>
            <label>Branch</label>
            <input type="text" name="branch" value={form.branch} onChange={(obj)=>setForm({...form,branch:obj.target.value})} /><br/><br/>
            <input type="submit" value="update"></input>
            </form>
        </>
)}
export default EditForm;