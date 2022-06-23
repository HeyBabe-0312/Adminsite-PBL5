import React,{useState,useEffect} from 'react'
import '../styles/qliphim.css'
import {MdAddToQueue} from 'react-icons/md'
import Carousel from '../Router/carousel'
import DetailFilm from '../modals/detailFilm'
import AddFilm from '../modals/addFilm'
import axios from 'axios'

export default function QliPhim() {
  const [infoFilm,setInfo] = useState(false);
  const [detailFilm,setDetailFilm] = useState(null);
  const [actorFilm,setActorFilm] = useState(null);
  const openFilm = (value,id) => {
    setInfo(value); 
    axios.get(`/phim/detail/${id}`).then(res => {
      setDetailFilm(res.data);
    })
    axios.get(`/dv/getByIdPhim/${id}`).then(res => {
      setActorFilm(res.data);
    })
    }
    const newFilm = async (data) => {
      await axios.post('/phim/add',data);
      window.alert("Film added successfully!");
      window.location.reload();
      }
  const closeFilm = value => setInfo(value); 

  const [dataPhim,setDataPhim] = useState(null);

  const [addFilm,setAddModal] = useState(false);
  const changeModal = value => setAddModal(value); 

  useEffect(() => {
    const getDataPhim = () => {
      axios.get('/phim/list').then(res => {
        setDataPhim(res.data);
      })
    }
    getDataPhim();
  },[]);
  return (
    <main>
      <div className='bg-qliphim'>
        <button className="btn1" onClick={function(event){changeModal(true)}}><MdAddToQueue size={25}/></button>
        <div className='bg-carousel'>
          <Carousel openFilm={openFilm} dataPhim={dataPhim}/>
        </div>
        <DetailFilm infoFilm={infoFilm} modalCloseFilm={closeFilm} detailFilm={detailFilm} actorFilm={actorFilm}/>
        <AddFilm addFilm={addFilm} modalClose={changeModal} dataF={dataPhim} newFilm={newFilm}/>
      </div>
    </main>
  )
}
