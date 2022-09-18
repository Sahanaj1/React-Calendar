import React from 'react'
import "./calend.css"
function Calend() {
    const arr=
        {
        0:"sun",
        1:"mon",
        2:"tue",
        3:"wed",
        4:"thu",
        5:"fri",
        6:"sat"
        }
    const mons={
        0:"jan",
        1:"feb",
        2:"mar",
        3:"apr",
        4:"may",
        5:"june",
        6:"july",
        7:"aug",
        8:"sep",
        9:"oct",
        10:"nov",
        11:"dec"
    }
    const val= Object.keys(arr);
    const monsVal=Object.keys(mons);    
    // var mon=new Date().getMonth();
    var mon=new Date().getMonth();
    var date=4;
    var day=new Date().getDay();
    var year=new Date(2021);
    // var year=new Date().getFullYear();
    // console.log(mon+1, "month printed")
    // console.log(year, "year printed");
    // console.log(date,"date printed");
    // console.log(day,"day printed")


function getDay(val,day,arr){
        for(let i=0;i<val.length;i++){
            if(day===i){
                return arr[i]
            }
        }
}
function getMonth(monsVal,mon,mons){
    for(let i=0;i<monsVal.length;i++){
        if(mon===i){
            return mons[i];
        }
    }
}

function NodaysInMonth(mon, year) {
    return 32 - new Date(year, mon, 32).getDate();
 }
// console.log(day,date,year,`${daysInMonth(mon,year)} days`);

function getDaysInMonth(mon, year) {
    var date = new Date(year, mon, 1);
    var days = [];
    while (date.getMonth() === mon) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

var ans1=getDay(val,day,arr);
var ans2=getMonth(monsVal,mon,mons);
var ans3=NodaysInMonth(mon, year);
var ans4=getDaysInMonth(mon, year);
console.log(`day is ${ans1},month is ${ans2},num of days in this month are ${ans3},all the days in the month are ${ans4}`);
  return (
    <>
    {/* <h1>{mon}</h1>
    <h2>{day}</h2>
    <h2>{year}</h2> */}
    <div className="body">
    <div className="container">
        <div className="month-week">
            <h1>september</h1>
            <div className="m_w">
                <span>month</span>
                <span>week</span>
            </div>
        </div>
        <div className="weeks">
            <span>sun</span>
            <span>mon</span>
            <span>tue</span>
            <span>wed</span>
            <span>thur</span>
            <span>fri</span>
            <span>sat</span>
        </div>
        <div className="days">
        
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
        </div>
        <div className="days">
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
        </div>
        <div className="days">
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
        </div>
        <div className="days">
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
        </div>
        <div className="days">
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span className='next-month'>1</span>
            <span className='next-month'>2</span>
            <span className='next-month'>3</span>
            <span className='next-month'>4</span>
        </div>
    </div>
        
    </div>
    </>
  )
}

export default Calend