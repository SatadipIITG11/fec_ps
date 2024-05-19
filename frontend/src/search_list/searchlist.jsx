import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './searchlist.css'
import { ethers } from 'ethers'

function Searchlist(props) {

  
  let users = props.Registeredusers;

  let filteredusers = users.filter((user) => {
    console.log(props.Inputtext)
    return (props.Inputtext && user.includes(props.Inputtext))
  })
  const handleclick = async (event) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();


    props.setInputtext(event.target.textContent)
    console.log(event.target.textContent)

    // ig search existence on this basis
    let inputElement = document.getElementById("searchbar")
    inputElement.value = event.target.textContent
    props.setOpenlist(false)
    let postData = {
      user_id : event.target.textContent,
      hospital_id : walletAddress

    }
    fetch('http://localhost:3000/add_notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
  

  }
  return (
    <div className='search-list'>
      {
        filteredusers.map((user) => {
          return (<p className='registered-user' value={user} onClick={handleclick}>{user}</p>)
        })
      }

    </div>
  )
}

export default Searchlist
