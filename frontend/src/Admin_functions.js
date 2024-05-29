import { contractABI, contractAddress } from './contract.js';
const { ethers } = require("ethers");

export async function AddHospital(metamaskID) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.registerHospital(metamaskID)
    }
    catch (err) {
        console.log(err);
    }
}

export async function AddUser(metamaskID) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.registerPatient(metamaskID)
    }
    catch (err) {
        console.log(err);
    }
}

export async function RemoveUser(metamaskID) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.deregisterPatient(metamaskID)
    }
    catch (err) {
        console.log(err);
    }
}

export async function RemoveHospital(metamaskID) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.deregisterHospital(metamaskID)
    }
    catch (err) {
        console.log(err);
    }
}

export async function CheckHospital(metamaskID) {
    if (window.ethereum) {
        await window.ethereum.enable(); // Request user permission to connect
        const provider = new ethers.BrowserProvider(window.ethereum);
        const ERC20_ABI = contractABI;
        // Your ERC20 ABI definition
        const address = contractAddress;
        // const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, provider);
        try {
            const patient = metamaskID
            // const caller = await signer.getAddress();
            const reports = await contract.isRegisteredHospital(patient);
            return reports;
        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("MetaMask or similar provider not found.");
    }
}

export async function CheckUser(metamaskID) {
    if (window.ethereum) {
        await window.ethereum.enable(); // Request user permission to connect
        const provider = new ethers.BrowserProvider(window.ethereum);
        const ERC20_ABI = contractABI;
        // Your ERC20 ABI definition
        const address = contractAddress;
        // const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, provider);
        try {
            const patient = metamaskID
            // const caller = await signer.getAddress();
            const reports = await contract.isRegisteredPatient(patient);
            return reports;
        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("MetaMask or similar provider not found.");
    }
}