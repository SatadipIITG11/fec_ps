// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { contractABI, contractAddress } from './contract.js';
// // import MedicalLedger from './MedicalLedger.json'; // Import your contract's ABI
// import {responseToRequest} from './Notif_Functions.js';
// // Replace with your contract's address


// const provider = new ethers.BrowserProvider(window.ethereum);
// const signer = provider.getSigner();
// const contract = new ethers.Contract(contractAddress, contractABI, signer);

// export async function Notification({ hospital, patient }) {
//     const [visible, setVisible] = useState(true);

//     const handleResponse = async (grantAccess) => {
//         await responseToRequest(grantAccess, patient);
//         setVisible(false);
//     };

//     if (!visible) return null;

//     return (
//         <div>
//             <p>Hospital {hospital} requested access for patient {patient}</p>
//             <button onClick={() => handleResponse(true)}>Yes</button>
//             <button onClick={() => handleResponse(false)}>No</button>
//         </div>
//     );
// }

// export async function All() {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         const handleAccessRequested = (hospital, patient) => {
//             setNotifications((prev) => [...prev, { hospital, patient }]);
//         };

//         contract.on('AccessRequested', handleAccessRequested);

//         return () => {
//             contract.off('AccessRequested', handleAccessRequested);
//         };
//     }, []);

//     return (
//         <div>
//             {notifications.map((notification, index) => (
//                 <Notification key={index} {...notification} />
//             ))}
//         </div>
//     );
// }

// // export default All;
