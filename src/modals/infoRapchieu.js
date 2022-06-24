import React,{useState, useEffect} from 'react'
import '../styles/room.css'
import Seat from '../Router/seat'
import axios from 'axios'

 const InfoRapchieu = ({infoRoom,modalCloseDetail,roomId,roomData}) => {
     const [dataSeatRow, setDataRow] = useState(null);
     const [listSeatCol, setListSeatCol] = useState(null);
     const [tenFilm, setTenFilm] = useState("");
    //  const [listChoose, setListChoose] = useState([]); //
    //  const [closeRoom, setCloseRoom] = useState(false); //
    //  const changeCloseRoom = () => {        //
    //   setCloseRoom(!closeRoom);             //
    //  }                                      //
    //  const updateListChoose = (id) => {     //
    //    if(!listChoose.includes(id)) setListChoose(arr => [...arr,id] )   //
    //    else {                                       //
    //      let newArr = [...listChoose];              //
    //      newArr.splice(listChoose.indexOf(id),1);   //
    //      setListChoose(newArr); //                  //
    //    }                                    //
    //  }                                      //
    //  const resetListChoose = () => {        //
    //    setListChoose([]);                   // 
    //  }                                      //
    //  console.log(listChoose);               //
     var lengthSeat=0;
     useEffect(() => {
        const getSeatRow = async () => {
            await axios.get(`/seat/getByRoomId/${roomId}`).then(res => {
                setDataRow(res.data);
            })
          }
          const loadData = async () => {
            try{
              var lc = await axios.get(`/lc/detail/${roomData.result[roomId-1].Id_lich_chieu}`);
              var phim = await axios.get(`/phim/detail/${lc.data.result[0].id_phim}`);
              setTenFilm(phim.data.result[0].ten_phim);
            }catch(e){
              setTenFilm("Chưa có phim đặt lịch");
            }
              
          }
          const getListSeatCol = async () => {
            await axios.get('/seatNo/list').then(res => {
                setListSeatCol(res.data);
            })
          }
          loadData();
          getSeatRow();
          getListSeatCol();
     },[roomId])
    const compare =( a, b ) => {
        if ( a.Row_No < b.Row_No ){
          return -1;
        }
        if ( a.Row_No > b.Row_No ){
          return 1;
        }
        return 0;
      }
      if(listSeatCol){
        var newArray = listSeatCol.result.filter(function (el) {
            var i = (roomId-1)*10;
          return el.Seat_Id.toString().localeCompare(i+1) === 0 || el.Seat_Id.toString().localeCompare(i+2) === 0 || el.Seat_Id.toString().localeCompare(i+3) === 0 || el.Seat_Id.toString().localeCompare(i+4) === 0 || el.Seat_Id.toString().localeCompare(i+5) === 0
                || el.Seat_Id.toString().localeCompare(i+6) === 0 || el.Seat_Id.toString().localeCompare(i+7) === 0 || el.Seat_Id.toString().localeCompare(i+8) === 0 || el.Seat_Id.toString().localeCompare(i+9) === 0 || el.Seat_Id.toString().localeCompare(i+10) === 0;
        });
        var seatBought = newArray.filter(function (el) {
          return el.Status.toString().indexOf(1) > -1;
        });
        lengthSeat =seatBought.length;
    }
      if(dataSeatRow){
        
    return (
        <div className="bg-modal" style={{display: infoRoom ? 'flex' : 'none' }}>
            <div className="modal-cinema" >
                <div className="close" onClick={function(event){modalCloseDetail(false)}}>+</div>
                <h3 style={{fontFamily: 'Segoe UI'}}>ROOM {roomId}: {tenFilm}</h3>
                <div className='size-canvas'>
                <ul class="showcase">
                <li>
                    <div class="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div class="seat occupied"></div>
                    <small>{lengthSeat}/100 Seat</small>
                </li>
                <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                </li>
                </ul>

                    <div class="container">
                    <div class="screen"></div>
                    {React.Children.toArray(
                    dataSeatRow.result.sort(compare).map(d=>(
                     <Seat seatId={d.Seat_Id} seatName={d.Row_No}/>
                    )))}
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default InfoRapchieu;
