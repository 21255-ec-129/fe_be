import img1 from './img1.jpg'
function Click(){
    const clkFun=()=>{
        alert("clicked")
    }
    const clkFun2=(name)=>{
        alert(name)
    }
    const clikIp=(e)=>{
        // document.write(e.target.value)
        console.log(e.target.value)
    }
    const hw=(k)=>{
        console.log(k)//path of img
       k.target.style.height="500px"
       k.target.style.width="500px"

    }
    const jp=(l)=>{
        //console.log(e)
       l.target.style.height="200px"
       l.target.style.width="200px"

    }
    
    return(
        <div>
            <button onMouseOver={clkFun}>click hear</button>
            <button onClick={()=>clkFun2('gaya3')}>click hear</button>
           <input type="text" name="fname" onChange={clikIp}/>
          <center> <img src={img1}  onMouseOver={hw} onMouseOut={jp}/></center>

        </div>
    )
}export default Click