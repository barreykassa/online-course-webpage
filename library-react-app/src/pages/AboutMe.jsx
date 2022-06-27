import React from "react";
import "../css/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="all">
      <div  className="aboutContainer">
        <img  className="aboutContainer img1" src={require("../media/pic3.jpg")} alt="" />
        <div  className="aboutContainer con">
          <h3 className="aboutContainer con h3">Bari Kassa <br/> <span>Lead React Instructor | Mentor for Junior Web Developers</span></h3>
          {/* <h4 className="aboutContainer con h4 ">Lead React Instructor | Mentor for Junior Web Developers</h4> */}
          
          <p className="aboutContainer con p">
            Bari Kassa Lead React Instructor | Mentor for Junior Web
            Developers I am doing software development for 1 year. I have my
            own business for mentoring junior web developers and teaching
            courses for the last 12 mounth. I have led  successful web
            full-stack bootcamps with many graduates working as web developers.
            I have  online courses on udemy using my unique way of teaching.
            All of this gives me the experience and capabilities required to
            mentor junior web developer in the way to your first programming job
          </p>
        </div>
      </div>
        <div className="images " >
          <img className="images item" src={require("../media/pic.jpg")} alt="" />
          <img className="images item" src={require("../media/pic1.jpg")} alt="" />
          <img className="images item" src={require("../media/pic2.jpg")} alt="" />
          <img className="images item" src={require("../media/pic4.jpg")} alt="" />
        </div>
    </div>
  );
}
