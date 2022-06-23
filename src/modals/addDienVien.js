import React,{useState} from 'react'
import moment from 'moment';

const AddDienVien = ({addActor,closeForm,dataActor,idFilm,newActor}) => {
  var nameF="",bdayA="",nationA="",avatar="";
  var dataA;
  const getData = () =>{
    nameF = document.getElementById("nameA").value;
    nationA = document.getElementById("nationalA").value;
    avatar = document.getElementById("avaA").value;
    bdayA = document.getElementById("bday").value;
  }
  if(addActor){
    document.getElementById("nameA").value="";
    document.getElementById("nationalA").value="";
    document.getElementById("avaA").value="";
    document.getElementById("bday").value="";
  }
  if(dataActor){
    const getDataActor = () => {
      return dataA = {
          id_dien_vien: null, 
          ten_dien_vien: nameF,
          avatar: avatar,
          ngay_sinh: bdayA+" 07:00:00",
          quoc_tich: nationA,
          id_phim: idFilm
      }
  }
  const checkData = () => {
    if(nameF === '' || nationA === '' || avatar === '' || bdayA ==='') {
      alert('Empty Value');
      return false;
    }
    else {
      newActor(dataA);
      closeForm(false);
    }
  }
  return (
    <div className="bg-modal" style={{display: addActor ? 'flex' : 'none' }}>
    <div className="modal-addActor" >
      <div className="close" onClick={function(event){closeForm(false)}}>+</div>
      <form action>
      <div className="table_content" style={{marginTop:'20px'}}>
        <tbody>
          <tr>
            <td className="no_border">NameActor</td>
            <td className="no_border"><input type="text" id="nameA" name="nameA" required className="inputE" onChange={getData}
             minLength="4" maxLength="100" size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">National</td>
            <td className="no_border"> <input type="text" id="nationalA" name="nationalA" required className="inputE" onChange={getData}
             minLength="4" maxLength="20" size="30"/></td>
          </tr>
          <tr>
            <td className="no_border">Avatar</td>
            <td className="no_border"><input type="text" id="avaA" name="avaA" required className="inputE" onChange={getData}
             minLength="4" maxLength="200" size="30"/></td>
          </tr>
          <tr>
            <td className="no_border">Birthday</td>
            <td className="no_border"><input type="date" id="bday" name="bday" style={{padding: "3px 7px 3px 7px",border: "1px solid #000",borderRadius: "7px"}} onChange={getData}
       min="1920-01-01" max="2015-12-31"/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataActor();checkData();}}>Add</a>
    </div>
  </div>
  )}
}

export default AddDienVien