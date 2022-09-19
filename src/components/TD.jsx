import React, { useEffect } from 'react'

export default function TD(props) {
    const [ isClicked,setIsClicked ] = React.useState(true);
    const [dateColor,setdateColor] = React.useState('red');

// const tod=new Date().getDate();
// console.log(tod)

    const current = new Date();
    function setColour(){
        if(props.d === current.getDate()){
            setdateColor('blue');
        }else if(props.d < current.getDate()){
            setdateColor('grey');
        }else{
            setdateColor('black');
        }
        return dateColor;
    }
    function handleClick(){
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        setColour();
    },[]);


  return (
    <td onClick={handleClick} style={{backgroundColor : isClicked ?null:"red",color : dateColor}} key={props.d} className={`calendar-day ${props.currentDay}`}>
          <span
            onClick={props.onclick}
          >
            {props.d}
          </span>
    </td>
  )
}
