import React from 'react'
import {FaBirthdayCake} from 'react-icons/fa'
import {IoHome} from 'react-icons/io5'
import '../styles/infoDV.css'

const InfoDV = ({openShow,dataActor}) => {
    if(dataActor){
    return (
      <div style={{display: openShow ? 'flex' : 'none' }}>
          <div className="modal-info-user-post" >
              <div className="info-detail">
                  <img width="100" height="100" src={dataActor.result[0].avatar} alt="avatar" style={{float: 'left'}} className='ava-post1'/>
                  <div className="detail-title">{dataActor.result[0].ten_dien_vien}</div>
                  <div className="detail-text">
                      <FaBirthdayCake size={22} className="ava-post1" color='#000'/>
                      <div className="school-text">{dataActor.result[0].ngay_sinh.substring(0, 10)}</div>
                      <IoHome size={22} className="ava-post1" color='#000'/>
                      <div className="address-text">{dataActor.result[0].quoc_tich}</div>
                  </div>
              </div>
          </div>
      </div>
    )
  }}

export default InfoDV