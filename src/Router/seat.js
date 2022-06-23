import React from 'react'
import SeatNum from './seatNum'

const Seat = ({seatId,seatName,clickFunc,closeRoom}) => {
 
  return (
    <div class="row">
        <SeatNum seatId={seatId} seatName={seatName}/>    
    </div>
  )
}

export default Seat