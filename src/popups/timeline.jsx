import React from 'react'
import './timeline.css'

function Timeline(props) {

  
  return props.trigger===true ? (
    <div className='timelinediv'>
        <div className="close" >
            <div id="close" onClick={()=> props.setTrigger(false)}>
            <i class="fa-solid fa-xmark fa-2x"></i>
            </div>
        </div>
        <div id="timeline">
            <div className="timeline-header">
                Timeline
            </div>
            <div className="timeline-grid">
                   
            </div>
        </div>
    </div>
  ):"";
}

export default Timeline