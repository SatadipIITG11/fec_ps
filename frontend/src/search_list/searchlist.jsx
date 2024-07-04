import React from 'react'
import './searchlist.css'
import { CheckPermission } from '../Get_functions'
import { ethers } from 'ethers'
import { SendRequest } from '../Notif'
function Searchlist(props) {


  let users = props.Registeredusers;

  let filteredusers = users.filter((user) => {
    console.log(props.Inputtext)
    return (props.Inputtext && user.includes(props.Inputtext))
  })
  const handleclick = async (event) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      let walletAddress = await signer.getAddress();


      props.setInputtext(event.target.textContent)
      console.log(event.target.textContent)
      console.log("PERM", CheckPermission(event.target.textContent))
      // ig search existence on this basis
      let inputElement = document.getElementById("searchbar")
      inputElement.value = event.target.textContent
      props.setOpenlist(false)
      let postData = {
        user_id: event.target.textContent,
        hospital_id: walletAddress

      }
      let ans = await CheckPermission(event.target.textContent);
      // fetch('http://localhost:3000/add_notification', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(postData)
      // })
      if (!ans) await SendRequest(event.target.textContent);

    }
    catch (e) {
      console.log(e);
    }


  }
  return (
    <div className='search-list'>
      {
        filteredusers.map((user) => {
          return (<div className='registered-user' value={user} onClick={handleclick}>{user}</div>)
        })
      }

    </div>
  )
}

export default Searchlist
