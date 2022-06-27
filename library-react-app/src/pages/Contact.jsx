import React from "react";
import "../css/Contact.css";
import {FaMailBulk} from "react-icons/fa"


export default function Contact() {
  return (
    <div className="contact-con">
      <div className="contact-con-box">
        <p className="contact-con-box-p"><FaMailBulk style={{color:"white"}}/>
          Email:barigk123@gmail.com <br />
          <span>Register to My Email List</span>
        </p>
      </div>
    </div>
  );
}
