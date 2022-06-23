import React, { useState } from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import Lichchieu from '../Router/lichchieu'
import Giochieuphim from './giochieuphim';
import {AiFillStar} from 'react-icons/ai'
import {MdAccessTimeFilled} from 'react-icons/md'
import EditFilm from './editFilm';
import InfoDV from '../Router/infoDV';
import axios from 'axios'

export default function DetailFilm({infoFilm,modalCloseFilm,detailFilm,actorFilm}) {
    const [giochieu,setGiochieu] = useState(false);
    const [dateLC,setDateLC] = useState("2001-12-03");
    const openModal = (val,time) => {
        setGiochieu(val);
        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate()+time);
        setDateLC(nextDay.toISOString().slice(0, 10));
    }
    const closeModal = () => setGiochieu(false);
    const [showUser,setShowU] = useState(false);
    const [infoDV,setInfoDV] = useState(null);

    const changeShowUser = async (id) => {
        setShowU(!showUser);
        const res = await axios.get(`/dv/detail/${id}`);
        setInfoDV(res.data);
    }
    const [editForm,setEForm] = useState(false);
    const changeEditForm = val => setEForm(val);

    const [openTrailer,setOpenTrailer] = useState(false);
    const changeOpenT = () => setOpenTrailer(!openTrailer);
    if(detailFilm){
    const deleteFilm = async () => {
        var roomList = await axios.get('/room/list');
        var roomFill = roomList.data.result.filter(function (el) {
            return el.Status.toString().localeCompare("ON")===0;
        })
        var lc;
        for(var i = 0; i < roomFill.length; i++){
            lc = await axios.get(`/lc/detail/${roomFill[i].Id_lich_chieu}`);
            if(lc.data.result[0].id_phim.toString().localeCompare(detailFilm.result[0].id_phim.toString())===0){
                window.alert("Check your room detail !");
                return;
            }
        }
        if (window.confirm("Do you want to delete?") == true) {
            await axios.delete(`/dv/deleteByIdPhim/${detailFilm.result[0].id_phim}`);
            await axios.delete(`/lc/deleteByIdPhim/${detailFilm.result[0].id_phim}`);
            await axios.delete(`/phim/delete/${detailFilm.result[0].id_phim}`);
            window.alert("Delete film successfully!");
            window.location.reload();
          } else {
            return;
          }
        
    }
    if(actorFilm){
    if(actorFilm.result){
  return (
    <div className="bg-cinema" style={{display: infoFilm ? "flex" : 'none' }}>
        <div className="modal-film" >
            <div className="close-film" onClick={function(event){modalCloseFilm(false)}}>+</div>
            <div className='bg-film-item1'>
                <div className='image-film'><img className='img-film' style={{display: openTrailer ? "none":"flex"}} src={detailFilm.result[0].poster}/><iframe style={{display: openTrailer ? "flex":"none"}} width="375" height="250" src={detailFilm.result[0].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><button className={openTrailer? 'btn-trailer0':'btn-trailer'} onClick={function(event){changeOpenT()}}>{openTrailer?"Poster":"Trailer"}</button></div>
                <div className='info-film1'>
                    <a className='title-film0' >{detailFilm.result[0].ten_phim}</a>
                    <a className='title-film' style={{color: "#D2D2D2"}}><AiFillStar style={{color:"yellow",position:"relative",top:"3",marginRight:"3px"}} size={18} />{detailFilm.result[0].so_sao}/10 </a>
                    <a className='title-film' style={{color: "#D2D2D2"}}><MdAccessTimeFilled style={{color:"lightblue",position:"relative",top:"3",marginRight:"3px"}} size={18}/>{detailFilm.result[0].thoi_luong} </a>
                    <FaEdit onClick={function(event){changeEditForm(true)}} className='icon-film' size={25} style={{position: "relative",top: 5,marginRight:"20px"}}/>
                    <RiDeleteBack2Fill className='icon-film' size={25} style={{position: "relative",top: 5}} onClick={function(event){deleteFilm()}}/>
                </div>
                <div className='info-film2'>
                    <a className='title-info'>Diễn viên: 
                        {React.Children.toArray(
                            actorFilm.result.map(d =>(
                            <a className='text-info'  onMouseOver={function(event) {changeShowUser(d.id_dien_vien)}} onMouseOut={function(event) {changeShowUser(d.id_dien_vien)}}>【{d.ten_dien_vien}】</a>
                            ))
                        )}
                    </a>
                    <InfoDV openShow={showUser} dataActor={infoDV?infoDV:null}/>
                    <a className='title-info'>Thể loại: <a className='text-info'>{detailFilm.result[0].the_loai}</a></a>
                    <a className='title-info'>Đạo diễn: <a className='text-info'>{detailFilm.result[0].dao_dien}</a></a>
                    <a className='title-info'>Nhà sản xuất: <a className='text-info'>{detailFilm.result[0].nha_san_xuat}</a></a>
                    <a className='title-info'>Nội dung: <a className='text-info'>{detailFilm.result[0].noi_dung}</a></a>
                </div>
            </div>
            <div className='bg-film-item2'>
                    <a className='title-lichchieu'>Lịch chiếu</a>
                    <div className='lichchieu'>
                        <Lichchieu openInfo={openModal}/>
                    </div>
            </div>
        </div>
        <Giochieuphim infogiochieu={giochieu} modalCloseInfo={closeModal} time={dateLC} timeFilm={detailFilm.result[0].thoi_luong} idFilm={detailFilm.result[0].id_phim}/>
        <EditFilm infoModalFilm={editForm} modalClose={changeEditForm} detailFilm={detailFilm} idUp={detailFilm.result[0].id_phim}/>
    </div>
  )}
  else{
    return (
        <div className="bg-cinema" style={{display: infoFilm ? "flex" : 'none' }}>
            <div className="modal-film" >
                <div className="close-film" onClick={function(event){modalCloseFilm(false)}}>+</div>
                <div className='bg-film-item1'>
                    <div className='image-film'><img className='img-film' style={{display: openTrailer ? "none":"flex"}} src={detailFilm.result[0].poster}/><iframe style={{display: openTrailer ? "flex":"none"}} width="375" height="250" src={detailFilm.result[0].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><button className={openTrailer? 'btn-trailer0':'btn-trailer'} onClick={function(event){changeOpenT()}}>{openTrailer?"Poster":"Trailer"}</button></div>
                    <div className='info-film1'>
                        <a className='title-film0' >{detailFilm.result[0].ten_phim}</a>
                        <a className='title-film' style={{color: "#D2D2D2"}}><AiFillStar style={{color:"yellow",position:"relative",top:"3",marginRight:"3px"}} size={18} />{detailFilm.result[0].so_sao}/10 </a>
                        <a className='title-film' style={{color: "#D2D2D2"}}><MdAccessTimeFilled style={{color:"lightblue",position:"relative",top:"3",marginRight:"3px"}} size={18}/>{detailFilm.result[0].thoi_luong} </a>
                        <FaEdit onClick={function(event){changeEditForm(true)}} className='icon-film' size={25} style={{position: "relative",top: 5,marginRight:"20px"}}/>
                        <RiDeleteBack2Fill className='icon-film' size={25} style={{position: "relative",top: 5}} onClick={function(event){deleteFilm()}}/>
                    </div>
                    <div className='info-film2'>
                        <a className='title-info'>Diễn viên: <a className='text-info'>Không có dữ liệu</a>
                        </a>
                        <a className='title-info'>Thể loại: <a className='text-info'>{detailFilm.result[0].the_loai}</a></a>
                        <a className='title-info'>Đạo diễn: <a className='text-info'>{detailFilm.result[0].dao_dien}</a></a>
                        <a className='title-info'>Nhà sản xuất: <a className='text-info'>{detailFilm.result[0].nha_san_xuat}</a></a>
                        <a className='title-info'>Nội dung: <a className='text-info'>{detailFilm.result[0].noi_dung}</a></a>
                    </div>
                </div>
                <div className='bg-film-item2'>
                        <a className='title-lichchieu'>Lịch chiếu</a>
                        <div className='lichchieu'>
                            <Lichchieu openInfo={openModal}/>
                        </div>
                </div>
            </div>
            <Giochieuphim infogiochieu={giochieu} modalCloseInfo={closeModal} time={dateLC} timeFilm={detailFilm.result[0].thoi_luong} idFilm={detailFilm.result[0].id_phim}/>
            <EditFilm infoModalFilm={editForm} modalClose={changeEditForm} detailFilm={detailFilm} idUp={detailFilm.result[0].id_phim}/>
        </div>
      )}}}
  }
