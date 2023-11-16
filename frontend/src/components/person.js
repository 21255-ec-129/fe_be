function Person(props){
//     return(
//         <div>
// <h2>student name is {props.name}</h2>
// <h2>student rollno is {props.rollno}</h2>
// <h2>student clg is {props.clg}</h2>
// <h2>student brn is {props.branch}</h2>
//         </div>
//     )

return(
        <tr>
            <td>{props.name}</td>
            <td>{props.rollno}</td>

        </tr>
)

// return(
//     <div>
      
//                <li>{props.name}</li>
                
       
//     </div>
// )
}export default Person