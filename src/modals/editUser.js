import React from 'react'
import axios from 'axios'

export default function EditUser({infoEdit,modalClose,userData,roleData}) {
  var userName="",number="";
  var dataUser;
  var role = roleData?roleData.result!==null?roleData.result[0].per_id:2:2;
  var getRole = role;
  const getData = () =>{
    if(document.getElementById('manRadioCheck').checked) getRole = 1;
    else if(document.getElementById('womanRadioCheck').checked) getRole = 2;
    userName = document.getElementById("fullnameuser").value;
    number = document.getElementById("phoneuser").value;
    userName === "" ? userName = document.getElementById("fullnameuser").placeholder : userName = document.getElementById("fullnameuser").value;
    number === "" ? number = document.getElementById("phoneuser").placeholder : number = document.getElementById("phoneuser").value;
  }
  const getStartData = () =>{
    userName = document.getElementById("fullnameuser").placeholder;
    number = document.getElementById("phoneuser").placeholder;
  }
  const editUser = async (data) => {
    await axios.put('/user/update',data);
    window.alert("User updated successfully!");
    window.location.reload();
    }
  if(infoEdit){
    role === 2? document.getElementById("womanRadioCheck").checked = true : document.getElementById("manRadioCheck").checked = true;
    document.getElementById("fullnameuser").value="";
    document.getElementById("phoneuser").value="";
    getStartData();
  }
  const getDataUser = () => {
    return dataUser = {
        ID_User: userData?userData.result[0].ID_User:"", 
        User_Name: userName,
        User_Password: userData?userData.result[0].User_Password:"",
        Email: userData?userData.result[0].Email:"",
        Phone_Number: number
    }
}
const changeRole = () =>{
  if(parseInt(role)!==parseInt(getRole)){
    if(userData){
    if(role===2){
      const data ={
        id:userData.result[0].ID_User
      }
      axios.put("/admin/setadmin",data);
    }else{
      axios.delete(`/admin/deleteadmin/${userData.result[0].ID_User}`);
    }
  }
  }
}
const updateUser = () => {
  getData();
  editUser(dataUser);
  changeRole();
  modalClose(false);
}
  if(userData){
    
  return (
    <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
    <div className="modal-editUser" >
      <div className="close" onClick={function(event){modalClose(false);}}>+</div>
      <form action>
      <div className="table_content" style={{marginTop:'30px'}}>
        <tbody>
          <tr>
            <td className="no_border">UserId</td>
            <td className="no_border"><input readOnly type="text" id="iduser" name="iduser" required placeholder={userData.result[0].ID_User} className="inputE"
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">FullName</td>
            <td className="no_border"><input type="text" id="fullnameuser" name="fullnameuser" autoComplete='off' placeholder={userData.result[0].User_Name} className="inputE" onChange={getData}
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><input type="text" id="emailuser" name="mail" required placeholder={userData.result[0].Email} readOnly className="inputE"
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">PhoneNum</td>
            <td className="no_border"><input type="text" id="phoneuser" name="phoneuser" autoComplete='off' placeholder={userData.result[0].Phone_Number} className="inputE" onChange={getData}
          size="30"/></td>
          </tr>
          <tr>
              <td className="no_border">Role</td>
              <td className="no_border"><input type="radio" id="manRadioCheck" name="drone" value="admin" onChange={getData}
          /><label> Admin </label> <input type="radio" id="womanRadioCheck" name="drone" value="user" onChange={getData}
          /><label> User </label></td>
            </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataUser();updateUser()}} >Save</a>
    </div>
  </div>
  )}
  else{
    return (
      <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
      <div className="modal-editUser" >
        <div className="close" onClick={function(event){modalClose(false);}}>+</div>
        <form action>
        <div className="table_content">
          <tbody>
            <tr>
              <td className="no_border">UserId</td>
              <td className="no_border"><input readOnly type="text" id="iduser" name="iduser" required placeholder="Null" className="inputE"
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">FullName</td>
              <td className="no_border"><input type="text" id="fullnameuser" name="fullnameuser" placeholder="Null" className="inputE" onChange={getData}
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">Gmail</td>
              <td className="no_border"><input type="text" id="emailuser" name="mail" required placeholder="Null" readOnly className="inputE"
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">PhoneNum</td>
              <td className="no_border"><input type="text" id="phoneuser" name="phoneuser" placeholder="Null" className="inputE" onChange={getData}
            size="32"/></td>
            </tr>
            <tr>
              <td className="no_border">Role</td>
              <td className="no_border"><input type="radio" id="manRadioCheck" name="drone" value="admin" checked
          /><label> Admin </label> <input type="radio" id="womanRadioCheck" name="drone" value="user"
          /><label> User </label></td>
            </tr>
          </tbody></div>
        </form>
        <a className="button1" onClick={function(event){getDataUser();updateUser()}} >Save</a>
      </div>
    </div>
    )
  }
}
