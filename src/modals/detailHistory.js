import React,{useEffect,useState} from 'react'
import axios from 'axios'
import InfoHoaDon from '../Router/infoHoaDon';

export default function DetailHistory({infoDetail,idGD,mnGD}) {
  const [infoGD, setInfoGD] = useState(null);
  useEffect(()=>{
    const getInfoGD = async () =>{
      await axios.get(`/ctdg/getByIdGD/${idGD}`).then((res)=>{
        setInfoGD(res.data);
      })
    }
    getInfoGD();
  },[idGD])
  if(infoGD){
    if(infoGD.result!==null){
  return (
    <div style={{display: infoDetail ? 'flex' : 'none' }}>
        <div className="modal-detail" >
            <h3 style={{color: "white"}}>CHI TIẾT HÓA ĐƠN</h3>
            <div className='detail-up'>
            {React.Children.toArray(
                    infoGD.result.map(d=>(
                <InfoHoaDon dataHD={d}/>
              )))}
            </div>
            <div className='detail-down'>
                <hr className='hr-class'/>
                <br/>
                <a className='detail-left'>Tổng</a>
                <a className='detail-right'>{xuliMoney(mnGD)}.000</a>
            </div>
        </div>
    </div>
  )}else{
    return (
      <div style={{display: infoDetail ? 'flex' : 'none' }}>
          <div className="modal-detail" >
              <h3 style={{color: "white"}}>CHI TIẾT HÓA ĐƠN</h3>
              <div className='detail-up'>
              </div>
              <div className='detail-down'>
                  <hr className='hr-class'/>
                  <br/>
                  <a className='detail-left'>Tổng</a>
                  <a className='detail-right'>0.000</a>
              </div>
          </div>
      </div>
    )}
}
}
function xuliMoney(val){
  let length = val.toString().length;
  let xuli = "";
  if(length > 6) xuli = val.toString().slice(0,-6)+"."+ val.toString().slice(-6,-3)+"."+ val.toString().slice(-3);
  else if (length > 3) xuli = val.toString().slice(0,-3)+"."+ val.toString().slice(-3);
  else xuli = val.toString();
  return xuli;
}
