import React from 'react'
import { Link } from 'react-router-dom';
import "./background.css";
import Calender from './Calender';
function Background() {
  return (
    <>
  <Link to="/calendar" style={{textDecoration:"none",color:"black",marginLeft:"-50px",fontSize:"20px",marginTop:"20px"}}>Visit Calendar made using react-calendar</Link>
    <div className="cal">
      <Calender/>
    </div>
    </>
  )
}

export default Background