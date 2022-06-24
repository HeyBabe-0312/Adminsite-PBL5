import React from 'react'
import {BsEye} from 'react-icons/bs'

export default function HistoryBuy({hoverChange,idGD,dateGD,mnGD}) {
  return (
    <tr>
        <td>{idGD}</td>
        <td >{xuliDate(dateGD)+" "+xuliDay(dateGD)}</td>
        <td>{xuliMoney(mnGD)}.000</td>
        <td ><BsEye onMouseOver={function(event){hoverChange(idGD,mnGD)}} onMouseOut={function(event){hoverChange(idGD,mnGD)}}  className="iconfont1" size="20px"/></td>
    </tr>
  )
}
function xuliDay(val){
  var year = val.substring(0,4);
  var month = val.substring(5,7);
  var dt = val.substring(8,10);
  
  var day = year+'-' + month + '-'+dt;
  return(day);
}
function xuliDate(val){
  var hour = val.substring(11,13);
  var minute = val.substring(14,16);
  
  var daytime = hour+':'+ minute;
  return(daytime);
}
function xuliMoney(val){
  let length = val.toString().length;
  let xuli = "";
  if(length > 6) xuli = val.toString().slice(0,-6)+"."+ val.toString().slice(-6,-3)+"."+ val.toString().slice(-3);
  else if (length > 3) xuli = val.toString().slice(0,-3)+"."+ val.toString().slice(-3);
  return xuli;
}

