import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import "./Navbar.css";
import {SidebarData} from '../sidebar/sidebarData'
import {IconContext} from 'react-icons'
import {BsFillBellFill} from 'react-icons/bs'
import '../../styles/modal.css'
import '../../styles/table.css'
import AdminInfo from '../../modals/AdminInfo';
import Messeger from '../../modals/messeger';
import EditAdmin from '../../modals/editAdmin';
import ChangePass from '../../modals/changePass';
import axios from 'axios';

function Navbar() {
  const [dataMesseger, setDataMesseger] = useState([]);
  const [dataAdmin, setDataAdmin] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);

  const [detail, setStateE] = useState(false)
  const showInfo = () =>{
    setStateE(!detail);
  }

  const [messeger, setMesseger] = useState(false)
  const showMesseger = () => setMesseger(!messeger);

  const [changePW, setChangePW] = useState(false);
  const getChangePW = () => setChangePW(!changePW);

  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    setStateE(!detail);
    setEdit(!editform)};
  const closeEdit = () => {
    setEdit(!editform);
  }
  const handleLogout = (value) => {
    if(value === "Log out"){
      if(window.confirm("Are you sure you want to log out?")){
        localStorage.removeItem('token');
        window.location.href = "/";
      }
      else return;
    }
  }
  const logout = () => {
    if(window.confirm("Are you sure you want to log out?")){
      localStorage.removeItem('token');
      window.location.href = "/";
    }
    else return;
  }
  useEffect(() => {
    const getMessNum = () => {
      axios.get('/tb/list/').then(res => {
        setDataMesseger(res.data);
      })
    }
    const getDataAdmin = () => {
      axios.get(`/user/detail/${localStorage.getItem("token")}`).then(res => {
        setDataAdmin(res.data);
      })
      axios.get(`/userPer/getByUserId/${localStorage.getItem("token")}`).then((response) =>{
        setRoleData(response.data);
      });
    }
    getMessNum();
    getDataAdmin();
  },[]);
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
function checkTimeNow(data){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  const myArray = data.split(":");
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
  const AddNewMess = async (data) => {
    await axios.post('/tb/add',data);
    window.alert("Send mess to user successfully!");
    window.location.reload();
  }
  async function yourFunction(){
    var listRoom = await axios.get('/room/list');
    var fillRoom = listRoom.data.result.filter(function (el) {
      return el.Status.localeCompare("ON")===0;
    })
      for(var i =0; i<fillRoom.length; i++){
        var lc = await axios.get(`/lc/detail/${fillRoom[i].Id_lich_chieu}`);
        if(!lc.data.result){
          const dataRoom = {
            Status: 'OFF', 
            Id_lich_chieu: "NULL",
            Room_Id: fillRoom[i].Room_Id
          }
          await axios.put('/room/update',dataRoom);
        }
        if(new Date((new Date()).valueOf()).toLocaleDateString('fr-CA').localeCompare(xuliDay(lc.data.result[0].thoi_gian_chieu))===0){
          var phim = await axios.get(`/phim/detail/${lc.data.result[0].id_phim}`);
          if(checkTimeNow(getTime(xuliDate(lc.data.result[0].thoi_gian_chieu),phim.data.result[0].thoi_luong))){
            const dataRoom = {
              Status: 'OFF', 
              Id_lich_chieu: "NULL",
              Room_Id: fillRoom[i].Room_Id
            }
            await axios.put('/room/update',dataRoom);
            await axios.put(`/seat/reset/${fillRoom[i].Room_Id}`);
          }
        }else{
          var d1 = new Date();
          var d2 = new Date(xuliDay(lc.data.result[0].thoi_gian_chieu));
          var diff = d1.getTime() - d2.getTime();
          if(diff/(1000 * 3600 * 24)>0){
            const dataRoom = {
              Status: 'OFF', 
              Id_lich_chieu: "NULL",
              Room_Id: fillRoom[i].Room_Id
            }
            await axios.put('/room/update',dataRoom);
          }
        }
      }
    //window.location.reload();
    setTimeout(yourFunction, 60000);
  }
  yourFunction();
  
  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
      <div className="menu_bars">
          <Link to='#'>
              <AiOutlineBars size={35} style={{color: "#9E4242"}} onClick={showSidebar} />
          </Link>
        </div>
        <div className="sidebar__img">
        <Link to='/'><img style={{marginTop: '12px'}} src="https://i.postimg.cc/25yXkc0N/logo.png" height="60" width="180"/></Link>
              
            </div>
        <div className="navbar__right">
        <div className="dropdown">
             <a className="btn btn-secondary dropdown-toggle" onClick={showMesseger} >
                     <BsFillBellFill className='bell-btn' size={25} alt="avatar1" style={{float: 'right', color: "#9E4242",marginRight: '20px'}} />
        </a>
        </div>
        <div class="dropdown">
          <img width="38" height="38" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-8.jpg" alt="avatar" id="avaInfo"/>
          <div class="dropdown-content">
              <a onClick={showInfo}>Thông tin admin</a>
              <a onClick={getChangePW}>Đổi mật khẩu</a>
              <a onClick={logout}>Đăng xuất</a>
  </div>
</div>
      </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path} onClick={function(event){handleLogout(item.title)}}>
                              {item.icon}
                              <span >{item.title}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </nav>
      <ChangePass detail={changePW} showForm={getChangePW}/>
      <AdminInfo detail={detail} showInfo={showInfo} showEdit={showEdit} dataAdmin={dataAdmin?dataAdmin:""} roleData={roleData}/>
      <Messeger openMess={messeger} showMess={showMesseger} dataMess={AddNewMess} idMess={dataMesseger}/>
      <EditAdmin infoEdit={editform} showEdit={showEdit} closeEdit={closeEdit} dataAdmin={dataAdmin?dataAdmin:""}/>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;