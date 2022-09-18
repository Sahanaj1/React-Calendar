import { useState,useEffect } from "react";
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import circle from "./assets/circle-one.svg";
import Calend from "./Calend";
import Calender from "./components/Calender";
function App() {
  const[date,setDate]=useState(new Date()); 
  const onChange=(date)=>{
    setDate(date);
  }
  useEffect(() =>{
console.log(date)
  }, [date])

  return (
    <div className="App">
      {/* <div className="container" >
      <Calendar minDate={new Date()} onChange={onChange} value={date}/>
      </div> */}
    

{/* <div className="icon1">
<svg width="29" height="39" viewBox="0 0 49 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.0555 53.4802L42 7.10789e-06L0.208018 58.8979L48.0555 53.4802Z" fill="#FFD3D6"/>
</svg>
</div>
<div className="icon2">
  <svg width="32" height="32" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.5" cy="27.5" r="27.5" fill="#F4D3FF"/>
</svg>
</div>    
<div className="icon3">
<svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#FFD3EB"/>
</svg>
</div>

<div className="icon4">
<svg width="270" height="80" viewBox="0 0 450 124" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2_3)">
<path d="M150.811 94.5384L420.538 -27.2724L29 -175.189L150.811 94.5384Z" fill="#D3EAFF"/>
</g>
<defs>
<filter id="filter0_f_2_3" x="0" y="-204.189" width="449.538" height="327.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_2_3"/>
</filter>
</defs>
</svg>
</div>

<div className="icon5">
<svg width="108" height="152" viewBox="0 0 168 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 44.7756L44.7757 211.881L167.105 -5.97835e-05L0 44.7756Z" fill="#D3DAFF"/>
</svg>
</div>
<div className="icon6">
<svg width="75" height="107" viewBox="0 0 135 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M106.252 0L0.000121095 28.4701L134.722 106.252L106.252 0Z" fill="#DFD3FF"/>
</svg>
</div>
<div className="icon7">
<svg width="311" height="116" viewBox="0 0 311 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2_8)">
<path d="M112.772 220.718L308.718 132.227L24.2823 24.7725L112.772 220.718Z" fill="#FFD3EB"/>
</g>
<defs>
<filter id="filter0_f_2_8" x="0.282349" y="0.772583" width="332.435" height="143.945" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_2_8"/>
</filter>
</defs>
</svg>
</div> */}
  <Calender/>
    </div>
  );
}

export default App;
