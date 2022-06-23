
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Login from './components/login/login';
import QliRap from './pages/QliRap'
import QliPhim from './pages/QliPhim';
import QliUser from './pages/QliUser';
import QliDienVien from './pages/QliDienVien';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {

  if(!localStorage.getItem('token')){
    return <Login />
  }
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/qlirap' component={QliRap} />
          <Route path='/qliphim' component={QliPhim} />
          <Route path='/qliuser' component={QliUser} />
          <Route path='/qlidv' component={QliDienVien} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
