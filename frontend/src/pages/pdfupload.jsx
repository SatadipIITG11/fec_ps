import React, { useState } from 'react';
import axios from 'axios';
import { Set_My_Data, Set_User_Data, InsertReport, GivePermission } from "../Set_function"
import './pdfupload.css'

function PdfUpload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploading(true);

    try {
      const response = await axios.post('https://fec-ps-3.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log("cat", props.category.toString)
      await InsertReport(props.user_id, response.data.timestamp, response.data.ipfsHash, props.category); //props.category.toString//"Procedural"
      setUploading(false);
      setUploadResult(response.data);
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading PDF file:', error);
      setUploading(false);
    }



  };

  return (
    <div className="browse-upload">
      <input disabled={props.isdisabled}
        id='pdf-select'
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <button className='upload-button' onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
      {uploadResult && (
        <div className='success-status'>
          {uploadResult.success ? (
            <div>
              <p className='text-s'>PDF file uploaded successfully!</p>
            </div>
          ) : (
            <p className='text-fail'>Failed to upload file to IPFS.</p>

          )}
        </div>
      )}
    </div>
  );
}

export default PdfUpload;
