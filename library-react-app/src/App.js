import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Schedual from "./coponents/Schedual";
import { useState } from "react";
// ------
import {FaGithub,FaLinkedinIn,FaYoutube,FaWhatsapp,FaMailBulk,FaSpinner} from "react-icons/fa"
import {GrSchedule} from "react-icons/gr"
import {GiHamburgerMenu} from "react-icons/gi"
import { BiLock } from "react-icons/bi";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  const [authorized,setAuthorized]=useState(null);
  const [authschedual,setAuthSchedual]=useState(false);
  const [toggleButton,setToggleButton]=useState(false);
 
 

  return (
    <BrowserRouter>
    
      <div className="App">
        <div className="appVavBar" >
        <h2 className="appVavBar p">
            <span className="first">Bari</span> <span className="second" style={{color:"white"}}>Kassa</span>
          </h2>
          <GiHamburgerMenu className="toggle-button" onClick={()=>{
            setToggleButton(!toggleButton);
            // console.log(toggleButton);
          }}/>
        <div className="divNavbar" style={{display:toggleButton?"flex":""}} >
        {authorized?"":<Link className="appVavBar-links" to="/">Home</Link>}
        { authorized?"":<Link className="appVavBar-links" to="/AboutMe">AboutMe</Link>}
        {authorized?"":<Link className="appVavBar-links" to="/Contact">Contact</Link>}
        {/* <Link className="appVavBar-links" to="/Courses">Courses</Link> */}
        {authorized?<Link className="appVavBar-links courses" to="/Courses">Courses</Link>:""}
        {authorized?"":<Link className="appVavBar-links" to="/Login">Login</Link>}
        {authorized?"":<Link className="appVavBar-links" to="/SignUp">SignUp</Link>}
        {authorized?"":<Link className="appVavBar-links" to="/Schedual" style={{display:"none"}}>Schedual</Link>}
        {/* <Home /> */}
        {/* <h1 style={{color:"white"}}>dabi</h1> */}
        </div>
        </div>
        <Switch>
          <Route exact path="/" render={()=><Home authorized={authorized} setAuthorized={setAuthorized} toggleButton={toggleButton}/>}></Route>
          <Route exact path="/AboutMe" render={()=><AboutMe/>}></Route>
          <Route exact path="/Contact" render={()=><Contact/>}></Route>
          <Route exact path="/Courses" render={()=><Courses authorized={authorized} setAuthorized={setAuthorized} />}></Route>
          <Route exact path="/Login" render={()=><Login authorized={authorized} setAuthorized={setAuthorized}/>}></Route>
          <Route exact path="/SignUp" render={()=><SignUp authorized={authorized} setAuthorized={setAuthorized}/>}></Route>
          <Route exact path="/Schedual" render={()=><Schedual authschedual={authschedual} setAuthSchedual={setAuthSchedual} />}></Route>
        </Switch>
        <button className='btn' onClick={()=>{
          console.log("clicked");
          setAuthSchedual(!authschedual)
          }}>
          {authschedual? <Redirect to="/Schedual"/>:<Redirect to="/"/>}
          {/* {authschedual? <Redirect to="/"/>:<Redirect to="/Schedual"/>} */}
             <GrSchedule/> schedual 1x1 with Bari </button>

        <div className='icons' > 
         <a  className='icons items' href="https://github.com/"><img src="" alt="" /><FaGithub style={{color:"white"}}/></a>
         <a  className='icons items' href="https://www.linkedin.com/feed/"><img src="" alt="" /><FaLinkedinIn style={{color:"#00BFFF"}}/></a>
         <a  className='icons items' href="https://www.youtube.com/"><img src="" alt="" /><FaYoutube style={{color:"red"}}/></a>
         <a  className='icons items' href="https://mail.google.com/mail/u/0/#inbox"><img src="" alt="" /><FaMailBulk style={{color:"white"}}/></a>
         <a  className='icons items' href="https://mail.google.com/mail/u/0/#inbox"><img src="" alt="" /><FaWhatsapp style={{color:"#00ff00"}}/></a>
        </div> 
        <p className='footer-cy' style={{color:"white"}}>© 2020-2022 BARI KASSA. ALL RIGHTS RESERVED.</p>

      </div>
    </BrowserRouter>
  );
}

export default App;
