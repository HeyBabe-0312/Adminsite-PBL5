import React,{useEffect,useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import axios from 'axios'

export default function DetailGiochieu({infoDetailGC,closeDetail,idGC}) {
  const [dataTimeGC,setdataTimeGC] = useState(null);
  const [dataRoom, setDataRoom] = useState(null);
  useEffect(()=>{
    const getDataGC = async () =>{
      var res = await axios.get(`/lc/detail/${idGC}`);
      setdataTimeGC(res.data);
    }
    const getDataRoom = async () =>{
      var res = await axios.get("/room/list");
      setDataRoom(res.data);
    }
    getDataGC();
    getDataRoom();
  },[])
  if(dataTimeGC&&dataRoom){
    const deleteGC = async (id) => {
      var idRoom = "";
      dataRoom.result.map((d)=>{
        if(d.Id_lich_chieu.toString().localeCompare(id.toString())===0){
            idRoom = d.Room_Id;
        }
      })
      if (window.confirm("Do you want to delete?") == true) {
          await axios.delete(`/lc/delete/${id}`);
          if(idRoom!==""){
            const dataRoom = {
              Status: 'OFF', 
              Id_lich_chieu: "NULL",
              Room_Id: idRoom
            }
            await axios.put('/room/update',dataRoom);
            await axios.put(`/seat/reset/${idRoom}`);
          }
          window.alert("Delete successfully!");
          window.location.reload();
        } else {
          return;
        }
  }
  return (
    <div style={{display: infoDetailGC ? 'flex' : 'none' }}>
    <div className="modal-detailGC" >
      <RiDeleteBin6Line className='icon-GC' size={20}  style={{position:"relative",top:"-13",float:"right",marginRight:"10px"}} onClick={function(event){deleteGC(dataTimeGC.result[0].id)}}/>
        <AiFillCloseCircle className="close-film0" onClick={function(event){closeDetail(false)}} size={20}/>
        <form action>
      <div className="table_content" style={{marginTop:"15px"}}>
        <tbody>
          <tr>
            <td className="no_border">Room</td>
            <td className="no_border"><input type="text" id="roomID" name="room" className="inputE" 
             minLength="4" maxLength="20" size="15" value={dataTimeGC.result[0].room_id} readOnly required/></td>
          </tr>
          <tr>
            <td className="no_border">TimeStart</td>
              <td className="no_border"><input type="text" className="inputE" name="timestart1" autoComplete='off' readOnly value={xuliDate(dataTimeGC.result[0].thoi_gian_chieu)} id="timestart1"  size="15"/></td>
          </tr>
        </tbody></div>
      </form>
    </div>
</div>
  )}
  else{
    return (
      <div style={{display: infoDetailGC ? 'flex' : 'none' }}>
      <div className="modal-detailGC" >
        <RiDeleteBin6Line className='icon-GC' size={20}  style={{position:"relative",top:"-13",float:"right",marginRight:"10px"}}/>
          <AiFillCloseCircle className="close-film0" onClick={function(event){closeDetail(false)}} size={20}/>
          <form action>
        <div className="table_content" style={{marginTop:"15px"}}>
          <tbody>
            <tr>
              <td className="no_border">Room</td>
              <td className="no_border"><input type="text" id="roomID" name="roomID" value="NULL" className="inputE" required
               minLength="4" maxLength="20" size="15" readOnly/></td>
            </tr>
            <tr>
              <td className="no_border">TimeStart</td>
                <td className="no_border"><input type="text" className="inputE" name='timestart1' placeholder='NULL' autoComplete='off' id="timestart1"  size="15"/></td>
            </tr>
          </tbody></div>
        </form>
      </div>
  </div>
    )
  }
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
