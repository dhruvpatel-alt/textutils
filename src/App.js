// import logo from './logo.svg';
import Navbar from './component/Navbar';
import './App.css';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
} 
)
setTimeout(() => {
  setalert(null);
}, 2000); 
  }
  const togglemode=()=>{
    if(mode==='light'||mode==='danger'){
      setmode('dark');
      document.getElementById("defaultCheck2").checked = false;
      let text=document.getElementsByClassName("container-fluid")
      text[0].style.color="white";
      let home=document.getElementsByClassName("nav-a active")
      home[0].style.color="white"; 
 
      document.title="TEXTUTILS DARK MODE";
      document.body.style.backgroundColor = "#0e0e39";
      showalert("DARK MODE ENABLE","success")
    }
    else{
      document.body.style.backgroundColor = "#eab6de";
      setmode('light');
      let text=document.getElementsByClassName("container-fluid")
      text[0].style.color="black";
      let home=document.getElementsByClassName("nav-a active")
      home[0].style.color="black"; 
  
      document.title="TEXTUTILS light MODE";
      showalert("LIGHT MODE ENABLE","success")
    }
  }
  const redmode=()=>{
    if(mode==='light'||mode==='dark'){
      document.getElementById("defaultCheck1").checked = false;
      setmode('danger');
      document.body.style.backgroundColor = "#ff0000ba";
      let text=document.getElementsByClassName("container-fluid")
      text[0].style.color="white";
      let home=document.getElementsByClassName("nav-a active")
      document.title="TEXTUTILS red MODE";
      home[0].style.color="white";
    
      showalert("RED MODE ENABLE","success")
    }
    else{
      document.body.style.backgroundColor = "#eab6de";
      setmode('light');
      let text=document.getElementsByClassName("container-fluid")
      text[0].style.color="black";
      let home=document.getElementsByClassName("nav-a active")
      home[0].style.color="black";
      
      document.title="TEXTUTILS light MODE";
      showalert("LIGHT MODE ENABLE","success")
    }
  }

  
  return (
<>
<Router>
<Navbar title="TEXTUTILS" mode={mode} redmode={redmode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className="container">
 <Switch>
          <Route exact path="/about">
            <About/>
          </Route>  
          <Route  path="/">
<Textform  showalert={showalert} heading="Enter the text to analize" mode={mode}/>
           </Route>
        </Switch> 
</div>
</Router>
</>
  );
}

export default App;
