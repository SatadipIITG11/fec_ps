import React from 'react'
import './hospital_homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect,useRef } from 'react'
import PdfUpload from './pdfupload'
import Timeline from '../popups/timeline'
import Reports from '../popups/reports'
import {FetchRequest , responseToRequest , SendRequest } from '../Notif' 
import { ethers } from 'ethers';
import { func1, func2,CheckPermission } from '../Get_functions'
import { InsertReport } from "../Set_function"
import { Set_User_Data } from "../Set_function"
import Searchlist from '../search_list/searchlist'
let blood, allergy, deficy, chronic;

function HospitalHomepage() {

  const [allReports, setallReports] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [issearchlistopen, setSearchlistopen] = useState(true);
  // useEffect ( ()=>{console.log(registeredUsers) } ,  registeredUsers );
  const backScreen=useRef();
  const backScreentwo=useRef();

  const closeBackscreen=(e)=>{
     if(backScreen.current===e.target)
     {
      setopenupload(false);
      setUploaddisable(true);
     }
  }
  const closeBackscreentwo=(e)=>{
    if(backScreentwo.current===e.target)
    {
      setopenUpdate(false);
    }
 }
  useEffect(() => {

    fetch('https://lifeledgerfinal2.onrender.com/get_registered_users')
      .then(response => response.json())
      .then((data) => {
        // console.log('success:',data )
        setRegisteredUsers(data);
        console.log("regisuser>>" + registeredUsers);
      }).then(() => {
        // console.log(registeredUsers);
      })
      .catch((e) => {
        console.log("error:", e)
      })

  }, [])

  //inputValue
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //!!!!!Yaha dekh category me "category" string rahega!!!!!
  const [category, setCategory] = useState("");
  const [typeAddress, setTypeAddress] = useState("");
  const options = [
    { id: 1, label: 'Diagnostic' },
    { id: 2, label: 'Medication' },
    { id: 3, label: 'Procedural' },
    { id: 4, label: 'Others' },
  ];

  const [inputValue, setInputValue] = useState('');
  const [inputIDValue, setInputIDValue] = useState('');
  //guys inputvalue me search string rahega apne hisab se use karlo

  const [user_existence, setuser_existence] = useState(false)
  const getReportHospital = async () => {
    // if(inputValue.length != 41)  return ;
    try {
      console.log("func1", func1(inputIDValue));
      setuser_existence(false)
      console.log("user Existence:", user_existence)
      if (inputIDValue) fetch_data(inputIDValue)
      let checky = await CheckPermission(inputIDValue)

      if (checky === false) {
        //yaha popup dede ki permission mangi hain par abhi info access nahi kar sakte aur page refresh karde
        console.log("Dont have permission");
        //aage ka sure nahi dekh lena
        setuser_existence(true);


      }

      else if (checky === true) {
        try {
          setuser_existence(true)
          console.log("func2", func2(inputIDValue));
          let reports = await func2(inputIDValue);

          let sizeofcids = reports[1].length
          let allreports = [];
          for (let i = 0; i < sizeofcids; i++) {
            let report = {
              "cid": reports[1][i],
              "type": reports[2][i]
            }

            allreports.push(report);
            setallReports(allreports);

          }
          let sizeofdates = reports[0].length
          let times = [];
          for (let i = 0; i < sizeofdates; i++) {
            let time = {
              date: reports[0][i],
              cid: reports[1][i]
            }
            times.push(time);
            setTimeline(times);
          }

        }
        catch (e) {
          console.log(e)
        }

      }
    }
    catch (e) {
      console.log(e, "kya error hai bc bata ab")
    }

  }
  useEffect(() => {
    getReportHospital();
  }, [inputIDValue]);


  const handleInputChange = (event) => {

    setuser_existence(false);
    setInputValue(event.target.value);
    setInputIDValue("");
    console.log("handleSEARCHCHANGE", event.target.value)
    setSearchlistopen(true);


  };
  const [addressValue, setaddressValue] = useState('')
  const [uploaddisable, setUploaddisable] = useState(true)

  const handleAddressChange = (event) => {

    let element = document.getElementById("pdf-select")
    setaddressValue(event.target.value);
    console.log(addressValue)

  };
  useEffect(() => {
    console.log('Address updated:', addressValue);
    setUploaddisable(addressValue === "" || category === "");
  }, [addressValue, category]);
  //upload dropdown button
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCategory(option.label);
    console.log(option.label);
    console.log("cat2", category);
    setIsOpen(false);
  };

  const disconnectFromMetaMask = () => {

    navigate('/');
  }
  const [openupload, setopenupload] = useState(false);
  const [openUpdate, setopenUpdate] = useState(false);
  const navigate = useNavigate();

  const [Name, setname] = useState("")
  const [Age, setage] = useState("")
  const [Gender, setgender] = useState("")
  const [Contact, setcontact] = useState("")
  const [Blood, setblood] = useState("")
  const [Allergy, setallergy] = useState("")
  const [Deficy, setdeficy] = useState("")
  const [Chronic, setchronic] = useState("")
  const [Meta_ID, setID] = useState("")

  const fetch_data = async (User_Address) => {

    try {
      let walletAddress = User_Address
      // let walletAddress = "0xaEB837233665fc43309dABF4abD53338E60a61bE"
      let name2 = await func1(walletAddress)
      // func_get_reports(walletAddress)
      // SetAge(walletAddress)
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
    }
    catch (e) {
      console.log(e, "kya bcc error")
    }
  }
  const updateBio = () => {
    // setname(name)
    // setage(age)
    // setgender(gender)
    // setcontact(contact)
    setblood(blood)
    setallergy(allergy)
    setdeficy(deficy)
    setchronic(chronic)
    setopenUpdate(false)
    console.log("wow1");
    Set_Data(blood, allergy, deficy, chronic); // User addresss store karna hai yahan
    // fetch_data();
    console.log("wow2");
  }

  const Set_Data = async (Blood, Allergy, Deficy, Chronic) => {
    ;
    console.log("aaj ki raat", inputIDValue);
    await Set_User_Data(inputIDValue, Blood, Allergy, Deficy, Chronic);
  }

  // const { ethers } = require("ethers");
  //latest code


  const [timelinePop, settimelinePop] = useState(false)
  //baki hai reports ki designing....
  const [reportsPop, setreportsPop] = useState(false)
  const [sideBar, setSidebaropen] = useState(false);

  return (
    <div id='hospihome'>
      <div className="navbarhospi">
        <div className="logohospi hospi-logo">LIFE LEDGER</div>
        <div className="Searchdiv">
          <div className='searchdiv'><div className='searchButton' ><i class="fa-solid fa-magnifying-glass" id='searchicon'></i></div>
            <input className='searchbar' id='searchbar' type="text" placeholder='Search by Id' onChange={handleInputChange} /></div>
        </div>
        <div className='flex-nav'>
          <div className='upload' onClick={() => setopenupload(true)}>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div>
          <div className='edit'>
            <div className="updatediv" onClick={() => setopenUpdate(true)}><i class="fa-solid fa-pen" id='update'></i></div>
          </div>
          <div className="logoutdiv">
            <i class="fa-solid fa-arrow-right-from-bracket logout" onClick={disconnectFromMetaMask}></i>
          </div>
        </div>
        <i class="fa-solid fa-bars fa-2x" id='notiicon' onClick={() => setSidebaropen(!sideBar)}></i>

      </div>

      <div className="bodyhospi">
        {user_existence ? (<div className="Details">
          <div className="Name">
            <div className="Nametext">Name:</div>
            <div className="Namebox"> {Name} </div>
          </div>
          <div id="id">
            <div className="Nametext">Id:</div>
            <div className="Namebox"> {Meta_ID} </div>
          </div>
        </div>) :
          (
            <div className="Details">
              <div className="Name">
                <div className="Nametext">Name:</div>
                <div className="Namebox"></div>
              </div>
              <div id="id">
                <div className="Nametext">Id:</div>
                <div className="Namebox"></div>
              </div>
            </div>

          )}

        <div>{user_existence ?
          (
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
          )
          :
          (
            <div className="blocksuser">
              <div className="box1 Box"></div>
              <div className="box2 Box"></div>
              <div className="box3 Box"></div>
              <div className="box4 Box"></div>
            </div>

          )}</div>
      </div>
      {sideBar ? <div className="sidebarhospi">
        <i className="fa-solid fa-xmark fa-2x abs-close" onClick={() => setSidebaropen(!sideBar)}></i>
        <div className="logohospi g-margin">LIFE LEDGER</div>
        <div className='upload g-margin' onClick={() => setopenupload(true)}>
          <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
          <span>Upload</span>
        </div>
        <div className='edit'>
          <div className="updatediv" onClick={() => setopenUpdate(true)}><i class="fa-solid fa-pen" id='update'></i></div>
        </div>
        
          <i className="fa-solid fa-arrow-right-from-bracket logout g-margin" onClick={disconnectFromMetaMask}></i>
        
      </div>:""}

      {openupload === true ? (<div className='blur-screen' ref={backScreen} onClick={closeBackscreen}><div id="uploadpop">
        <div className="close-upload" >
          <i class="fa-solid fa-xmark" onClick={() => { setopenupload(false); setUploaddisable(true) }}></i>
        </div>
        <div className="addressdiv">
          <input type="text" className='type-address' placeholder='Type Address' onChange={handleAddressChange} />
        </div>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </button>
        {isOpen ? (

          <div className='dropdown-div'>{options.map((option) => {
              
              return (<div
                key={option.id}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
               >
                {option.label}
              </div>);
            })}</div>
          
        ):""}
        {/* <div className="browse-upload"> */}
          <PdfUpload user_id = {inputIDValue} category = {category} isdisabled={uploaddisable} setdisabled={setUploaddisable}  />
        {/* </div> */}
      </div></div>) : ""}
      {openUpdate === true ? (<div className='blur-screen-two' ref={backScreentwo} onClick={closeBackscreentwo}><div className="to-update">
        <div className="close-update">
          <i class="fa-solid fa-xmark" id='cross' onClick={() => setopenUpdate(false)}></i>
        </div>
        <div className="update update-bloodgroup">
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
        </div>
        <div className="submit-update" onClick={updateBio}>
          SUBMIT
        </div>
      </div></div>) : ""}

      {issearchlistopen === true ? <Searchlist Inputtext={inputValue} setInputtext={setInputIDValue} Registeredusers={registeredUsers} setOpenlist={setSearchlistopen} /> : ""}
    </div>

  )
}

export default HospitalHomepage
