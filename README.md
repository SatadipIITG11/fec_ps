# LifeLedger

We propose a unified health ledger which helps store their medical history and all sensitive medical data on a decentralized peer to peer network(IPFS) and can be accessed only through metadata stored on blockchain with the permission of the patient. We  introduce a website for our product. 

## Use of blockchain
Data breaches: Data stored on a blockchain is immutable, meaning once recorded, it cannot be altered or deleted. This feature prevents unauthorized tampering with patient record Permissioned Access: Blockchain networks can implement permissioned access controls, where only authorized parties are granted access to sensitive patient information. 
Consolidation: Blockchain-based health ledgers facilitate secure and efficient sharing of health data between hospital chains while ensuring patient privacy and consent.
During emergency situations, doctors can quickly access a patient's comprehensive medical history, including past diagnoses, treatments, allergies, and medications. The unified health ledger ensures that patient records are up-to-date, accurate, and complete
Immutability ensures that data , once uploaded cannot be manipulated by any unauthorized individual or entity.

# Future Prospects
* Addition of medical chatbot
* Useage of Aadhar card for Scalability
* GPS integration to allow info access to nearby hospitals

# Tech Stack
* Blockchain: Solidity
* Front-End: HTML,CSS(Bootstrap),ReactJS
* DataBase: IPFS, MongoDB
* Backend: Node,Express
* Others: Ether.js
* CryptoWallet: Metamask


## Features
## Patient side:
* Registration implemented via metamask id and emergency info.
* Patient will login via metamask id.
* Once logged in,the patient can view and modify his general info.Medical reports can be viewed in chronological order on the timeline tab.
* The patient can also grant updation access to hospitals.  

## Hospital side:
* Hospital will also login via metamask id.
* The hospital can search the patient using the search bar.(Implemented using MongoDB for faster results)
* Emergency info and general info will be visible.
* Medical reports can be viewed in chronological order on the timeline tab,after permission has been granted via the user to the hospital.
* Medical reports however will require user permission for updation.


## Installation
* Change directory to frontend: cd frontend
* Install dependencies: npm install
* Run frontend server: npm start
* Navigate to backend directory in terminal
* Install dependencies: npm install
* Start backend server: node server
* Start IPFS server: node server
* Make sure to setup your own .env file for Api keys of Piniata IPFS and Mongo Atlas
