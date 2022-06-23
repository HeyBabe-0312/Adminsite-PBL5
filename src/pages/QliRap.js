import React,{useState,useEffect} from 'react'
import Rapchieu from '../Router/rapchieu'
import '../styles/qlirap.css'
import InfoRapchieu from '../modals/infoRapchieu'
import axios from 'axios'

function QliRap (){
  const [roomData,setRoomData] = useState(null);
  const [roomId,setRoomId] = useState(1);
  const [infoRoom, setStateE] = useState(false);
  const openRoomDetail = (value,id) => {
    setStateE(value);
    setRoomId(id);
  }
  const closeRoomDetail = value => setStateE(value);
  useEffect(()=>{
    const getRoomData = () =>{
      axios.get('/room/list').then(res => {
        setRoomData(res.data);
      })
    }
    getRoomData();
  },[])
  if(roomData){
  return (
    <main>
    <div className='bg-qlirap'>
    {React.Children.toArray(
      roomData.result.map(d=>(
      <Rapchieu modalOpenDetail={openRoomDetail} roomId={d.Room_Id} roomName={d.Room_Name} roomStatus={d.Status} roomIdLC={d.Id_lich_chieu}/>
      )))}
    </div>
    {roomId===1?<InfoRapchieu infoRoom={infoRoom} modalCloseDetail={closeRoomDetail} roomId={1} roomData={roomData}/>:<InfoRapchieu infoRoom={infoRoom} modalCloseDetail={closeRoomDetail} roomData={roomData} roomId={roomId}/>}
    </main>
  )}
}
export default QliRap;