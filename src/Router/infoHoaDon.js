import React,{useState,useEffect} from 'react'
import axios from 'axios'

const InfoHoaDon = ({dataHD}) => {
    const [dataMatHang ,setDataMatHang] = useState(null);
    useEffect(()=>{
        const getMatHang = async () => {
            await axios.get(`/mh/detail/${dataHD.id_hang}`).then((res)=>{
                setDataMatHang(res.data);
            })
        }
        getMatHang();
    },[dataHD])
    if(dataMatHang){
  return (
    <>
        <a className='detail-left'>{dataMatHang.result[0].ten} x{dataHD.so_luong}</a>
        <a className='detail-right'>{parseInt(dataMatHang.result[0].gia)*dataHD.so_luong}.000</a>
    </>
  )
    }
}

export default InfoHoaDon