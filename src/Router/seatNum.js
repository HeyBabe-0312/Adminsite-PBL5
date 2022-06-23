import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'

const SeatNum = ({seatId,seatName,clickFunc,closeRoom}) => {
  const [dataSeatCol, setDataCol] = useState(null);
  // const [activeList, setActiveList] = useState([]);  //
  // useEffect(()=> {                                   //
  //   setActiveList(                                   //
  //     Array(10).fill(false)                          //
  //   )                                                //
  // }, [closeRoom]);                                   //
  // const onClickSeat = (id) => {                      //
  //   let newArr = [...activeList];                    //
  //   newArr[id] = !activeList[id];                    //
  //   setActiveList(newArr);                           //
  // };                                                 //
     useEffect(() => {
        const getSeatCol = async () => {
            await axios.get(`/seatNo/getBySeatId/${seatId}`).then(res => {
              setDataCol(res.data);
            })
          }
          getSeatCol();
     },[seatId])
    //  const nothinginhere = () => {return;}//
  const compare =( a, b ) => {
    if ( parseInt(a.Seat_No) < parseInt(b.Seat_No) ){
      return -1;
    }
    if ( parseInt(a.Seat_No) > parseInt(b.Seat_No) ){
      return 1;
    }
    return 0;
  }
  if(dataSeatCol){
  return (
    <>
      {React.Children.toArray(
          dataSeatCol.result.sort(compare).map(d=>(
        <div className={d.Status === '1'?"seat occupied":"seat"}>{d.Status === '1'?"":seatName+d.Seat_No}</div>
      )))}
    </>
  )}
}

export default SeatNum