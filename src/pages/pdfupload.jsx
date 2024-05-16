// import React, { useState } from 'react';
// import PinataUploader from './pinatauploader';

// function PdfUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     console.log(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const result = await PinataUploader(selectedFile);

//       // Reset the selected file after successful upload
//       setSelectedFile(null);

//       alert(`PDF file uploaded successfully! IPFS hash: ${result.ipfsHash}, Timestamp: ${result.timestamp}`);
//     } catch (error) {
//       console.error('Error uploading PDF file:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={handleFileChange}
//       />
//       <button onClick={handleUpload} disabled={!selectedFile}>
//         Upload PDF
//       </button>
//     </div>
//   );
// }

// export default PdfUpload;