import Person from "./person"

function Table(){
    let list=[{
        name:"suma",
        rollno:"12"
    },
    {
        name:"meena",
        rollno:"34"

    },
    {
        name:"rock",
        rollno:"23"
    },
    {
        name:"star",
        rollno:"35"
    }
    ]
    return(
        <>
           <table border={1}>
            <tr>
            <th>name</th>
            <th>rollno</th>
            </tr>
            {
            list.map((ele)=>{
                // return(<tr><td>{ele.name}</td><td>{ele.rollno}</td></tr>)
            return(<Person name={ele.name} rollno={ele.rollno}/>)
                 })
             }
            </table> 

        </>
    )
}export default Table