 import Person from "./person"
 function Orderlist(){
    let n=[{
        name:"meena"
    },
    {
        name:"kana"
    },
    {
        name:"pana"
    },
    {
        name:"eana"
    }]
    return(
        <div>
            <ol>
                {
               n.map((ele)=>{
                return(<Person name={ele.name}/>)
               }
               )} 
            </ol>
        </div>
    )
}export default Orderlist