import './App.css';
import React from 'react';
import Loginpage from './loginpage';
import { Route, Routes } from "react-router-dom"
//for checking only
import HospitalHomepage from './pages/hospital_homepage';
import UsersiteHomepage from './pages/usersite_homepage';
import RegistrationPage from './pages/registrationpage';

function App() {


  return (
    <>

      <Routes>


        <Route path='/' element={<Loginpage />} />

        <Route path='/userpage' element={<UsersiteHomepage />} />

        <Route path='/hospitalpage' element={<HospitalHomepage />} />
        <Route path='/registrationpage' element={<RegistrationPage />} />

      </Routes>

    </>
  );
}

export default App;
