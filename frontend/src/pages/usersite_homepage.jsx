import React from 'react'
import './usersite_homepage.css'
import { testy, testyz } from './testy'
import { useState, useEffect } from 'react'
import Timeline from '../popups/timeline'
import Reports from '../popups/reports'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';

import { func1, func2,CheckPermission } from '../Get_functions'
// import { Set_My_Data, } from '../Set_functions'
import { Set_My_Data,Set_User_Data,InsertReport,GivePermission } from "../Set_function"
import Notification from '../notifications/notification'

function UsersiteHomepage() {

  // const try_promise = async () =>{
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   let walletAddress = await signer.getAddress();
  //   CheckPermission(walletAddress);


  // }.then( ()=>{

  // })
  const getReports = async () =>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    console.log("func2",func2(walletAddress));
    //isse jaise present karna hain karde
    
  }
  
  const  deleteNotif = async (event) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    let postData = {
      user_id : walletAddress ,
      hospital_id : event.target.value 
  }
    
    fetch('http://localhost:3000/delete_notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then( (data) => {
        // console.log(data);
        getNotification();
        
    })
  }
  const  requestApproved = async (event) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    GivePermission(event.target.value);
    deleteNotif(event);
    console.log("now?:",CheckPermission())
  }
  


  function Notification(props) {
    return (
      <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.hospitalAddress}</h5>
      <p className="card-text">Wants to view your records</p>
      <button type="button" className='access' value= {props.hospitalAddress} onClick = {requestApproved}>Access</button>
      <button type="button" className='deny' value= {props.hospitalAddress} onClick = {deleteNotif} >Deny</button>
    </div>
  </div>
    )
  }

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

  const disconnectFromMetaMask = () => {

    navigate('/');
  }
  const navigate = useNavigate();
  // const disconnectFromMetaMask = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     window.ethereum.removeAllListeners(); // Remove all listeners
  //     window.ethereum = null; // Reset the ethereum object
  //     // window.location.reload(); // Reload the page
  //   }
  // };
  const [timelinePop, settimelinePop] = useState(false)
  //baki hai reports ki designing....
  const [reportsPop, setreportsPop] = useState(false)
  const [openUpdate, setopenUpdate] = useState(false)

  //dummy state notification ka badme change kardena
  // const [NOTI, SETNOTI] = useState(["APOLLO", "LALPATH", "EYECARE", "EYECARE", "EYECARE", "EYECARE", "EYECARE", "EYECARE", "EYECARE"])

  //update biodata section

  let name, age, gender, contact, blood, allergy, deficy, chronic;
  const [Name, setname] = useState("")
  const [Age, setage] = useState("")
  const [Gender, setgender] = useState("")
  const [Contact, setcontact] = useState("")
  const [Blood, setblood] = useState("")
  const [Allergy, setallergy] = useState("")
  const [Deficy, setdeficy] = useState("")
  const [Chronic, setchronic] = useState("")
  const [Meta_ID, setID] = useState("")

  const updateBio = () => {
    // setname(name)
    // setage(age)
    // setgender(gender)
    // setcontact(contact)
    // setblood(blood)
    // setallergy(allergy)
    // setdeficy(deficy)
    // setchronic(chronic)
    setopenUpdate(false)
    console.log("wow1");
    Set_Data(name, age, gender, contact);
    // fetch_data();
    console.log("wow2");
  }

  const fetch_data = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    // walletAddress = "0xaEB837233665fc43309dABF4abD53338E60a61bE"
    let name2 = await func1(walletAddress)
    // func_get_reports(walletAddress)
    // SetAge(walletAddress)
    console.log(1);
    console.log(name2);
    setname(name2[0][0])
    // console.log(name2[1])
    setage(Number(name2[0][1]))
    setgender(name2[0][2])
    setcontact(Number(name2[0][3]))
    setblood(name2[1][0])
    setallergy(name2[1][1])
    setdeficy(name2[1][2])
    setchronic(name2[1][3])
    setID(walletAddress)
    let prom= await CheckPermission("0x2a7e2c15e86ffb78b89b21ae6f02ecdf110f758f")
    console.log(prom)


  }

  useEffect(() => {
    fetch_data();
  }, []);
  useEffect(() => {
    getReports();
  }, []);
  useEffect(() => {
    getNotification();
  }, []);


  const Set_Data = async (Name, Age, Gender, Contact) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    // walletAddress = "0xaEB837233665fc43309dABF4abD53338E60a61bE"
    // console.log(78)
    Set_My_Data(walletAddress, Name, Age, Gender, Contact)
  }
  // const Set_Report = async () => {
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   const walletAddress = await signer.getAddress();
  //   // console.log(78)
  //   InsertReport()
  // }
  const [Notif, setNotif] = useState([])
  const getNotification = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    let postData = {
      id: walletAddress
    }
    fetch('http://localhost:3000/get_notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      // .then(()=>{
      //   console.log("doing")
      // })
      .then(response => response.json())
      .then((data) => {
        console.log("notif:", data)
        if (data) setNotif(data);
        // console.log("Permisssion",CheckPermission(walletAddress));
        
      })

  }

  //!!TESTING STATES!!
   
  const [opentest1, setopentest1] = useState(false)
  const [opentest2, setopentest2] = useState(false)
  const [opentest3, setopentest3] = useState(false)
  const [opentest4, setopentest4] = useState(false)

  const updatetest1 = () => {
    
    setopentest1(false)
    
    
    
  }
  const updatetest2 = () => {
    
    setopentest2(false)
   
    
   
  }
  const updatetest3 = () => {
    
    setopentest3(false)
    
  }
  const updatetest4 = () => {
    
    setopentest4(false)
    
  }

  return (
    <div id='userhome'>
      <div className="navbaruser">
        <div className="logouser">LIFE LEDGER</div>
        <div className="updatediv" onClick={() => setopenUpdate(true)}><i class="fa-solid fa-pen" id='update'></i></div>
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
            <div className="Nametext">Name: </div>
            <div className="Namebox"> {Name} </div>
          </div>
          <div id="Id">
            <div className="Nametext">Id: </div>
            <div className="Namebox"> {Meta_ID} </div>
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
          <div className="Box3 Box" onClick={() => setreportsPop(true)}>
            Reports
          </div>
          <div className="Box4 Box" onClick={() => settimelinePop(true)}>
            Timeline
          </div>
          <Timeline trigger={timelinePop} setTrigger={settimelinePop} />
          <Reports trigger={reportsPop} setTrigger={setreportsPop} />
        </div>
      </div>
      <div className="notificationuser" onClick={testyz}
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
          {//Yaha notification state pass kardena as a prop
            Notif.map((value) => <Notification hospitalAddress={value} />)
          }

        </div>
      </div>

      {openUpdate === true ? (<div className="to-update">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopenUpdate(false)}></i>
        </div>
        <div className="update update-name">
          <span>Name:</span>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <span>Age:</span>
          <input type="text" onChange={(e) => { age = e.target.value }} />
        </div>
        <div className="update update-gender">
          <span>Gender:</span>
          <input type="text" onChange={(e) => { gender = e.target.value }} />
        </div>
        <div className="update update-contact-info">
          <span>Contact Info:</span>
          <input type="text" onChange={(e) => { contact = e.target.value }} />
        </div>
        {/* <div className="update update-bloodgroup">
          <span>Blood group:</span>
          <input type="text" onChange={(e) => { blood = e.target.value }} />
        </div>
        <div className="update update-allergies">
          <span>Allergies:</span>
          <input type="text" onChange={(e) => { allergy = e.target.value }} />
        </div>
        <div className="update update-deficiencies">
          <span>Deficiencies:</span>
          <input type="text" onChange={(e) => { deficy = e.target.value }} />
        </div>
        <div className="update update-chronic">
          <span>Chronic Dieases:</span>
          <input type="text" onChange={(e) => { chronic = e.target.value }} />
        </div> */}
        <div className="submit-update" onClick={updateBio}>
          SUBMIT
        </div>
      </div>) : ""}

      {/* !!ONLY FOR TESTING PURPOSE WE WILL REMOVE IT LATER!!
      START!!! */}
      <button className='TEST' onClick={()=>setopentest1(true)}>test1</button>
      <button className='TEST' onClick={()=>setopentest2(true)}>test2</button>
      <button className='TEST' onClick={()=>setopentest3(true)}>test3</button>
      <button className='TEST' onClick={()=>setopentest4(true)}>test4</button>

{opentest1 === true ? (<div className="test">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopentest1(false)}></i>
        </div>
        <div className="update update-name">
          <span>Name:</span>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <span>Age:</span>
          <input type="text" onChange={(e) => { age = e.target.value }} />
        </div>
        
        <div className="submit-update" onClick={updatetest1}>
          SUBMIT
        </div>
      </div>) : ""}

      {opentest2 === true ? (<div className="test">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopentest2(false)}></i>
        </div>
        <div className="update update-name">
          <span>Name:</span>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <span>Age:</span>
          <input type="text" onChange={(e) => { age = e.target.value }} />
        </div>
        
        <div className="submit-update" onClick={updatetest2}>
          SUBMIT
        </div>
      </div>) : ""}

      {opentest3 === true ? (<div className="test">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopentest3(false)}></i>
        </div>
        <div className="update update-name">
          <span>Name:</span>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <span>Age:</span>
          <input type="text" onChange={(e) => { age = e.target.value }} />
        </div>
        
        <div className="submit-update" onClick={updatetest3}>
          SUBMIT
        </div>
      </div>) : ""}

      {opentest4 === true ? (<div className="test">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopentest4(false)}></i>
        </div>
        <div className="update update-name">
          <span>Name:</span>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <span>Age:</span>
          <input type="text" onChange={(e) => { age = e.target.value }} />
        </div>
        
        <div className="submit-update" onClick={updatetest4}>
          SUBMIT
        </div>
      </div>) : ""}
      {/* !!TESTNG CODE ENDS HERE!! */}

    </div>
  )
}

export default UsersiteHomepage