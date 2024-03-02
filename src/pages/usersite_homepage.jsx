import React from 'react'
import './usersite_homepage.css'
import {testy,testyz} from './testy'
import { useState } from 'react'
import Timeline from '../popups/timeline'
import Reports from '../popups/reports'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function UsersiteHomepage() {
     
  // useEffect(() => {
  //   const disconnectFromMetaMask = () => {
  //     if (window.ethereum && window.ethereum.isMetaMask) {
  //       window.ethereum.removeAllListeners(); // Remove all listeners
  //       window.ethereum = null; // Reset the ethereum object
  //     }
  //   };

  //   window.addEventListener('beforeunload', disconnectFromMetaMask);

  //   return () => {
  //     window.removeEventListener('beforeunload', disconnectFromMetaMask);
  //   };
  // }, []);
  
   const disconnectFromMetaMask=()=>{
     
      navigate('/');
   }
   const navigate=useNavigate();
  // const disconnectFromMetaMask = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     window.ethereum.removeAllListeners(); // Remove all listeners
  //     window.ethereum = null; // Reset the ethereum object
  //     // window.location.reload(); // Reload the page
  //   }
  // };
  const [timelinePop,settimelinePop]=useState(false)
  //baki hai reports ki designing....
  const [reportsPop,setreportsPop]=useState(false)
  const [openUpdate,setopenUpdate]=useState(false)


  //update biodata section

  let name,age,gender,contact,blood,allergy,deficy,chronic
  const [Name,setname]=useState("")
  const [Age,setage]=useState("")
  const [Gender,setgender]=useState("")
  const [Contact,setcontact]=useState("")
  const [Blood,setblood]=useState("")
  const [Allergy,setallergy]=useState("")
  const [Deficy,setdeficy]=useState("")
  const [Chronic,setchronic]=useState("")
  
  const updateBio=()=>{
    setname(name)
    setage(age)
    setgender(gender)
    setcontact(contact)
    setblood(blood)
    setallergy(allergy)
    setdeficy(deficy)
    setchronic(chronic)
    
    setopenUpdate(false)

  }


  return (
    <div id='userhome'>
       <div className="navbaruser">
          <div className="logouser">LIFE LEDGER</div>
          <div className="updatediv" onClick={()=>setopenUpdate(true)}><i class="fa-solid fa-pen" id='update'></i></div>
          <div className="messagediv" onClick={testyz}><i class="fa-solid fa-message" id='message'></i></div>
          <div className="logoutdiv" onClick={disconnectFromMetaMask}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
          
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
            <div className="Box1 Box">
              <ul>
                <li>Name: {Name}</li>
                <li>Age: {Age}</li>
                <li>Gender: {Gender}</li>
                <li>Contact Info: {Contact}</li>
              </ul>


            </div>
            <div className="Box2 Box">
            <ul>
                <li>Blood group: {Blood}</li>
                <li>Allergies: {Allergy}</li>
                <li>Deficiencies: {Deficy}</li>
                <li>Chronic Diseases: {Chronic}</li>
              </ul>
               


            </div>
            <div className="Box3 Box" onClick={()=>setreportsPop(true)}>
              Reports
            </div>
            <div className="Box4 Box" onClick={()=> settimelinePop(true)}>
                   Timeline 
            </div>
            <Timeline trigger={timelinePop} setTrigger={settimelinePop}/>
            <Reports trigger={reportsPop} setTrigger={setreportsPop}/>
        </div>
      </div>
      <div className="notificationuser"  onClick={testyz}
       class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-solid fa-bars fa-2x" id='notiIcon' ></i>
      </div>

      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">NOTIFICATIONS</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Hospital Data.....
  </div>
 </div>
   
   { openUpdate===true?(<div className="to-update">
    <div className="close-update">
    <i class="fa-solid fa-xmark" id='cross' onClick={()=>setopenUpdate(false)}></i>
    </div>
     <div className="update update-name">
       <span>Name:</span>
       <input type="text" onChange={(e)=>{name=e.target.value}}/>
     </div>
     <div className="update update-age">
     <span>Age:</span>
     <input type="text" onChange={(e)=>{age=e.target.value}} />
     </div>
     <div className="update update-gender">
     <span>Gender:</span>
     <input type="text" onChange={(e)=>{gender=e.target.value}} />
     </div>
     <div className="update update-contact-info">
     <span>Contact Info:</span>
     <input type="text" onChange={(e)=>{contact=e.target.value}} />
     </div>
     <div className="update update-bloodgroup">
     <span>Blood group:</span>
     <input type="text" onChange={(e)=>{blood=e.target.value}} />
     </div>
     <div className="update update-allergies">
     <span>Allergies:</span>
     <input type="text" onChange={(e)=>{allergy=e.target.value}}/>
     </div>
     <div className="update update-deficiencies">
     <span>Deficiencies:</span>
     <input type="text" onChange={(e)=>{deficy=e.target.value}}/>
     </div>
     <div className="update update-chronic">
     <span>Chronic Dieases:</span>
     <input type="text" onChange={(e)=>{chronic=e.target.value}}/>
     </div>
     <div className="submit-update" onClick={updateBio}>
      SUBMIT
     </div>
   </div>):""}

    </div>
  )
}

export default UsersiteHomepage