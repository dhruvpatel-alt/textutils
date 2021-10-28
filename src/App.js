// import logo from './logo.svg';
import Navbar from './component/Navbar';
import './App.css';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';
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
      let text=document.getElementsByClassName("navbar-brand")
      text[0].style.color="white";
      let home=document.getElementsByClassName("nav-link active")
      home[0].style.color="white"; 
       let about=document.getElementsByClassName("nav-link about")
      about[0].style.color="white";
      document.title="TEXTUTILS DARK MODE";
      document.body.style.backgroundColor = "#0e0e39";
      showalert("DARK MODE ENABLE","success")
    }
    else{
      document.body.style.backgroundColor = "#eab6de";
      setmode('light');
      let text=document.getElementsByClassName("navbar-brand")
      text[0].style.color="black";
      let home=document.getElementsByClassName("nav-link active")
      home[0].style.color="black"; 
       let about=document.getElementsByClassName("nav-link about")
      about[0].style.color="black";
      document.title="TEXTUTILS light MODE";
      showalert("LIGHT MODE ENABLE","success")
    }
  }
  const redmode=()=>{
    if(mode==='light'||mode==='dark'){
      setmode('danger');
      document.body.style.backgroundColor = "#ff0000ba";
      let text=document.getElementsByClassName("navbar-brand")
      text[0].style.color="white";
      let home=document.getElementsByClassName("nav-link active")
      document.title="TEXTUTILS red MODE";
      home[0].style.color="white";
      let about=document.getElementsByClassName("nav-link about")
      about[0].style.color="white";
      showalert("RED MODE ENABLE","success")
    }
    else{
      document.body.style.backgroundColor = "#eab6de";
      setmode('light');
      let text=document.getElementsByClassName("navbar-brand")
      text[0].style.color="black";
      let home=document.getElementsByClassName("nav-link active")
      home[0].style.color="black";
      let about=document.getElementsByClassName("nav-link about")
      about[0].style.color="black";
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
            <About />
          </Route>
       
          <Route exact path="/">
<Textform  showalert={showalert} heading="Enter the text to analize" mode={mode}/>
          </Route>
        </Switch>
</div>
</Router>
</>
  );
}

export default App;
