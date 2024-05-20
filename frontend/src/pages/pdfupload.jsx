import React, { useState } from 'react';
import axios from 'axios';
import { Set_My_Data, Set_User_Data, InsertReport, GivePermission } from "../Set_function"

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
      const response = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      InsertReport(props.user_id, response.data.timestamp, response.data.ipfsHash, "Procedural");
      setUploading(false);
      setUploadResult(response.data);
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading PDF file:', error);
      setUploading(false);
    }



  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
      {uploadResult && (
        <div>
          {uploadResult.success ? (
            <div>
              <p>PDF file uploaded successfully!</p>
              <p>IPFS hash: {uploadResult.ipfsHash}</p>
              <p>Timestamp: {uploadResult.timestamp}</p>
            </div>
          ) : (
            <p>Failed to upload file to IPFS.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PdfUpload;
