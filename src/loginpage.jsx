
import React,{ useState } from 'react';
import './loginpage.css'

function Loginpage() {

 const[toggleState,setToggle]=useState(1);
  return (

    <div className="LOGIN-PAGE">
        <div className='navbar'>
            <div className="logo">HOSPITALLL</div>
        </div>
    <div className="LOGIN">
    
       <div className="tabs">
         <div className={toggleState===1?"tab-focused":"tab"} onClick={()=>setToggle(1)}>PATIENT</div>
         <div className={toggleState===2?"tab-focused":"tab"} onClick={()=>setToggle(2)}>HOSPITAL</div>

       </div>
    <div className="container">
        <div className="header">
         Log In
        </div>

        <div className="metamask">  
         Continue with Metamask
       </div>

    </div>

   </div>
   </div>
    
  )
}

export default Loginpage