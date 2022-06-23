import React,{useState} from 'react'
import axios from 'axios'

const Rapchieu = ({modalOpenDetail,roomId,roomName,roomStatus,roomIdLC}) => {
  const [dataLC, setDataLC] = useState("");
  const loadData = async () => {
    if(roomIdLC!=="NULL"){
      var lc = await axios.get(`/lc/detail/${roomIdLC}`);
      setDataLC(xuliDate(lc.data.result[0].thoi_gian_chieu));
    }
  }
  loadData();
  return (
    <div className='bg-items-rapchieu' onClick={function(event){modalOpenDetail(true,roomId)}}>
        <div className='bg-image' >
            <div className='image-items' />
        </div>
        <div className='title-items'>
        <span className='title-left'>{roomName}&nbsp;&nbsp;&nbsp;&nbsp;|</span>
            <span className='title-right'>{roomIdLC!=="NULL"?dataLC:"Không có lịch chiếu"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<a style={roomStatus==='ON'?{marginLeft:"25px",color:"green"}:{marginLeft:"25px",color:"red"}}>{roomStatus}</a></span>
        </div>
    </div>
  )
}
function xuliDate(val){
  var year = val.substring(0,4);
  var month = val.substring(5,7);
  var dt = val.substring(8,10);
  var hour = val.substring(11,13);
  var minute = val.substring(14,16);

  var day = hour + 'h' + minute + " " + dt +'/' + month + '/'+ year;
  return(day);
}
export default Rapchieu;
