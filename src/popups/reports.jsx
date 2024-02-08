import React from 'react'
import './reports.css'
import { useState } from 'react';
import Eachreport from './eachreport';

function Reports(props) {

   const [eachreportPop,seteachreportPop]=useState(false)

    return props.trigger===true ? (
       
        <div className='reportsdiv'>
            <div className="close" >
                <div id="close" onClick={()=> props.setTrigger(false)}>
                <i class="fa-solid fa-xmark fa-2x"></i>
                </div>
            </div>
            <div id="reports">
                <div className="reports-header">
                    Reports
                </div>
                <div className="reports-grid">
                   <div className="reporttype reporttype1" onClick={()=>seteachreportPop(true)}>
                    <span>1. Report 1</span>  
                   </div>
                   <div className="reporttype reporttype2" onClick={()=>seteachreportPop(true)}>
                   <span>2. Report 2</span>  
                   </div>
                   <div className="reporttype reporttype3" onClick={()=>seteachreportPop(true)}>
                   <span>3. Report 3</span>  
                   </div>
                   <div className="reporttype reporttype4" onClick={()=>seteachreportPop(true)}>
                   <span>4. Other Reports</span>  
                   </div>
                    {/* Waha ek aur prop pass karna hai jo list of pdf bhejega of diff reports */}
                   <Eachreport Trigger={eachreportPop} SetTrigger={seteachreportPop} />
                </div>
            </div>
        </div>
        
      ):"";
}

export default Reports