
import React, { useState } from 'react';
import './loginpage.css'
import { ethers } from 'ethers'
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import { CheckUser, CheckHospital, AddHospital, AddUser } from "./Admin_functions"


function Loginpage() {

  const [toggleState, setToggle] = useState(1);

  const navigate = useNavigate();
  const handleclick = (p) => {
    if (p === 1) {
      navigate('/userpage')
    }
    else {
      navigate('/hospitalpage')
    }


  }

  const [isRequesting, setRequesting] = useState(false);
  const connectWalletHandler = async () => {
    if (isRequesting) {
      alert("Already processing eth_requestAccounts. Please wait.");
      return;
    }

    if (typeof window.ethereum === 'undefined') {
      alert("MetaMask is not installed. Please install it to use this Wallet.");
      return;
    }
    setRequesting(true);
    try {
      window.web3 = new Web3(window.ethereum)
      if (window.ethereum && window.ethereum.isMetaMask) {
        console.log('MetaMask Here!');

        console.log("working?", CheckUser("0x2A7e2C15e86FFB78b89B21ae6F02ECdf110F758f"))
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

        if (toggleState === 1) {
          let info = await CheckUser(accounts[0]);
          console.log("info", info);
          if (info === true) {
            handleclick(toggleState);
          }
          //else navigate to registration page
          else {
            alert("You are not registered! Please go to registration page Okay!")
          }
        }
        else {
          console.log("hospi working?", CheckHospital(accounts[0]));
          let info = await CheckHospital(accounts[0]);
          if (info === true) {
            handleclick(toggleState);
          }
          //else navigate to registration page
          else {
            alert("You are not registered! Please go to registration page Okay!")
          }

        }


      } else {
        alert('Need to install MetaMask');

      }
    }
    catch (error) {
      // alert("Error Message:"+" "+err.message);
      if (error.code === -32002) {
        alert("Request already in progress. Please wait..");
        setTimeout(() => {
          alert("Retrying request...");
          connectWalletHandler();
        }, 50000); // Retry after 50 seconds

      } else {
        alert("Error requesting accounts:", error);
      }
    }
    finally {
      setRequesting(false);
    }
  }

  return (

    <div className="LOGIN-PAGE">

      <div className='navbar'>
        <div className="logo">LIFE LEDGER</div>
      </div>
      <div className="LOGIN">

        <div className="tabs">
          <div className={toggleState === 1 ? "tab-focused" : "tab"} onClick={() => setToggle(1)}>Patient</div>
          <div className={toggleState === 2 ? "tab-focused" : "tab"} onClick={() => setToggle(2)}>Hospital</div>

        </div>
        <div className="containernew">
          <div className="header">
            Log In
          </div>

          <button type="button" className="metamask" id='connectWallet' value="Connect Wallet" onClick={connectWalletHandler}>
            Continue with Metamask
          </button>

          <p className="dontregis "   >
            Don't have an Account?
            <a className='register' href='/registrationpage'>Register</a>
          </p>



        </div>

      </div>
    </div>

  )
}

export default Loginpage
