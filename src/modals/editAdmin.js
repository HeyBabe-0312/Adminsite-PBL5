import React from 'react'
import axios from 'axios'

export default function EditAdmin({infoEdit,showEdit,closeEdit,dataAdmin}) {
  var userName="",phoneNum="",idUser="";
  var dataAdminUp;
  const getData = () =>{
    userName = document.getElementById("nameInput").value;
    phoneNum = document.getElementById("phoneNumber").value;
    userName === "" ? userName = document.getElementById("nameInput").placeholder : userName = document.getElementById("nameInput").value;
    phoneNum === "" ? phoneNum = document.getElementById("phoneNumber").placeholder : phoneNum = document.getElementById("phoneNumber").value;
  }
  const getStartData = () =>{
      if(dataAdmin){
        idUser = dataAdmin.result[0].ID_User;
        userName = dataAdmin.result[0].User_Name;
        phoneNum = dataAdmin.result[0].Phone_Number;
      }
  }
  const editAdmin = async (data) => {
    await axios.put('/admin/updateinfo',data);
    window.alert("Admin updated successfully!");
    window.location.reload();
    }
  if(infoEdit){
    document.getElementById("nameInput").value="";
    document.getElementById("phoneNumber").value="";
    getStartData();
  }
  const getDataAdmin = () => {
    return dataAdminUp = {
        id: idUser, 
        username: userName,
        phone: phoneNum,
    }
}
const updateAdmin = () => {
  getData();
  editAdmin(dataAdminUp);
  closeEdit();
}
 if(dataAdmin){
  return (
    <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
    <div className="modal-editAdmin" >
      <div className="close" onClick={function(event){showEdit()}}>+</div>
        <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-8.jpg" height="100px" id="avaInfo"/>
        <form action>
        <div className="table_content">
          <tbody>
            <tr>
              <td className="no_border">AdminId</td>
              <td className="no_border"><input type="text" id="idUser" name="name" required readOnly placeholder={dataAdmin.result[0].ID_User} className="inputE"
          size="27"/></td>
            </tr>
            <tr>
            <td className="no_border">Name</td>
              <td className="no_border"><input type="text" id="nameInput" name="name" required placeholder={dataAdmin.result[0].User_Name} className="inputE" onChange={getData}
          size="27"/></td>
            </tr>
            <tr>
            <td className="no_border">Gmail</td>
              <td className="no_border"><input type="text" id="emailUser" name="name" required readOnly placeholder={dataAdmin.result[0].Email} className="inputE"
          size="27"/></td>
            </tr>
            <tr>
            <td className="no_border">PhoneNum</td>
              <td className="no_border"><input type="text" id="phoneNumber" name="name" size = "27" onChange={getData} className="inputE"
        placeholder={dataAdmin.result[0].Phone_Number}></input></td>
            </tr>
          </tbody></div>
        </form>
      <a className="button1" onClick={function(event){getDataAdmin();updateAdmin()}} >Save</a>
  </div>
</div>
  )
}}
