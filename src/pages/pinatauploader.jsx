// import React, { useState } from 'react';
// import pinata from '../pinata.config.js';

// const PinataUploader = () => {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     const result = await pinata.pinFile(formData);

//     console.log('File uploaded to IPFS:', result);
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload}>Upload to IPFS</button>
//     </div>
//   );
// };

// export default PinataUploader;