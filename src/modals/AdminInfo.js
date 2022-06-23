import React from 'react'


 const AdminInfo = ({detail,showInfo,showEdit,dataAdmin,roleData}) => {
     if(dataAdmin){
    var role = roleData?roleData.result!==null?roleData.result[0].per_id:2:2;
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
            <div className="modal-content" >
                <div className="close" onClick={function(event){showInfo()}}>+</div>
                <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-8.jpg" height="100px" id="avaInfo"/>
                <form action>
                <table>
                    <tbody>
                    <tr>
                    <td>AdminID</td>
                        <td>{dataAdmin.result[0].ID_User}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{dataAdmin.result[0].User_Name}</td>
                    </tr>
                    <tr>
                    <td>Gmail</td>
                        <td>{dataAdmin.result[0].Email}</td>
                    </tr>
                    <tr>
                    <td>Role</td>
                        <td>{role===2?"User":"Admin"}</td>
                    </tr>
                    <tr>
                    <td>PhoneNum</td>
                        <td>{dataAdmin.result[0].Phone_Number}</td>
                    </tr>
                    </tbody></table>
                </form>
                <a onClick={function(event){showEdit()}} className="button1">Edit</a>
            </div>
        </div>
    )}
}
export default AdminInfo
