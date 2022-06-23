import React from 'react'

export default function ListGioChieu({openGC,time,timeFilm,idGC}) {
  return (
    <>
      <span className='item-giochieu' onClick={function(event){openGC(true,idGC)}}>{time} - {getTime(time,timeFilm)}</span>
    </>
  )
}
function getTime(val,valFilm){
    var hour = parseInt(val.substring(0,2));
    var minute = parseInt(val.substring(3,5));
    var subHour = parseInt(valFilm.substring(0,2));
    var subMinute = parseInt(valFilm.substring(3,5));
    var hourEnd = hour + subHour;
    var minuteEnd = minute + subMinute;
    if(minuteEnd>=60) {
      minuteEnd = minuteEnd - 60;
      hourEnd+=1;
    }
    if(hourEnd>=24) hourEnd = hourEnd - 24;
    if(hourEnd<10) hourEnd = '0' + hourEnd;
    if(minuteEnd<10) minuteEnd = '0' + minuteEnd;
    return hourEnd + ":" + minuteEnd;
}
