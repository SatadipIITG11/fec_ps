import { contractABI, contractAddress } from './contract.js';
const { ethers } = require("ethers");

export async function requestAccess(patientAddress) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const caller = await signer.getAddress();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        // await contract.set_general_info(metamaskID, caller, name, age, gender, contactnumber)
        const tx = await contract.requestAccess(patientAddress);
        await tx.wait();
        console.log('Access request sent');
    }
    catch (err) {
        console.log(err);
    }
}

export async function respondToRequest(grantAccess, patientAddress) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const caller = await signer.getAddress();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        const tx = await contract.respondToRequest(grantAccess, patientAddress);
        await tx.wait();
        console.log(grantAccess ? 'Access granted' : 'Access denied');
    } catch (error) {
        console.error('Error responding to request:', error);
    }
}

