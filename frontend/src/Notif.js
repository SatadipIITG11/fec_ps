import { contractABI, contractAddress } from './contract.js';
const { ethers } = require("ethers");

// respondToRequest(grantAccess, patient)

export async function SendRequest(patient) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const caller = await signer.getAddress();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.requestAccess(patient, caller)
    }
    catch (err) {
        console.log(err);
    }
}

export async function responseToRequest(grantAccess, hospital, patient) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        // const caller = await signer.getAddress();
        const caller = await signer.getAddress();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.respondToRequest(grantAccess, caller, hospital, patient)
    }
    catch (err) {
        console.log(err);
    }
}

export async function FetchRequest(patient) {
    if (window.ethereum) {
        await window.ethereum.enable(); // Request user permission to connect
        const provider = new ethers.BrowserProvider(window.ethereum);
        const ERC20_ABI = contractABI;
        // Your ERC20 ABI definition
        const address = contractAddress;
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, provider);
        try {
            const caller = await signer.getAddress();
            const Notif = await contract.fetchNotification(patient, caller);
            return Notif;
        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("MetaMask or similar provider not found.");
    }
}