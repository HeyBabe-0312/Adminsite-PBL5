import React, { useState,useEffect } from 'react'
import {BiAlarmAdd} from 'react-icons/bi'
import ListGioChieu from '../Router/listGioChieu'
import DetailGiochieu from './detailGiochieu'
import axios from 'axios'

export default function Giochieuphim({infogiochieu,modalCloseInfo,time,timeFilm,idFilm}) {
  const [infoDetailGC,setGC] = useState(false);
  const [dataLC,setDataLC] = useState(null);
  const [timeGCPhim,setTimeGCPhim] = useState(null);
  const changeGC = (val,id) => {
    setGC(val);
    setTimeGCPhim(id);
  }
  useEffect(()=>{
    const getDataLC = () => {
      axios.get('/lc/list').then(res => {
        setDataLC(res.data);
      })
    }
    getDataLC();
  },[])
  var timeLC="";
  var dataTimeLC;
  const getData = () =>{
    timeLC = document.getElementById("myTimeLC1").value;
  }
  if(infogiochieu){
    document.getElementById("myTimeLC1").value="";
  }
  const getDataTimeLC = (idRoom) => {
      return dataTimeLC = {
          id: null, 
          id_phim: idFilm,
          thoi_gian_chieu: time+" "+timeLC+":00",
          room_id: idRoom
      }
  }
  const newLC = async () => {
    var listRoom = await axios.get('/room/list');
    var emptyRoom = listRoom.data.result.filter(function (el) {
      return el.Status.localeCompare("OFF")===0;
    })
    if(emptyRoom.length!==0) {
      await axios.post('/lc/add',dataTimeLC);
      var lcList = await axios.get("/lc/list");
      const dataRoom = {
        Status: 'ON', 
        Id_lich_chieu: lcList.data.result[lcList.data.result.length-1].id,
        Room_Id: emptyRoom[0].Room_Id
      }
      getDataTimeLC(emptyRoom[0].Room_Id);
      await axios.put('/room/update',dataRoom);
      window.alert("Added successfully!");
      window.location.reload();
    }
    else{
      window.alert("The room is out, check again!");
    }
    }
    function checkTimeNow(){
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      
      if (hour < 10) {
        hour = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      const myArray = timeLC.split(":");
      if(parseInt(myArray[0])-parseInt(hour)>0){
        return false;
      }else if(parseInt(myArray[0])-parseInt(hour)===0){
        if(parseInt(myArray[1])-parseInt(minute)>0){
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    }
    function check21h(){
      const myArray = timeLC.split(":");
      if(parseInt(21)-parseInt(myArray[0])>0){
        return false;
      }else if(parseInt(21)-parseInt(myArray[0])===0){
        if(parseInt(1)-parseInt(myArray[1])>0){
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    }
    function check8h(){
      const myArray = timeLC.split(":");
      if(parseInt(myArray[0])-parseInt(7)>0){
        return false;
      }else if(parseInt(myArray[0])-parseInt(7)===0){
        if(parseInt(myArray[1])-parseInt(59)>0){
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    }
    function getTimeNow(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dt = date.getDate();
      
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      var day = year+'-' + month + '-'+dt;
      return(day);
    }
  const checkData = () => {
    if(timeLC === '') {
      alert('Empty Value');
      return false;
    }
    else if (check21h()||check8h()){
      alert('Out Of Time (08h-21h)');
      return false;
    }
    else if (time.localeCompare(getTimeNow())===0&&checkTimeNow()){
      alert('Invalid Time');
      return false;
    }
    else {
      newLC();
      modalCloseInfo(false);changeGC(false);
    }
  }
  if(dataLC){
  var newArray = dataLC.result.filter(function (el) {
    return xuliDay(el.thoi_gian_chieu).toString().substring(0,10).indexOf(time) > -1 && el.id_phim.toString().indexOf(idFilm)>-1;
  });
  return (
    <div className="bg-modal" style={{display: infogiochieu ? 'flex' : 'none' }}>
    <div className={infoDetailGC?"modal-giochieu0":"modal-giochieu"} >
        <div className="close" onClick={function(event){modalCloseInfo(false);changeGC(false)}}>+</div>
        <input type="time" id="myTimeLC1" min="08:00" max="21:00" required onChange={getData}/>
        <button className="btn0" onClick={function(event){getDataTimeLC(1);checkData()}}><BiAlarmAdd size={25}/></button>
        <div className='list-giochieu'>
        {React.Children.toArray(
            newArray.map(d =>(
            <ListGioChieu openGC={changeGC} time={xuliDate(d.thoi_gian_chieu)} timeFilm={timeFilm} idGC={d.id}/>
            )))}
        </div>
    </div>
    {timeGCPhim?<DetailGiochieu infoDetailGC={infoDetailGC} closeDetail={changeGC} idGC={timeGCPhim} />:<></>}
</div>
  )
  }
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
  var day = year+'-' + month + '-'+dt;
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
  var daytime = hour+':'+ minute;
  return(daytime);
}
