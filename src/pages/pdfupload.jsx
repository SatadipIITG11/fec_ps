import React, { useState } from 'react';
import axios from 'axios';//yeh honi chahiye dependency
//yeh pdf upload file esme backend bhi dali hai change karlo guys apne hisab se...
function PdfUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdfFile', selectedFile);
      
      // Send the PDF file to the backend server
      await axios.post('http://example.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset the selected file after successful upload
      setSelectedFile(null);
      
      alert('PDF file uploaded successfully!');
    } catch (error) {
      console.error('Error uploading PDF file:', error);
    //   alert('Error uploading PDF file. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload PDF
      </button>
    </div>
  );
}

export default PdfUpload;
