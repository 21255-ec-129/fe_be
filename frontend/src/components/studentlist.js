import Person from "./person"
    const Stulist=()=>{
        let list=[{
            name:"suma",
            rollno:"12"
        },
        {
            name:"meena",
            rollno:"34"
    
        }]
        return(
            <>
            {
                list.map((ele)=>{
                  // return(<p>{ele.name} {ele.rollno}</p>)//for to display the above data
                  return(ele.name +"."+ele.rollno)
                }
                )
            }
            </>
        )
        }
        export default Stulist