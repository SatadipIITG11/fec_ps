import React from 'react'
import './eachreport.css'
import { useState } from 'react';
function Eachreport(props) {
  

  // if (!props.reportCid || props.reportCid === 0) {
  //   return <p>Loading...</p>; // Display a loading message or spinner
  // }
  let report=props.reportCid
  

  return props.Trigger === true ? (
    <div className='PDF'>
      <div className="close" >
        <div id="close" onClick={() => props.SetTrigger(false)}>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className='report'>{
        report.map((value)=>{
          return(
            <><a className='pdf-link' href={`https://gateway.pinata.cloud/ipfs/${value}`}>https://gateway.pinata.cloud/ipfs/{value}</a><br></br></>
          )
        })
      }</div>
      
    </div>
  ) : "";
}

export default Eachreport