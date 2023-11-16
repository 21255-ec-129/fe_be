import img1 from './img1.jpg'
import img2 from '../img2.jpg'
const Img=()=>{
    return(
        <div>
            <h2>image from comp folder</h2>
            <img src={img1} style={{height:200,width:200}}/>
            <img src={img2} style={{height:200,width:200}}/>

        </div>
    )
} 
export default Img