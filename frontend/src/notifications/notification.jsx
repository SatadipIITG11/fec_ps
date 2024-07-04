import React from 'react'
import { useState, useEffect } from 'react'
import './notification.css'

function Notification(props) {
  return (
    <div class="card each-noti">
      <div class="card-body" id={props.hospitalAddress}>
        <h5 class="card-title">{props.hospitalAddress}</h5>
        <p class="card-text">Wants to view your records</p>
        <button type="button" className='access' value={props.hospitalAddress}>Access</button>
        <button type="button" className='deny' value={props.hospitalAddress}>Deny</button>
      </div>
    </div>
  )
}

export default Notification