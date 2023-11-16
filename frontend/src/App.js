// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import FruitsSearch from "./task1";
// function App(){
//   return(
//     <div>
//       <h3>task</h3>
//       <FruitsSearch/>
//     </div>
//   )
// }export default FruitsSearch;

import Com1 from "./components/comp1";
import Com2 from "./components/comp2";
import Comp3 from "./components/comp3";
import Classcomp from "./components/class com";
import Img from "./components/img";
import Img1 from "./img2";
import Image from "./components/img3";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Person from "./components/person";
import Stulist from "./components/studentlist";
import Table from "./components/table";
import Orderlist from "./components/ordrlist";
import Click from "./components/clickevent";
import Hooks from "./components/hooks";
import Onoff from "./components/onofffun";
import Calculator from "./components/calculator";
import Form from "./components/form";
import User from "./components/user";
import Editform from "./components/editform";
import Datalist from "./components/datalist";
import Registerform from "./components/rigisterform";
//import Upload from "./components/subfile";
import Signup from "./components/signup";
function App(){
  return(
    <div>
      
      {/* <h3>my fronted app</h3>
      <Com1/>
      <Com2/>
      <Comp3/>
      <Classcomp/>
       <Img/>
       <Img1/>
       <Image/> */}
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Com1/>}/>
     <Route path="/comp2" element={<Com2/>}/>
     <Route path="/comp3" element={<Comp3/>}/>
     <Route path="/clscomp" element={<Classcomp/>}/>
     <Route path="/img1" element={<Img/>}/>
     <Route path="/img2" element={<Img1/>}/>
     <Route path="/img3" element={<Image/>}/>
     <Route path="/person" element={<Person name="gaya3" rollno="129" clg="apc" branch="ece"/>}/>
     <Route path="/studentslist" element={<Stulist/>}/>
     <Route path="/table" element={<Table/>}/>
     <Route path="/ol" element={<Orderlist/>}/>
     <Route path="/clkfun" element={<Click/>}/>
     <Route path="/hooks" element={<Hooks/>}/>
     <Route path="/onof" element={<Onoff/>}/>
     <Route path="/cal" element={<Calculator/>}/>
     <Route path="/form" element={<Form/>}/>
     <Route path="/user" element={<User/>}/>
     <Route path="/getdata" element={<Datalist />}/>
     <Route path="/editform/:id" element={<Editform/>}/>
     <Route path="/rig" element={<Registerform/>}/>
     <Route path="/signup" element={<Signup/>}/>

     {/* <Route path="/upfile" element={<Upload/>}/> */}


       </Routes>
      </BrowserRouter>
       
      
    </div>
  )
}export default App;