import React from 'react'
import axios from 'axios'

export default function EditFilm({infoModalFilm,modalClose,detailFilm,idUp}) {
  var titleF="",descriptionF="",timeF="",nhaSanXuatF="",daoDienF="",catagoryF="",trailerF="",posterF="";
  var dataFilm;
  const getData = () =>{
    titleF = document.getElementById("title").value;
    descriptionF = document.getElementById("desc").value;
    timeF = document.getElementById("time").value;
    nhaSanXuatF = document.getElementById("produc").value;
    daoDienF = document.getElementById("direc").value;
    catagoryF = document.getElementById("cata").value;
    trailerF = document.getElementById("trailer").value;
    posterF = document.getElementById("poster").value;
    titleF === "" ? titleF = document.getElementById("title").placeholder : titleF = document.getElementById("title").value;
    descriptionF === "" ? descriptionF = document.getElementById("desc").placeholder : descriptionF = document.getElementById("desc").value;
    timeF === "" ? timeF = document.getElementById("time").placeholder : timeF = document.getElementById("time").value;
    nhaSanXuatF === "" ? nhaSanXuatF = document.getElementById("produc").placeholder : nhaSanXuatF = document.getElementById("produc").value;
    daoDienF === "" ? daoDienF = document.getElementById("direc").placeholder : daoDienF = document.getElementById("direc").value;
    catagoryF === "" ? catagoryF = document.getElementById("cata").placeholder : catagoryF = document.getElementById("cata").value;
    trailerF === "" ? trailerF = document.getElementById("trailer").placeholder : trailerF = document.getElementById("trailer").value;
    posterF === "" ? posterF = document.getElementById("poster").placeholder : posterF = document.getElementById("poster").value;
  }
  const getStartData = () =>{
    titleF = document.getElementById("title").placeholder;
    descriptionF = document.getElementById("desc").placeholder;
    timeF = document.getElementById("time").placeholder;
    nhaSanXuatF = document.getElementById("produc").placeholder;
    daoDienF = document.getElementById("direc").placeholder;
    catagoryF = document.getElementById("cata").placeholder;
    trailerF = document.getElementById("trailer").placeholder;
    posterF = document.getElementById("poster").placeholder;
  }
  const editFilm = async (data) => {
    await axios.put('/phim/update',data);
    window.alert("Film updated successfully!");
    window.location.reload();
    }
  if(infoModalFilm){
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("time").value="";
    document.getElementById("produc").value="";
    document.getElementById("direc").value="";
    document.getElementById("cata").value="";
    document.getElementById("trailer").value="";
    document.getElementById("poster").value="";
    getStartData();
  }
  const getDataFilm = () => {
    return dataFilm = {
        id_phim: idUp, 
        ten_phim: titleF,
        noi_dung: descriptionF,
        thoi_luong: timeF,
        so_sao: 8.9,
        nha_san_xuat: nhaSanXuatF,
        dao_dien: daoDienF,
        the_loai: catagoryF,
        trailer: trailerF,
        poster: posterF,
        so_ve: detailFilm?detailFilm.result[0].so_ve:0
    }
}
const updateFilm = () => {
  getData();
  editFilm(dataFilm);
  modalClose(false);
}
  if(detailFilm){
  return (
    <div className="bg-modal" style={{display: infoModalFilm ? 'flex' : 'none' }}>
    <div className="modal-editFilm" >
      <div className="close" onClick={function(event){modalClose(false)}}>+</div>
      <form action>
      <div className="table_content">
        <tbody>
        <tr>
            <td className="no_border" >Title</td>
            <td className="no_border"><input placeholder={detailFilm.result[0].ten_phim} type="text" id="title" name="title" required className="inputE" onChange={getData}
             minLength="4" maxLength="100" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Content</td>
            <td className="no_border"> <textarea placeholder={detailFilm.result[0].noi_dung} rows="5" cols="32" wrap="soft" id="desc" className="inputE" onChange={getData}></textarea></td>
          </tr>
          <tr>
            <td className="no_border">Time</td>
            <td className="no_border"><input placeholder={detailFilm.result[0].thoi_luong} type="text" id="time" name="time" required className="inputE" onChange={getData}
             minLength="4" maxLength="20" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Catagory</td>
            <td className="no_border"><input type="text" id="cata" name="cata" required className="inputE" placeholder={detailFilm.result[0].the_loai} onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Director</td>
            <td className="no_border"><input type="text" id="direc" placeholder={detailFilm.result[0].dao_dien} name="direc" required className="inputE" onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Producer</td>
            <td className="no_border"><input type="text" id="produc" placeholder={detailFilm.result[0].nha_san_xuat} name="produc" required className="inputE" onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Poster</td>
            <td className="no_border"> <input type="url" className="inputE" id="poster" placeholder={detailFilm.result[0].poster} onChange={getData}
              pattern="https://.*" size="33" required/></td>
          </tr>
          <tr>
            <td className="no_border">Trailer</td>
              <td className="no_border"><input type="url" className="inputE" id="trailer" placeholder={detailFilm.result[0].trailer} onChange={getData}
              pattern="https://.*" size="33" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataFilm();updateFilm()}} >Save</a>
  </div>
</div>
  )}
}
