import React from "react";
import { useState } from "react";
import {BiLogInCircle} from "react-icons/bi"
import {BsFacebook,BsApple} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {FaSpinner} from "react-icons/fa"
import "../css/Login.css"
import axios from "axios"
import { Redirect } from "react-router-dom";


function Login({authorized,setAuthorized}) {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [submitWarning,setSubmitworning]=useState(null);
  const API_KEY=`AIzaSyBZouLrigl7dstVaFLWQOc5mX-GmiX2bzU`
  const URL= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

  function authenticationHandler(){
    axios.post(URL, {
      email:email,
      password:password
      })
      .then(function (response) {
        setAuthorized(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  
  }

  const passwordHandler=()=>{
    if(password.length==0 ){
     return setSubmitworning("the password input is empty")
    }
   else if(password.length>0 && password.length <6 ){
    return  setSubmitworning("the password is less than six letters");
    }
    authenticationHandler() 
  }

const spinnerHandler=()=>{

}


  if(authorized){
    return <Redirect to="/Courses"/>
   }

  return (
    <div >
    <div className="login-container">
     <div className="login-head" >
      <span className="login-head logo"><BiLogInCircle className="login-head items"/></span><br />
      <span className="login-head log">Log in</span><br />
      <span className="login-head p ">Not a member yet? <span>Sighn up</span></span>
    
     </div>
     <div className="login-con-inputs">
     <form  onSubmit={(e)=>{
      e.preventDefault()
      passwordHandler()
      console.log(email,password)}}>
      <p className="login-p">Email </p>
      <input  onChange={(e)=>{setEmail(e.target.value)}} className="login-inputs-inputs" type="email" /><br />
      <p className="login-p"> Password </p>

      <input  onChange={(e)=>{setPassword(e.target.value)}} className="login-inputs-inputs" type="password" /><br />
      <input type="submit" id="login-btn" value="Submit" />
      </form>
     </div>
     <p style={{color:"red"}}>{submitWarning}</p>
     <p>____________or_______________</p>
     <div className="login-icon">
      <button className="login-icon-btns"><BsFacebook/> Log in with Facebook</button><br />
      <button className="login-icon-btns"><FcGoogle/> Log in with Google</button><br />
      <button className="login-icon-btns"><BsApple/> Log in with Apple</button><br />
     </div>
     <p><a href="">Issues with log in?</a></p>
     </div>
    </div>
  );
}

export default Login;
