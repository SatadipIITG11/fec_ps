import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Loginpage from './loginpage';
import {Route,Routes} from "react-router-dom"
//for checking only
import HospitalHomepage from './pages/hospital_homepage';
import UsersiteHomepage from './pages/usersite_homepage';


function App() {

  
  return (
    <>
      
   <Routes>

   
      <Route path='/' element={<Loginpage/>}/>

      <Route path='/homepage' element={<UsersiteHomepage/>}/>

      <Route path='/homepagenew' element={<HospitalHomepage/>}/>
      
   </Routes>
   
   </>
  );
}

export default App;
