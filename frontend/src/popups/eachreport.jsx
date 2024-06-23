import React from 'react'
import './eachreport.css'
import { useState } from 'react';
function Eachreport(props) {
  
 console.log("report prop",props.reportCid)
  if (!props.reportCid || props.reportCid === 0 || props.reportCid === null || props.reportCid.length===0) 
    {
    // return <p>Loading...</p>; // Display a loading message or spinner
    return (props.Trigger === true) ? (
      <div className='PDF'>
        <div className="close" >
          <div id="close" onClick={() => props.SetTrigger(false)}>
          <i class="fa-solid fa-xmark fa-2x"></i>
          </div>
        </div>
        <h1 className='report-heading'>{props.reportType}</h1>
        <div className='report'><p>Your Report Is Currently Unavailable!</p></div>
        
      </div>
    ) : "";

  }
  let report=props.reportCid
  

  return (props.Trigger === true) ? (
    <div className='PDF'>
      <div className="close" >
        <div id="close" onClick={() => props.SetTrigger(false)}>
          <i class="fa-solid fa-xmark fa-2x"></i>
        </div>
      </div>
      <h1 className='report-heading'>{props.reportType}</h1>
      <div className='report'>{
        report.map((value,index)=>{
          return(
            <div className='eachreport'><i class="fa-solid fa-file-medical fa-2x"></i><a className='pdf-link' href={`https://gateway.pinata.cloud/ipfs/${value}`}>Report:  {index+1}</a></div>
          )
        })
      }</div>
      
    </div>
  ) : "";
}
// https://gateway.pinata.cloud/ipfs/{value}
export default Eachreport