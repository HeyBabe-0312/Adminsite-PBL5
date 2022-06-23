import React,{useState,useEffect} from 'react'
import '../styles/qliuser.css'
import Userlist from '../Router/userlist'
import PaginationTest from '../components/PaginationTest'
import HistoryUser from '../modals/historyUser'
import EditUser from '../modals/editUser'
import {AiOutlineReload} from 'react-icons/ai'
import axios from 'axios'

export default function QliUser() {
  const [infoEdit, setInfoEdit] = useState(false);
  const openEdit = value => setInfoEdit(value);
  const closeEdit = value => setInfoEdit(value);  
  const [idHistory, setIdHistory] = useState(1);
  const [user, getDataUser] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [loadData, setLoadData] = useState(false);

  const [infoHis, setStateHis] = useState(false);
  const openHis = (value,id) => {
    setStateHis(value);
    setIdHistory(id);
  }
  const closeHis = value => setStateHis(value);

  const [userData, setUserData] = useState(null);

  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [userFilter,setDataUser] = useState(null);
  const [currentPosts,setCurrentPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search,setSearch] = useState(false);
  const [loadSearchData,setLoadSearchData] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setLoadSearchData(!loadSearchData);
  }
  const searchDone = () => setSearch(false);
  useEffect(() => {
    const getAllUser = async () => {
      const res = await axios.get('/user/list');
      setUserData(res.data);
      setLoading(true);
      setDataUser(res.data.result);
      if(userFilter){
        setCurrentPosts(userFilter.slice(indexOfFirstPost, indexOfLastPost));
        if(currentPosts) return;
        else setLoading(!loading);
        }
        else setLoading(!loading);
    }
    getAllUser();
  },[loading]);
  useEffect(()=>{
    const refreshData = () => {
      setLoading(!loading);
      if(userData) setDataUser(userData.result); setSearch(true);setCurrentPage(1);
    }
    refreshData();
  },[loadData])
  useEffect(()=>{
    const searchUser = () => {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      if(userFilter){
        setCurrentPosts(userFilter.slice(indexOfFirstPost, indexOfLastPost));
      }else setLoadSearchData(!loadSearchData);
    }
    searchUser();
  },[loadSearchData])
  const _handlerClickEnter =(e) => {
    var input, Filter;
    if(e.key === 'Enter'){
      input = document.getElementById("myInputUser");
      if(input.value==="") {setDataUser(userData.result); setSearch(true);setCurrentPage(1);}
      else{
        setDataUser(userData.result);
        Filter=input.value.toUpperCase();
        var newArray = userData.result.filter(function (el) {
          return el.ID_User.toString().indexOf(Filter) > -1 || el.User_Name.toUpperCase().indexOf(Filter) > -1 || el.Email.replace("@gmail.com","").toUpperCase().indexOf(Filter) > -1;
        });
        setSearch(true);
        setCurrentPage(1);
        setDataUser(newArray);
      }
      setLoadSearchData(!loadSearchData);
      document.getElementById("myInputUser").value = "";
    }
  }
  const getUserDetail = async (id) => {
      await axios.get(`/user/detail/${id}`).then((response) => {
          getDataUser(response.data);
      })
      await axios.get(`/userPer/getByUserId/${id}`).then((response) =>{
        setRoleData(response.data);
      });
  }
  const reloadData = () =>{
    setLoadData(!loadData);
  }
  console.log(loadData);
  if(userFilter){
  return (
    <div className='bg-qliphim'>
        <div className='autocomplete'>
          <input type="text" autoComplete='off' id="myInputUser" onKeyDown={_handlerClickEnter} placeholder=" Tìm kiếm user " />
        </div>
        <AiOutlineReload size={30} className="btn-reload" onClick={function(e) {setLoadData(!loadData);}}/>
    
    <div className='bg-table'>
     <table id="myTable">
       <tbody>
         <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Email</th>
           <th>PhoneNum</th>
           <th>Actions</th>
         </tr>
         <Userlist openHis={openHis} modalOpen={openEdit} dataUser={currentPosts} getDataUser={getUserDetail}/>
       </tbody>
     </table>
     {idHistory===1?<HistoryUser openHis={infoHis} modalCloseHis={closeHis} idHis={1}/>:<HistoryUser openHis={infoHis} modalCloseHis={closeHis} idHis={idHistory}/>}
     <PaginationTest postsPerPage={postsPerPage} totalPosts={userFilter.length} paginate={paginate} search={search} searchDone={searchDone}/>
     <EditUser infoEdit={infoEdit} modalClose={closeEdit} userData={user} roleData={roleData} reloadData={reloadData}/>
    </div>
  </div>
  )}
}
