import React, { useEffect } from 'react'
import './reports.css'
import { useState } from 'react';
import Eachreport from './eachreport';

function Reports(props) {

   
    const [eachreportPop, seteachreportPop] = useState(false)
    const [reportType,setReportType]=useState("");
    let Daignostic=[],MedicationPrescriptions=[],Procedural=[],OtherReports=[];
    
    const [pushReport,setpushReport]=useState([]);
    
    for(let i=0;i<props.allReports.length;i++)
     {
        if(props.allReports[i].type==="Diagnostic")
        {
            Daignostic.push(props.allReports[i].cid)
        }
        else if(props.allReports[i].type==="Medication")
        {
            MedicationPrescriptions.push(props.allReports[i].cid)
        }
        else if(props.allReports[i].type==="Procedural")
        {
            Procedural.push(props.allReports[i].cid)
        }
        else if(props.allReports[i].type==="Others")
        {
            OtherReports.push(props.allReports[i].cid)
            
        }

     }

     const reporthandler=(event)=>{
         setReportType(event.target.textContent);
         console.log(event.target.textContent)
        

         if(event.target.textContent==="Diagnostic")
         {
            setpushReport(Daignostic);
         }
         else if(event.target.textContent==="Medication")
         {
            setpushReport(MedicationPrescriptions);
         }
         else if(event.target.textContent==="Procedural")
         {
            
            setpushReport(Procedural);
            
            
            
         }
         else if(event.target.textContent==="Others")
         {
            setpushReport(OtherReports);
            
         }
         console.log("MKC",OtherReports)
         seteachreportPop(true)
         
     }

     
     console.log("HEHEHEHEEEEEE",Procedural)

    return props.trigger === true ? (

        <div className='reportsdiv'>
            <div className="close" >
                <div id="close" onClick={() => props.setTrigger(false)}>
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </div>
            </div>
            <div id="reports">
                <div className="reports-header">
                    Reports
                </div>
                <div className="reports-grid">
                    <div className="reporttype reporttype1" value="Daignostic" onClick={reporthandler}>
                    Diagnostic
                    </div>
                    <div className="reporttype reporttype2" value="Medication-Prescriptions" onClick={reporthandler}>
                    Medication
                    </div>
                    <div className="reporttype reporttype3" value="Procedural" onClick={reporthandler}>
                    Procedural
                    </div>
                    <div className="reporttype reporttype4" value="Other Reports" onClick={reporthandler}>
                    Others
                    </div>

                </div>
                <Eachreport Trigger={eachreportPop} SetTrigger={seteachreportPop} reportCid={pushReport} reportType={reportType}/>
            </div>
        </div>

    ) : "";
}

export default Reports