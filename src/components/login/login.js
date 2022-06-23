import React from 'react'
import './login.css'
import {FaEnvelope} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'
import axios from 'axios'

export default function Login() {
const checkLogin = async () =>{
    if(document.getElementById("emailInp").value===""||document.getElementById("passwordInp").value===""){
        alert("Please enter !");
    }else{
        const data = {
            email:  document.getElementById("emailInp").value,
            password: document.getElementById("passwordInp").value
        }
        try{
        const val = await axios.post("/admin/login", data);
        if(val.status===200){
            localStorage.setItem('token', val.data.ID_User);
            window.location.reload();
        }}catch(err){
            if(err.response){
                alert(err.response.data.msg);
            }
        }
    }
}
  return (
    <div className="main">
        <div className="login-box">
            <div className='logo'>
                <div className='image'/>
            </div>
            <div className='login-text'>
                    <span className='login-title'>Admin Login</span>
                        <div className="text-box">
                            <input className='input100' type="text" placeholder='Email' id="emailInp"></input>
                            <span className='focus-input100'></span>
                            <span className='symbol-input100'>
                                <FaEnvelope className='symbol' aria-hidden="true"/>
                            </span>
                        </div>
                        <div className="text-box">
                            <input className='input100' type="password" placeholder='Password' id="passwordInp"></input>
                            <span className='focus-input100'></span>
                            <span className='symbol-input100'>
                                <MdLock className='symbol' aria-hidden="true"/>
                            </span>
                        </div>
                        <div className='container-login100'>
                            <button className='login100-form-btn' onClick={function(e) {checkLogin()}}>Let's Go</button>
                        </div>
            </div>
        </div>
    </div>
  )
}
