import React from "react";
import ReactPlayer from 'react-player';
import { Redirect } from "react-router-dom";
import "../css/Courses.css"
import Home from "./Home";
import Login from "./Login";

export default function Courses({authorized,setAuthorized}) {
  if(authorized===null){
      return <Redirect to="/Login"/>
  }
  return (
    <div className="courses-div">
      <button className="courses-logout-btn" onClick={()=>{setAuthorized(null)}}>Logout</button>
      <p className="courses-div p">Online Courses</p> 
      <div className="course-videos">
      <ReactPlayer className="course-videos items" controls url="https://player.vimeo.com/external/334950213.sd.mp4?s=8e1afd0f11ca85c1b8216ccf49e2e122131bce91&profile_id=164" />
      <ReactPlayer className="course-videos items" controls url="https://media.istockphoto.com/videos/programming-source-code-abstract-background-video-id1046965704" />
      <ReactPlayer className="course-videos items" controls url="https://media.istockphoto.com/videos/hexadecimal-big-data-digital-code-running-through-black-and-blue-in-video-id1325202548" />
      <ReactPlayer className="course-videos items" controls url="https://player.vimeo.com/external/476721252.sd.mp4?s=116e4e0adc535a4a4fa4fd5fb1a844e73d1358f6&profile_id=164" />
      </div>
    </div>
  );
}
