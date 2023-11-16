import { useState } from "react"
function Hooks(){
 const [cnt,setCnt]=useState(0)
const inc=()=>{
    setCnt(cnt+1)
}
    return(
        <div>
<h2>react hooks</h2>
<p>{cnt}</p>
{/* <button onClick={()=>setCnt(cnt+1)}>inc by one</button> */}
<button onClick={inc}> inc by one</button>
        </div>
    )
}export default Hooks