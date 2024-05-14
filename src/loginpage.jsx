
import React, { useState } from 'react';
import './loginpage.css'
import { ethers } from 'ethers'
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
// import bgImage from './video/background-img.webm'



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


  const connectWalletHandler = async () => {
    window.web3 = new Web3(window.ethereum)
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');


      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      // .then(results => {
      //   console.log(results[0]);

      //   // getAccountBalance(result[0]);
      // })
      // .catch(error => {
      //   console.log(error.message);

      // });


      // let flag = 1

      try {
        console.log(accounts[0]);
        let postData = {
          "id": accounts[0].toString(),
          "who": toggleState
        };
        fetch('http://localhost:3000/', {
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
            console.log('success:', data)

            if (data === true) {
              handleclick(toggleState);
            }
            //else navigate to registration page
            else {
              alert("You are not registered! Please go to registration page Okay!")
            }
          })
          .catch((e) => {
            console.log("error:", e)
          })

        // handleclick(toggleState);
        //routing karna padega navigate and check the toggle state for this bcz of 2 tabs


      } catch (e) {
        console.log(e);
      }

    } else {
      console.log('Need to install MetaMask');

    }
  }

  // update account, will cause component re-render
  // const accountChangedHandler = (newAccount) => {

  //   getAccountBalance(newAccount.toString());
  // }

  // const getAccountBalance = (account) => {
  //   window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
  //   .then(balance => {
  //     console.log(ethers.utils.formatEther(balance));
  //   })
  //   .catch(error => {
  //     console.log(error.message);
  //   });
  // };

  // const chainChangedHandler = () => {
  //   // reload the page to avoid any errors with chain change mid use of application
  //   window.location.reload();
  // }


  // listen for account changes
  // window.ethereum.on('accountsChanged', accountChangedHandler);

  // window.ethereum.on('chainChanged', chainChangedHandler);



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
        <div className="container">
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