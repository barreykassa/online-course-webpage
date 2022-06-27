import React, { useState } from "react";
import Calendar from "react-calendar";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";

export default function Schedual({authschedual,setAuthSchedual}) {

  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
 if (authschedual==null){
   return <Redirect to="/Home" />
 }
  return <div>Schedual
    <Calendar onChange={onChange} value={date} />
    {date.toString()}
   
  </div>;
}
