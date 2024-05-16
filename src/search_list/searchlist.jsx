import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './searchlist.css'

function Searchlist(props) {
  let users = props.Registeredusers;

  let filteredusers = users.filter((user) => {
    console.log(props.Inputtext)
    return (props.Inputtext && user.includes(props.Inputtext))
  })
  const handleclick = (event) => {

    props.setInputtext(event.target.textContent)
    console.log(event.target.textContent)

    // ig search existence on this basis
    let inputElement = document.getElementById("searchbar")
    inputElement.value = event.target.textContent
    props.setOpenlist(false)

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
