import React from 'react'
import { useState, useEffect } from 'react'
import './notification.css'

function Notification(props) {
  return (
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">{props.hospitalAddress}</h5>
    <p class="card-text">Wants to view your records</p>
    <button type="button" className='access'>Access</button>
    <button type="button" className='deny'>Deny</button>
  </div>
</div>
  )
}

export default Notification