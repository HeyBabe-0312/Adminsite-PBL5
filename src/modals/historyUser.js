import React,{useState,useEffect} from 'react'
import HistoryBuy from '../Router/history'
import DetailHistory from './detailHistory'
import axios from 'axios'

export default function HistoryUser({openHis,modalCloseHis,idHis}) {
    const [infoDetail, setStateDetail] = useState(false);
    const [idHoaDon, setIdHoaDon] = useState(1);
    const [tienHoaDon, setTienHoaDon] = useState(0);
    const changeDetail = (id,mn) => {
      setStateDetail(!infoDetail);
      setIdHoaDon(id);
      setTienHoaDon(mn);
    }
    const [historyList, getHisList] = useState(null);
    useEffect(()=>{
      const getHisData = () =>{
        axios.get(`/dg/getByIdUser/${idHis}`).then(res=>{
          if(res.data.result){
          getHisList(res.data);
          }else{
            getHisList([]);
          }
        });
      }
      getHisData();
    },[idHis])
    if(historyList){
      if(historyList.result!==undefined){
  return (
    <div className={infoDetail?"bg-history":"bg-modal"} style={{display: openHis ? 'flex' : 'none' }}>
    <div className="modal-history" >
        <div className="close" onClick={function(event){modalCloseHis(false)}}>+</div>
        <h3 style={{color: "white"}}>LỊCH SỬ GIAO DỊCH</h3>
        <div className='table-history'>
            <table id="myTable">
                <tbody>
                {React.Children.toArray(
                    historyList.result.map(d=>(
                <HistoryBuy hoverChange={changeDetail} idGD={d.id} dateGD={d.ngay} mnGD={d.so_tien}/>
                )))}
                </tbody>
            </table>
        </div>
    </div>
    <DetailHistory infoDetail={infoDetail} idGD={idHoaDon} mnGD={tienHoaDon}/>
</div>
  )}else{
    return (
      <div className={infoDetail?"bg-history":"bg-modal"} style={{display: openHis ? 'flex' : 'none' }}>
      <div className="modal-history" >
          <div className="close" onClick={function(event){modalCloseHis(false)}}>+</div>
          <h3 style={{color: "white"}}>LỊCH SỬ GIAO DỊCH</h3>
          <div className='table-history'>
              <table id="myTable">
                  <tbody>
                    <a className="errorGD">Tài khoản chưa thực hiện giao dịch</a>
                  </tbody>
              </table>
          </div>
      </div>
      <DetailHistory infoDetail={infoDetail} idGD={idHoaDon} mnGD={tienHoaDon}/>
  </div>
    )
  }
  }
}
