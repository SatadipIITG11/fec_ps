import React from 'react'
import './eachreport.css'

function Eachreport(props) {
  return props.Trigger===true ?(
    <div className='PDF'>
            <div className="close" >
                <div id="close" onClick={()=> props.SetTrigger(false)}>
                <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            
        {/* there will be javascript map rendering for each pdf files of different pdf types so make another component for single pdf element */}
    </div>
  ):"";
}

export default Eachreport