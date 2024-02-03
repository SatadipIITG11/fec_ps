import React from 'react'
import './hospital_homepage.css'

function HospitalHomepage() {
  return (
    <div id='hospihome'>
       <div className="navbarhospi">
          <div className="logohospi">HOSPITALLL</div>
          <div className="searchdiv">
          <i class="fa-solid fa-magnifying-glass" id='searchicon'></i>
            <input className='searchbar' type="text" placeholder='Search by Id' />
          </div>
          <div id="upload">Upload</div>
       </div>
    </div>
  )
}

export default HospitalHomepage