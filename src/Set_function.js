import { contractABI, contractAddress } from './contract.js';
const { ethers } = require("ethers");


export async function Set_My_Data(metamaskID, name, age, gender, contactnumber) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.set_general_info(metamaskID, name, age, gender, contactnumber)
    }
    catch (err) {
        console.log(err);
    }
}

export async function Set_User_Data(metamaskID, blood_type, allergy, deficiency, chronicdisease) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.set_emergency_info(metamaskID, blood_type, allergy, deficiency, chronicdisease)
    }
    catch (err) {
        console.log(err);
    }
}


export async function InsertReport(metamaskID, cID, timeStamp, category) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.insertReport(metamaskID, cID, timeStamp, category)
    }
    catch (err) {
        console.log(err);
    }
}

export async function GivePermission(patient, hospital) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.addAllowedAddress(patient, hospital)
    }
    catch (err) {
        console.log(err);
    }
}