import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "../css/Home.css"
import {FaGithub,FaLinkedinIn,FaYoutube,FaWhatsapp,FaMailBulk} from "react-icons/fa"
import {GrSchedule} from "react-icons/gr"
import Schedual from '../coponents/Schedual';


// 
export default function Home({authorized,setAuthorized,toggleButton}) {

  return (
     
    <div className='div'  >
      {/* style={{marginTop:toggleButton?"300px":"0px",backgroundColor:toggleButton?"black":"black"}} */}
    
        <div className="ads" >
          <p className="ads item">office hours</p>
          <p className="ads item" style={{color:"#00BFFF"}}>Register here</p>
          <p className="ads item">Weekly Sun-Sat 8:00 AM to 9:00 PM </p>
        </div>
        <div className='background-container'>
        <img className="image" src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg" alt="" />
        <h3 className='title'>React Courses & <br/><span className='mentoring'>Mentoring</span> <br/><span className='line'>____</span></h3>
        {/* <button className='btn' onClick={()=>{setAuthorized(!authorized)}}> <GrSchedule/> schedual 1x1 with Bari </button> */}

        </div>
        {/* <p className='footer-cy' style={{color:"white"}}>© 2020-2022 BARI KASSA. ALL RIGHTS RESERVED.</p> */}
        
    </div>
  
  )
}
