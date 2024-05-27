import React, { useState, useEffect } from 'react';
import './registrationpage.css'; // Importing the CSS file
import { ethers } from 'ethers'
import Web3 from 'web3';
// import { response } from 'express';
import { Set_My_Data,Set_User_Data,InsertReport,GivePermission } from "../Set_function"
import { CheckUser ,CheckHospital, AddHospital, AddUser } from "../Admin_functions"


const RegistrationPage = () => {
  const [Toggle, setToggle] = useState(0);
  const [formData, setFormData] = useState({
    Metamask_id: '',
    Name: '',
    Age: '',
    Gender: '',
    ContactInfo: ''
  });

  useEffect(() => {
    console.log('State updated', formData);
  }, [Toggle]);

  const [tabState,setTabState]=useState(1);
  // !!! tab 1 state is for patient and tab 2 state is for hospital !!!


  


  // const connectWalletHandler = async () => {
  //   window.web3 = new Web3(window.ethereum)
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     console.log('MetaMask Here!');
  //    const accounts=await window.ethereum.request({ method: 'eth_requestAccounts'})
  //     try{
  //       setToggle(1);
  //       console.log(accounts[0]);
  //       setFormData({
  //         ...formData,
  //         Metamask_id: accounts[0] 
  //       });


  //       // handleclick(toggleState);

  //     }catch(e){
  //       console.log(e);
  //     }
  //   } else {
  //     console.log('Need to install MetaMask');
  //   }
  // }
  const connectWalletHandler = () => {
    window.web3 = new Web3(window.ethereum);
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          setToggle(1);
          console.log(accounts[0]);
          setFormData({
            ...formData,
            Metamask_id: accounts[0]
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('Need to install MetaMask');
    }
  };





  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    connectWalletHandler();


    if(tabState==2){
      if(CheckHospital(formData.Metamask_id)) {
        console.log("Already registered") ;
      }
      else {
        AddHospital(formData.Metamask_id) ;
        console.log("registered now") ;
      }

    }
    else{
    const validationErrors = {};
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();

    // Simple validation
    if (!formData.Name.trim()) {
      validationErrors.Name = 'Name is required';
    }
    if (!formData.Age.trim()) {
      validationErrors.Age = 'Age is required';
    }
    if (!formData.Gender.trim()) {
      validationErrors.Gender = 'Gender is required';
    }
    if (!formData.ContactInfo.trim()) {
      validationErrors.ContactInfo = 'ContactInfo is required';
    }

    console.log("me reg?",(CheckUser("0x2A7e2C15e86FFB78b89B21ae6F02ECdf110F758f")))
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      // Handle registration logic here, e.g., API call
      // fetch('https://localhost:8080/',{
      //   method:'POST',
      //   headers:{
      //     'Content-Type':'application/json'
      //   },
      //   body : JSON.stringify(formData)
      // }).then(response => {
      //   window.alert('submitted');
      // }

      // )
      let info = await CheckUser(walletAddress) ;
      if(info) {
        console.log("Already registered") ;
      }
      else {
        await AddUser(walletAddress) ;
        await Set_My_Data( formData.Metamask_id,  formData.Name,  formData.Age,  formData.Gender,  formData.ContactInfo) ;
        console.log("registered now") ;
      }
      



      console.log('Form submitted:', formData);
      // Reset form fields after submission
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }

    }
  };

  return (
    <div className="container"> 
     <h1 className='regis-header'>REGISTRATION PAGE</h1>
      <div className="form-container"> {/* Applying form-container class */}
        {/* <h2>Registration Page</h2> */}
        <div className="registration-tabs">
          <div className={tabState === 1 ? "registration-tab-focused" : "registration-tab"} onClick={() => setTabState(1)}>Patient</div>
          <div className={tabState === 2 ? "registration-tab-focused" : "registration-tab"} onClick={() => setTabState(2)}>Hospital</div>

        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group"> {/* Applying form-group class */}
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            {errors.Name && <span className="error-message">{errors.Name}</span>}
          </div>
          <div className="form-group"> {/* Applying form-group class */}
            <label>Age:</label>
            <input
              type="text"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
            />
            {errors.Age && <span className="error-message">{errors.Age}</span>}
          </div>
          <div className="form-group"> {/* Applying form-group class */}
            <label>Gender:</label>
            <input
              type="text"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
            />
            {errors.gender && <span className="error-message">{errors.Gender}</span>}
          </div>
          <div className="form-group"> {/* Applying form-group class */}
            <label>ContactInfo</label>
            <input
              type="text"
              name="ContactInfo"
              value={formData.ContactInfo}
              onChange={handleChange}
            />
            {errors.ContactInfo && <span className="error-message">{errors.ContactInfo}</span>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
