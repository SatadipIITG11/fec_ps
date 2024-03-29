import React from 'react'
import './hospital_homepage.css'
import { testy, testyz } from './testy'
import main from '../getname'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PdfUpload from './pdfupload'

import Timeline from '../popups/timeline'
import Reports from '../popups/reports'
// const { ethers } = require("ethers");

import { ethers } from 'ethers';
import { func1 } from '../Get_functions'
import { InsertReport } from "../Set_function"
import { Set_User_Data } from "../Set_function"
let name,age,gender,contact,blood,allergy,deficy,chronic;

function HospitalHomepage() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //!!!!!Yaha dekh category me "category" string rahega!!!!!
  const [category, setCategory] = useState("");
  const options = [
    { id: 1, label: 'Daignostic' },
    { id: 2, label: 'Medication/prescriptions' },
    { id: 3, label: 'Procedural (operations,surgeries,etc)' },
    { id: 4, label: 'Others' },
  ];

  const [inputValue, setInputValue] = useState('');
  //guys inputvalue me search string rahega apne hisab se use karlo

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [addressValue, setaddressValue] = useState('')

  const handleAddressChange = (event) => {
    setaddressValue(event.target.value);
  };
  //upload dropdown button
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCategory(option.label);
    console.log(option.label);
    setIsOpen(false);
  };

  const disconnectFromMetaMask = () => {

    navigate('/');
  }
  const [openupload, setopenupload] = useState(false);
  const [openUpdate,setopenUpdate]=useState(false);
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
    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    let walletAddress = "0xaEB837233665fc43309dABF4abD53338E60a61bE";
    let name2 = await func1(walletAddress)
    // func_get_reports(walletAddress)
    // SetAge(walletAddress)
    console.log(name2);
    setname(name2[0])
    // console.log(name2[1])
    setage(name2[1])
    setgender(name2[2])
    setcontact(name2[3])
    setblood(name2[4])
    setallergy(name2[5])
    setdeficy(name2[6])
    setchronic(name2[7])
    setID(walletAddress)
  }
  const updateBio=()=>{
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
    Set_Data(blood, allergy,deficy, chronic);
    // fetch_data();
    console.log("wow2");
  }

  const Set_Data = async (User_Address, Blood, Allergy, Deficy, Chronic) => {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    // let walletAddress = await signer.getAddress();
    let walletAddress = User_Address;
    // console.log(78)
    Set_User_Data(walletAddress, Blood, Allergy, Deficy, Chronic)
  }

  // const { ethers } = require("ethers");
  //latest code


  const [timelinePop, settimelinePop] = useState(false)
  //baki hai reports ki designing....
  const [reportsPop, setreportsPop] = useState(false)
  const [user_existence, setuser_existence] = useState(false)

  const handleEnter = (event) => {

    if (event.key === 'Enter') {
      //for checking purpose only
      //here I have to check existence of user and set user_existence
      fetch_data(event.target.value)
      // console.log(event.target.value)
      setuser_existence(true)
      console.log("wowoowooowow")
    }

  }

  return (
    <div id='hospihome'>
      <div className="navbarhospi">
        <div className="logohospi">LIFE LEDGER</div>
        <div className="searchdiv">
          <i class="fa-solid fa-magnifying-glass" id='searchicon'></i>
          <input className='searchbar' type="text" placeholder='Search by Id' onChange={handleInputChange} onKeyDown={handleEnter} />
        </div>
        <div className='upload' onClick={() => setopenupload(true)}>
          <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
          <span>Upload</span>
        </div>
        <div className='edit'>
        <div className="updatediv" onClick={()=>setopenUpdate(true)}><i class="fa-solid fa-pen" id='update'></i></div>
        </div>
        <div className="logoutdiv" onClick={disconnectFromMetaMask}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>

      </div>
      {/*Here i have to apply a js script which can render with respect to the existence of user
     Kam baccha hai eske bad user existence check karna padega */}
      {/* on search rendering, User Exsistence define kar
       */}


      <div className="bodyhospi">
        <div className="details">
          <div className="name">
            <div className="nametext">Name:</div>
            <div className="namebox"> {Name} </div>
          </div>
          <div id="id">
            <div className="nametext">Id:</div>
            <div className="namebox"> {Meta_ID} </div>
          </div>
        </div>

        {user_existence === true ?
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
              <Timeline trigger={timelinePop} setTrigger={settimelinePop} />
              <Reports trigger={reportsPop} setTrigger={setreportsPop} />
            </div>
          )
          :
          (
            <div className="blockshospi">
              <div className="box1 box"></div>
              <div className="box2 box"></div>
              <div className="box3 box"></div>
              <div className="box4 box"></div>
            </div>

          )}
        {/* <div className="blockshospi">
            <div className="box1 box"></div>
            <div className="box2 box"></div>
            <div className="box3 box"></div>
            <div className="box4 box"></div>
          </div> */}
      </div>
      <div className="notificationhospi" onClick={main}>
        <i class="fa-solid fa-bars fa-2x" id='notiicon' ></i>
      </div>

      {openupload === true ? (<div id="uploadpop">
        <div className="close-upload" onClick={() => setopenupload(false)}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="addressdiv">
          <input type="text" className='type-address' placeholder='Address' onChange={handleAddressChange} />
        </div>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {options.map(option => (
              <div
                key={option.id}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <div className="browse-upload">
          <PdfUpload />
        </div>
      </div>) : ""}
      { openUpdate===true?(<div className="to-update">
    <div className="close-update">
    <i class="fa-solid fa-xmark" id='cross' onClick={()=>setopenUpdate(false)}></i>
    </div>
     {/* <div className="update update-name">
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
     </div> */}
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

export default HospitalHomepage