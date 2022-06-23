import React from 'react'
import axios from 'axios'

const EditActor = ({infoModalActor,modalClose,dataA}) => {
    var nameA="",bdayA="",nationA="",avatar="";
  var dataActor;
  const getData = () =>{
    nameA = document.getElementById("nameActor").value;
    nationA = document.getElementById("national").value;
    avatar = document.getElementById("avaActor").value;
    bdayA = document.getElementById("bdayA").value;
    nameA === "" ? nameA = document.getElementById("nameActor").placeholder : nameA = document.getElementById("nameActor").value;
    nationA === "" ? nationA = document.getElementById("national").placeholder : nationA = document.getElementById("national").value;
    avatar === "" ? avatar = document.getElementById("avaActor").placeholder : avatar = document.getElementById("avaActor").value;
    bdayA === "" ? bdayA= dataA?dataA.result[0].ngay_sinh.substring(0,10):"2001-12-03" : bdayA = document.getElementById("bdayA").value;
  }
  const getStartData = () =>{
      if(dataA){
        nameA = dataA.result[0].ten_dien_vien;
        nationA = dataA.result[0].quoc_tich;
        avatar = dataA.result[0].avatar;
        bdayA = dataA.result[0].ngay_sinh.substring(0,10);
      }
  }
  const editActor = async (data) => {
    await axios.put('/dv/update',data);
    window.alert("Actor updated successfully!");
    window.location.reload();
    }
  if(infoModalActor){
    document.getElementById("nameActor").value="";
    document.getElementById("national").value="";
    document.getElementById("avaActor").value="";
    document.getElementById("bdayA").value="";
    getStartData();
  }
  const getDataActor = () => {
    return dataActor = {
        id_dien_vien: dataA?dataA.result[0].id_dien_vien:1, 
        ten_dien_vien: nameA,
        avatar: avatar,
        ngay_sinh: bdayA+" 07:00:00",
        quoc_tich: nationA,
        id_phim: dataA?dataA.result[0].id_phim:1
    }
}
const updateActor = () => {
  getData();
  editActor(dataActor);
  modalClose(false);
}
if(dataA){
    const deleteActor = async () => {
        if (window.confirm("Do you want to delete?") == true) {
            await axios.delete(`/dv/delete/${dataA.result[0].id_dien_vien}`);
            window.alert("Delete actor successfully!");
            window.location.reload();
          } else {
            return;
          }
    }
    return (
        <div className="bg-modal" style={{display: infoModalActor ? 'flex' : 'none' }}>
        <div className="modal-editActor" >
          <div className="close" onClick={function(event){modalClose(false)}}>+</div>
          <form action>
          <div className="table_content" style={{marginTop:'20px'}}>
            <tbody>
            <tr>
            <td className="no_border">NameActor</td>
            <td className="no_border"><input type="text" id="nameActor" name="nameActor" className="inputE" onChange={getData} placeholder={dataA.result[0].ten_dien_vien}
             minLength="4" maxLength="100" size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">National</td>
            <td className="no_border"> <input type="text" id="national" name="national" className="inputE" onChange={getData} placeholder={dataA.result[0].quoc_tich}
             minLength="4" maxLength="20" size="30"/></td>
          </tr>
          <tr>
            <td className="no_border">Avatar</td>
            <td className="no_border"><input type="text" id="avaActor" name="avaActor" className="inputE" onChange={getData} placeholder={dataA.result[0].avatar}
             minLength="4" maxLength="200" size="30"/></td>
          </tr>
          <tr>
            <td className="no_border">Birthday</td>
            <td className="no_border"><input type="date" id="bdayA" name="bdayA" style={{padding: "3px 7px 3px 7px",border: "1px solid #000",borderRadius: "7px"}} onChange={getData}
       min="1920-01-01" max="2015-12-31"/><a className='btn-load-date' onClick={function(e){document.getElementById("bdayA").value = dataA.result[0].ngay_sinh.substring(0, 10)}}>Load</a></td>
          </tr>
            </tbody></div>
          </form>
          <a className="button1" onClick={function(event){getDataActor();updateActor()}} >Save</a>
          <a className="button1" style={{marginLeft:'20px',backgroundColor:"#ff4d4d"}} onClick={function(event){deleteActor()}}>Delete</a>
      </div>
    </div>
      )}else{
        return (
            <div className="bg-modal" style={{display: infoModalActor ? 'flex' : 'none' }}>
            <div className="modal-editActor" >
              <div className="close" onClick={function(event){modalClose(false)}}>+</div>
              <form action>
              <div className="table_content" style={{marginTop:'20px'}}>
                <tbody>
                <tr>
                <td className="no_border">NameActor</td>
                <td className="no_border"><input type="text" id="nameActor" name="nameActor" className="inputE" onChange={getData} placeholder="Null"
                 minLength="4" maxLength="100" size="30"/></td>
              </tr>
              <tr>
              <td className="no_border">National</td>
                <td className="no_border"> <input type="text" id="national" name="national" className="inputE" onChange={getData} placeholder="Null"
                 minLength="4" maxLength="20" size="30"/></td>
              </tr>
              <tr>
                <td className="no_border">Avatar</td>
                <td className="no_border"><input type="text" id="avaActor" name="avaActor" className="inputE" onChange={getData} placeholder="Null"
                 minLength="4" maxLength="200" size="30"/></td>
              </tr>
              <tr>
                <td className="no_border">Birthday</td>
                <td className="no_border"><input type="date" id="bdayA" name="bdayA" style={{padding: "3px 7px 3px 7px",border: "1px solid #000",borderRadius: "7px"}} onChange={getData}
           min="1920-01-01" max="2015-12-31"/><a className='btn-load-date' onClick={function(e){document.getElementById("bdayA").value = ""}}>Load</a></td>
              </tr>
                </tbody></div>
              </form>
              <a className="button1" onClick={function(event){getDataActor();updateActor()}} >Save</a> 
              <a className="button1" >Delete</a>
          </div>
        </div>
          )
      }
}

export default EditActor