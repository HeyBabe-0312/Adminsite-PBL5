import React,{useEffect,useState} from "react";
import "../styles/qlidienvien.css"
import ItemCarouActor from "../Router/itemCarouActor";
import axios from 'axios'
import AddDienVien from "../modals/addDienVien";
import EditActor from "../modals/editActor";

const QliDienVien = () => {
  const [dataFilm, setDataFilm] = useState(null);
  const [dataActor, setDataActor] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [idPhim , setIdPhim] = useState(0);
  const [editForm, setEditForm] = useState(false);
  const [dataEditActor, setDataEditActor] = useState(null);

  const closeFormEdit = (val) =>{
    setEditForm(val);
  }
  const openFormEdit = (val,id) =>{
    setEditForm(val);
    axios.get(`/dv/detail/${id}`).then(res => {
      setDataEditActor(res.data);
      })
  }
  const closeFormAdd = (val) => {
    setOpenAdd(val);
  }
  const changeFormAdd = (val,id) => {
    setOpenAdd(val);
    setIdPhim(id);
  }
  useEffect(() => {
    const getDataPhim = () => {
      axios.get('/phim/list').then(res => {
        setDataFilm(res.data);
      })
    }
    const getDataActor = () => {
      axios.get('/dv/list').then(res => {
        setDataActor(res.data);
      })
    }
    getDataPhim();
    getDataActor();
  },[]);
  const newActor = async (data) => {
    await axios.post('/dv/add',data);
    window.alert("Actor added successfully!");
    window.location.reload();
    }
  if(dataFilm&&dataActor){
  return (
    <div className="bg-qlidv">
      <ItemCarouActor dataFilm={dataFilm} openFormAdd={changeFormAdd} openFormEdit={openFormEdit}/>
      <AddDienVien dataActor={dataActor} addActor={openAdd} closeForm={closeFormAdd} idFilm={idPhim} newActor={newActor}/>
      <EditActor infoModalActor={editForm} modalClose={closeFormEdit} dataA={dataEditActor?dataEditActor:""}/>
    </div>
  )
  }
}

export default QliDienVien