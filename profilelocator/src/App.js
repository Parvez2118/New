import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AddProfile from './Components/Admin/AddProfile';

import  { useState } from 'react';

import ProfileSummary from './Components/ProfileSummary';
import EditProfile from './Components/Admin/EditProfile';
function App() {
  
 
  return (
    <BrowserRouter>
      <Routes>
     
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/adlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route exact path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>\
        <Route exact path='/AddProfile' element={<AddProfile/>}></Route>
       
      
        <Route exact path='/profilesummary' element={<ProfileSummary/>}></Route>
        <Route exact path='/edit' element={<EditProfile/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


