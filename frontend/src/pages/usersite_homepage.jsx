import React from 'react'
import './usersite_homepage.css'
import { testy, testyz } from './testy'
import { useState, useEffect,useRef } from 'react'
import Timeline from '../popups/timeline'
import Reports from '../popups/reports'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';
import {FetchRequest , responseToRequest , SendRequest } from '../Notif' 
import '../notifications/notification.css'
import { func1, func2,CheckPermission } from '../Get_functions'
// import { Set_My_Data, } from '../Set_functions'
import { Set_My_Data,Set_User_Data,InsertReport,GivePermission } from "../Set_function"
// import Notification from '../notifications/notification'
// import {All} from '../NotifReact.js'

function UsersiteHomepage() {

  // const try_promise = async () =>{
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   let walletAddress = await signer.getAddress();
  //   CheckPermission(walletAddress);


  // }.then( ()=>{

  // })

  const backScreentwo=useRef();

  const closeBackscreentwo=(e)=>{
    if(backScreentwo.current===e.target)
    {
      setopenUpdate(false);
    }
 }
  const [allReports,setallReports]=useState([]);
  const [timeline,setTimeline]=useState([]);
  
  
    // let allReports=[];
    const getReports = async () =>{
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      let walletAddress = await signer.getAddress();
      let reports= await func2(walletAddress);
     
      console.log("func2",reports);
       
      let sizeofcids=reports[1].length
      let allreports=[];
      for(let i=0;i<sizeofcids;i++){
          let report={
            "cid":reports[1][i],
            "type":reports[2][i]
          }
          
          allreports.push(report);
          setallReports(allreports);
          
      }
      let sizeofdates=reports[0].length
      let times=[];
      for(let i=0;i<sizeofdates;i++)
        {
          let time={
             date:reports[0][i],
             cid:reports[1][i]
          }
          times.push(time);
          setTimeline(times);
        }
      

      // console.log(allReports);
      // setallReports(prevReports => [...prevReports, report]);
      // console.log("NEW REPORTS ARRAY",allReports)
      
      
      // console.log("func2",func2(walletAddress));
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
    
    // fetch('http://localhost:3000/delete_notification', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(postData)
    // }).then( (data) => {
    //     // console.log(data);
    //     getNotification();
        
    // })

    // await responseToRequest(1,postData.hospital_id,postData.user_id );

    // getNotification();

  }
  const  requestApproved = async (event) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    await responseToRequest(1,event.target.value,walletAddress );
    setNotif("");
    getNotification();
    // GivePermission(event.target.value);
    // deleteNotif(event);
    console.log("now?:",CheckPermission())
    // setNotif([]);
  }
  


  function Notification(props) {
    return (
      <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.hospitalAddress}</h5>
      <p className="card-text">Wants to view your records</p>
      <button type="button" className='access' value= {props.hospitalAddress} onClick = {requestApproved}>Access</button>
      <button type="button" className='deny' value= {props.hospitalAddress} onClick = {()=>{setNotif("")}} >Deny</button>
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
  const [intError,setError]=useState("");
  let name, age, gender, contact;
  const [Name, setname] = useState("")
  const [Age, setage] = useState("")
  const [Gender, setgender] = useState("")
  const [Contact, setcontact] = useState("")
  const [Blood, setblood] = useState("")
  const [Allergy, setallergy] = useState("")
  const [Deficy, setdeficy] = useState("")
  const [Chronic, setchronic] = useState("")
  const [Meta_ID, setID] = useState("")

  const updateBio = (e) => {
    e.preventDefault();
    console.log("wow1");
    if(isNaN(age) || age.trim() === '' || age===null)
    {
      setError("Age Must Be A Number")

    }
    else{
      setopenUpdate(false);
      setError("");
      Set_Data(name, age, gender, contact);
    }//this will edit the bio
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
    console.log(name2,"DETAILS OF USER");
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
    // let prom= await CheckPermission("0x2a7e2c15e86ffb78b89b21ae6f02ecdf110f758f")
    // console.log(prom)


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
  useEffect(() => {
    console.log('Reports state updated:', allReports);
  }, [allReports]); // Log the state whenever it changes
  useEffect(() => {
    console.log('Timeline state updated:', timeline);
  }, [timeline]); // Log the state whenever it changes
  useEffect(()=>{
    fetch_data();
    console.log("EDITING NAME AGE GENDER CONTACT")
  },[openUpdate])



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
  const [Notif, setNotif] = useState("")
  const getNotification = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    let postData = {
      id: walletAddress
    }
    // fetch('http://localhost:3000/get_notification', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(postData)
    // })
    //   // .then(()=>{
    //   //   console.log("doing")
    //   // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log("notif:", data)
    //     if (data) setNotif(data);
    //     // console.log("Permisssion",CheckPermission(walletAddress));
        
    //   })
    // console.log("buddy",FetchRequest(walletAddress));
    let data  = await FetchRequest(walletAddress);
    setNotif(data);
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
        <div className='nav-right'>
        <div className="updatediv"><i  onClick={() => setopenUpdate(true)}class="fa-solid fa-pen" id='update'></i></div>
        <div className="messagediv"><i class="fa-solid fa-message" id='message'></i></div>
        <div className="logoutdiv" >
          <i class="fa-solid fa-arrow-right-from-bracket logout" onClick={disconnectFromMetaMask}></i>
        </div>
        </div>

      </div>
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
          <Timeline trigger={timelinePop} setTrigger={settimelinePop} timeline={timeline} />
          <Reports trigger={reportsPop} setTrigger={setreportsPop} allReports={allReports} />
        </div>
      </div>
      <div className="notificationuser" onClick={testyz}
        class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-solid fa-bars fa-2x" id='notiIcon' ></i>
      </div>

      <div class="offcanvas offcanvas-end canvas-div" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header" >
          <h5 class="offcanvas-title canvas-header" id="offcanvasRightLabel">Notifications:</h5>
          <button type="button" className="btn-close cross-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          {(Notif!=="0x0000000000000000000000000000000000000000" && Notif!=="")?
             (<Notification hospitalAddress={Notif} />):""
          }
          {/* <All></All> */}

        </div>
      </div>

      {openUpdate === true ? (<div className='blur-screen-two' ref={backScreentwo} onClick={closeBackscreentwo}><form onSubmit={updateBio} className='to-update'>
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => {setError("");
            setopenUpdate(false)}}></i>
        </div>
        <div className="update update-name">
          <p>Name:</p>
          <input type="text" onChange={(e) => { name = e.target.value }} />
        </div>
        <div className="update update-age">
          <p>Age:</p>
          <input type="text" onChange={(e) => { age = e.target.value;setError(""); }} />
          {intError && <p className='text-red'>{intError}</p>}
        </div>
        <div className="update update-gender">
          <p>Gender:</p>
          <input type="text" onChange={(e) => { gender = e.target.value }} />
        </div>
        <div className="update update-contact-info">
          <p>Contact Info:</p>
          <input type="text" onChange={(e) => { contact = e.target.value }} />
        </div>
        <input className="submit-update" type="submit"  value="SUBMIT"/>
      
        
      </form></div>) : ""}

    </div>
  )
}

export default UsersiteHomepage