import React,{useState} from 'react'
import {BiSend} from 'react-icons/bi'

const Messeger = ({openMess,showMess,dataMess,idMess}) =>{
    const [mess,getMess] = useState("");
    var dataMesseger;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var key, count = 0;
    for(key in idMess.result) {
    if(idMess.result.hasOwnProperty(key)) {
        count++;
    }
    }
    const getDataMess = () => {
        return dataMesseger = {
            id: ++count, 
            ngay: date+' '+time,
            noi_dung: mess
        }
    }
    const checkData = () => {
        if(mess == ''){
          alert('Empty Value');
          return false;
        }
        else {
            dataMess(dataMesseger);
            showMess();
            document.getElementById('data-mess').value = "";
        }
      }
    return(
        <div className='bg-mess' style={{display: openMess ? 'flex' : 'none' }}>
            <div className="modal-messeger" >
                <div className="close" onClick={function(event){showMess();document.getElementById('data-mess').value = "";}}>+</div>
                <span className='mess-title'>Thong bao den user</span>
                <form className='form-mess'>
                    <textarea cols={51} rows={10} id="data-mess" onChange={(e)=>{getMess(e.target.value);}}></textarea>
                    <BiSend className='send-btn' size={35} style={{color:"#9E4242"}} onClick={function(event){getDataMess();checkData()}}/>
                </form>
            </div>
        </div>
    )
}
export default Messeger