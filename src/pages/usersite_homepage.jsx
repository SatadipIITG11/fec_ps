import React from 'react'
import './usersite_homepage.css'
import {testy,testyz} from './testy'

function UsersiteHomepage() {
  return (
    <div id='userhome'>
       <div className="navbaruser">
          <div className="logouser">LIFE LEDGER</div>
          
          {/* <div className='upload'>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div> */}
          
       </div>
    {/*Here i have to apply a js script which can render with respect to the existence of user
     Kam baccha hai eske bad user existence check karna padega */}
      <div className="bodyuser">
        <div className="Details">
          <div className="Name">
             <div className="Nametext">Name:</div>
             <div className="Namebox"></div>
          </div>
          <div id="Id">
            <div className="Nametext">Id:</div>
            <div className="Namebox"></div>
          </div>
        </div>
           <div className="blocksuser">
            <div className="Box1 Box"></div>
            <div className="Box2 Box"></div>
            <div className="Box3 Box"></div>
            <div className="Box4 Box"></div>
        </div>
      </div>
      <div className="notificationuser" onClick={testyz}>
      <i class="fa-solid fa-bars fa-2x" id='notiIcon' ></i>
      </div>
    </div>
  )
}

export default UsersiteHomepage