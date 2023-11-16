import { useState } from "react";
function Onoff(){
    const [light,door]=useState(false)
    return(
        <div>
            <button onClick={()=>door(true)}>close</button>
            <button onClick={()=>door(false)}>open</button>
            <br/>
            {/* terminary operator synax= con?truestat:false stat */}
            {
                light === false?<img src="door 2.jpeg"/>:<img src="door 3.jpeg"/>
            }

        </div>
    )
}export default Onoff