import { contractABI, contractAddress } from './contract.js';
const { ethers } = require("ethers");

// respondToRequest(grantAccess, patient)

export async function responseToRequest(grantAccess, patient) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const ERC20_ABI = contractABI;
    // Your ERC20 ABI definition
    const address = contractAddress;
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        // const caller = await signer.getAddress();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        await contract.respondToRequest(grantAccess, patient)
    }
    catch (err) {
        console.log(err);
    }
}