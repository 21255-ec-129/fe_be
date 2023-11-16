import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Datalist() {
    const [stud,setStud] = useState([]) //let data
    useEffect(() => {
        axios.get('http://localhost:5000/getstudents')
        .then((response) => {
            console.log(response.data.studentdata)
            setStud(response.data.studentdata)
        })
    },[])
    const Deletestu=(id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/deletestudents/'+id)
        .then(res=>{
            if(res.data){
                alert("data deleted succesfully")
                window.location.reload()
            }
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <>
        <table align="center" cellPadding={10} border={1}>
            <tr >
                <th>S.No</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>College</th>
                <th>Branch</th>
                <th colSpan={2}>Actions</th>
            </tr>
            {stud && stud.map((ele,obj,arr) =>
             {
                return(
                    <tr key={obj}>
                        <td>{obj + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><Link to={`/editform/${ele._id}`}><button>Edit</button></Link></td>
                        <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                        {/* inpalce of id we giv name, rollno also for that name as raju for 2 students then both deleted so use uniq */}
                    </tr>
                )
            }
            )}
        </table>
        </>
    )
}
export default Datalist;
