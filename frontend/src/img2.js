import img2 from './img2.jpg'
const Img1=()=>{
    return(
        <div>
            <h2>image from src folder</h2>
            <img src={img2} style={{height:200,width:200}}/>
        </div>
    )
} 
export default Img1