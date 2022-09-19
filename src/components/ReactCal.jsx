import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import "./reactcal.css"
function ReactCal() {
    const[date,setDate]=useState(new Date()); 
    const[display,setDisplay]=useState(new Date().toLocaleDateString())
  const onChange=(date)=>{
    setDate(date);
    setDisplay(date.toLocaleDateString());
  }
  useEffect(() =>{
console.log(date)
  }, [date])
  return (
    <div className='calender'>
      <h1 onChange={onChange} >Date Selected:{display}</h1>
        <div className="cal">
          
        <Calendar minDate={new Date()} onChange={onChange} value={date} />
        </div>


    </div>
  )
}

export default ReactCal