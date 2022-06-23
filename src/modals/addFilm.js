import React,{useState} from 'react'

export default function AddFilm({addFilm,modalClose,dataF,newFilm}) {
  const [idF, setIdF] = useState(1);
  var titleF="",descriptionF="",timeF="",nhaSanXuatF="",daoDienF="",catagoryF="",trailerF="",posterF="";
  var dataFilm;
  const getData = () =>{
    titleF = document.getElementById("titleF").value;
    descriptionF = document.getElementById("descriptionF").value;
    timeF = document.getElementById("timeF").value;
    nhaSanXuatF = document.getElementById("producF").value;
    daoDienF = document.getElementById("direcF").value;
    catagoryF = document.getElementById("cataF").value;
    trailerF = document.getElementById("trailerF").value;
    posterF = document.getElementById("posterF").value;
  }
  if(addFilm){
    document.getElementById("titleF").value="";
    document.getElementById("descriptionF").value="";
    document.getElementById("timeF").value="";
    document.getElementById("producF").value="";
    document.getElementById("direcF").value="";
    document.getElementById("cataF").value="";
    document.getElementById("trailerF").value="";
    document.getElementById("posterF").value="";
  }
  if(dataF){
  dataF.result.map((d)=>{
    if(idF==d.id_phim) setIdF(idF+1);
  })
    const getDataFilm = () => {
      return dataFilm = {
          id_phim: idF, 
          ten_phim: titleF,
          noi_dung: descriptionF,
          thoi_luong: timeF,
          so_sao: 8.9,
          nha_san_xuat: nhaSanXuatF,
          dao_dien: daoDienF,
          the_loai: catagoryF,
          trailer: trailerF,
          poster: posterF,
          so_ve: 0
      }
  }
  
const checkData = () => {
  if(titleF === '' || descriptionF === '' || timeF === '' || nhaSanXuatF ==='' || daoDienF ==='' || catagoryF ==='' || trailerF ==='' || posterF === '') {
    alert('Empty Value');
    return false;
  }
  else {
    newFilm(dataFilm);
    modalClose(false);
  }
}
 
  return (
    <div className="bg-modal" style={{display: addFilm ? 'flex' : 'none' }}>
    <div className="modal-addGame" >
      <div className="close" onClick={function(event){modalClose(false)}}>+</div>
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">Title</td>
            <td className="no_border"><input type="text" id="titleF" name="title" required className="inputE" onChange={getData}
             minLength="4" maxLength="100" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Content</td>
            <td className="no_border"> <textarea rows="5" cols="32" wrap="soft" id="descriptionF" className="inputE" onChange={getData}></textarea></td>
          </tr>
          <tr>
            <td className="no_border">Time</td>
            <td className="no_border"><input type="text" id="timeF" name="time" required className="inputE" onChange={getData}
             minLength="4" maxLength="20" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Catagory</td>
            <td className="no_border"><input type="text" id="cataF" name="cata" required className="inputE" onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Director</td>
            <td className="no_border"><input type="text" id="direcF" name="direc" required className="inputE" onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Producer</td>
            <td className="no_border"><input type="text" id="producF" name="produc" required className="inputE" onChange={getData}
             minLength="4" maxLength="50" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Poster</td>
            <td className="no_border"> <input type="url" className="inputE" id="posterF" onChange={getData}
              pattern="https://.*" size="33" required/></td>
          </tr>
          <tr>
            <td className="no_border">Trailer</td>
              <td className="no_border"><input type="url" className="inputE" id="trailerF" onChange={getData}
              pattern="https://.*" size="33" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataFilm();checkData();}}>Add</a>
    </div>
  </div>
  )}
}
