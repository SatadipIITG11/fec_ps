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
    </div>
  )
}

export default HospitalHomepage