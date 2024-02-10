import React from 'react'
import './hospital_homepage.css'
import {testy,testyz} from './testy'
import main from '../getname'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// const { ethers } = require("ethers");



function HospitalHomepage() {

  const [inputValue, setInputValue] = useState('');
  //guys inputvalue me search string rahega apne hisab se use karlo

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const disconnectFromMetaMask=()=>{
     
    navigate('/');
 }
 const navigate=useNavigate();
  // const { ethers } = require("ethers");
  return (
    <div id='hospihome'>
       <div className="navbarhospi">
          <div className="logohospi">LIFE LEDGER</div>
          <div className="searchdiv">
           <i class="fa-solid fa-magnifying-glass" id='searchicon'></i>
            <input className='searchbar' type="text" placeholder='Search by Id' onChange={handleInputChange} />
          </div>
          <div className='upload'>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div>
          <div className="logoutdiv" onClick={disconnectFromMetaMask}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
          
       </div>
    {/*Here i have to apply a js script which can render with respect to the existence of user
     Kam baccha hai eske bad user existence check karna padega */}
      <div className="bodyhospi">
        <div className="details">
          <div className="name">
             <div className="nametext">Name:</div>
             <div className="namebox"></div>
          </div>
          <div id="id">
            <div className="nametext">Id:</div>
            <div className="namebox"></div>
          </div>
        </div>
           <div className="blockshospi">
            <div className="box1 box"></div>
            <div className="box2 box"></div>
            <div className="box3 box"></div>
            <div className="box4 box"></div>
        </div>
      </div>
      <div className="notificationhospi" onClick={main}>
      <i class="fa-solid fa-bars fa-2x" id='notiicon' ></i>
      </div>
      
    </div>
  )
}

export default HospitalHomepage