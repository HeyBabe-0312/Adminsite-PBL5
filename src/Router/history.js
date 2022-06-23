import React from 'react'
import {BsEye} from 'react-icons/bs'

export default function HistoryBuy({hoverChange,idGD,dateGD,mnGD}) {
  return (
    <tr>
        <td>{idGD}</td>
        <td >{xuliDate(dateGD)+" "+xuliDay(dateGD)}</td>
        <td>{mnGD}.000d</td>
        <td ><BsEye onMouseOver={function(event){hoverChange(idGD,mnGD)}} onMouseOut={function(event){hoverChange(idGD,mnGD)}}  className="iconfont1" size="20px"/></td>
    </tr>
  )
}
function xuliDay(val){
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dt = date.getDate();
  
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var day = dt+'-' + month + '-'+year;
  return(day);
}
function xuliDate(val){
  var date = new Date(val);
  var hour = date.getHours();
  var minute = date.getMinutes();
  
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  var daytime = hour+'h'+ minute;
  return(daytime);
}

