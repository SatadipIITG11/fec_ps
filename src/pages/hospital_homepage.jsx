import React from 'react'
import './hospital_homepage.css'
import {testy,testyz} from './testy'
import main from '../getname'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PdfUpload from './pdfupload'
import { ethers } from 'ethers';
import { func1 } from '../Get_functions'
import { InsertReport } from "../Set_function"
import { Set_User_Data } from "../Set_function"


function HospitalHomepage() {
    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //!!!!!Yaha dekh category me "category" string rahega!!!!!
  const [category,setCategory]=useState("");
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
  const [addressValue,setaddressValue]=useState('')

  const handleAddressChange=(event)=> {
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

  const disconnectFromMetaMask=()=>{
     
    navigate('/');
 }
 const [openupload,setopenupload]=useState(false)
 const navigate=useNavigate();

  const [Name, setname] = useState("")
  const [Age, setage] = useState("")
  const [Gender, setgender] = useState("")
  const [Contact, setcontact] = useState("")
  const [Blood, setblood] = useState("")
  const [Allergy, setallergy] = useState("")
  const [Deficy, setdeficy] = useState("")
  const [Chronic, setchronic] = useState("")

  const fetch_data = async (User_Address) => {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    let walletAddress = User_Address;
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
  return (
    <div id='hospihome'>
       <div className="navbarhospi">
          <div className="logohospi">LIFE LEDGER</div>
          <div className="searchdiv">
           <i class="fa-solid fa-magnifying-glass" id='searchicon'></i>
            <input className='searchbar' type="text" placeholder='Search by Id' onChange={handleInputChange} />
          </div>
          <div className='upload' onClick={()=>setopenupload(true)}>
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

    {openupload===true?(<div id="uploadpop">
          <div className="close-upload" onClick={()=>setopenupload(false)}>
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
             <PdfUpload/>
         </div>
      </div>):""}
      
  </div>
  )
}

export default HospitalHomepage