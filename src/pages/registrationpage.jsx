import React, { useState , useEffect} from 'react';
import './registrationpage.css'; // Importing the CSS file
import {ethers} from 'ethers'
import Web3 from 'web3';
// import { response } from 'express';



const RegistrationPage = () => {
  const [Toggle, setToggle] = useState(0);
  const [formData, setFormData] = useState({
    Metamask_id:'',
    Name: '',
    Age: '',
    Gender: '',
    ContactInfo:''
  });

  useEffect(() => {
    console.log('State updated' , formData);
  }, [Toggle]); 


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

  const handleSubmit = (e) => {
    e.preventDefault();
    connectWalletHandler();
    const validationErrors = {};
    
    
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




      console.log('Form submitted:', formData);
      // Reset form fields after submission
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="container"> {/* Applying container class */}
      <div className="form-container"> {/* Applying form-container class */}
        <h2>Registration Page</h2>
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
