import React from 'react'
import axios from 'axios'

const ChangePass = ({detail,showForm}) => {
    var passW="",nPassW="",cPassW="";
  var dataPass;
  const getData = () =>{
    passW = document.getElementById("oldPasswordInp").value;
    nPassW = document.getElementById("newPasswordInp").value;
    cPassW = document.getElementById("cfmPasswordInp").value;
  }
  if(detail){
    document.getElementById("oldPasswordInp").value="";
    document.getElementById("newPasswordInp").value="";
    document.getElementById("cfmPasswordInp").value="";
  }
    const getDataPass = () => {
      return dataPass = {
          id: localStorage.getItem('token'), 
          oldpass: passW,
          password: cPassW
      }
  }
  const newPass = async (data) => {
      try{
        await axios.put('/admin/updatepassword',data);
        window.alert("Update password successfully!");
        window.location.reload();
      }catch(err){
        if(err.response){
            alert(err.response.data);
        }
    }
    }
  const checkData = () => {
    if(passW === '' || nPassW === '' || cPassW === '') {
      alert('Empty Value');
      return false;
    }
    else if(nPassW !== cPassW){
        alert('Please comfirm the password');
        return false;
    }
    else {
    newPass(dataPass);
    showForm();
    }
  }
  const showHidePW = () => {
    var x = document.getElementById("oldPasswordInp");
    var y = document.getElementById("newPasswordInp");
    var z = document.getElementById("cfmPasswordInp");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
      z.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
      z.type = "password";
    }
  }
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
            <div className="modal-changePW" >
                <div className="close" onClick={function(event){showForm()}}>+</div>
                <form action>
                <table style={{marginTop:"25px"}}>
                    <tbody>
                    <tr>
                    <td>Password</td>
                        <td><input type="password" size={25}  className="inputE" id="oldPasswordInp" onChange={getData}></input></td>
                    </tr>
                    <tr>
                        <td>NewPassword</td>
                        <td><input type="password" size={25} id="newPasswordInp" className="inputE" onChange={getData}></input></td>
                    </tr>
                    <tr>
                    <td>ComfirmPassword</td>
                        <td><input type="password" size={25} id="cfmPasswordInp" className="inputE" onChange={getData}></input></td>
                    </tr>
                    </tbody></table>
                </form>
                <div className="form-hideshow">
                    <input type="checkbox" onClick={showHidePW} style={{position: 'relative',top:'1px'}}/>&nbsp;&nbsp;Show Password
                </div>
                <a onClick={function(event){getDataPass();checkData()}} className="button1">Save</a>
            </div>
        </div>
    )
}

export default ChangePass