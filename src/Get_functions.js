import { contractABI, contractAddress } from './contract.js';
const ethers = require("ethers");

export async function func1(metamaskID) {
	if (window.ethereum) {
		await window.ethereum.enable(); // Request user permission to connect
		const provider = new ethers.BrowserProvider(window.ethereum);
		const ERC20_ABI = contractABI;
		// Your ERC20 ABI definition
		const address = contractAddress;
		const contract = new ethers.Contract(address, ERC20_ABI, provider);

		try {
			const signerAddress = metamaskID
			let gen_info = await contract.get_general_data(signerAddress);
			let em_info = await contract.get_emergency_data(signerAddress);
			const y = [gen_info, em_info];
			return y;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}

export async function CheckPermission(patient, hospital) {
	if (window.ethereum) {
		await window.ethereum.enable(); // Request user permission to connect
		const provider = new ethers.BrowserProvider(window.ethereum);
		const ERC20_ABI = contractABI;
		// Your ERC20 ABI definition
		const address = contractAddress;
		const contract = new ethers.Contract(address, ERC20_ABI, provider);
		try {
			const allowed = await contract.isAllowed(patient, hospital);
			return allowed;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}

export async function func2(metamaskID) {
	if (window.ethereum) {
		await window.ethereum.enable(); // Request user permission to connect
		const provider = new ethers.BrowserProvider(window.ethereum);
		const ERC20_ABI = contractABI;
		// Your ERC20 ABI definition
		const address = contractAddress;
		const contract = new ethers.Contract(address, ERC20_ABI, provider);
		try {
			const signerAddress = metamaskID
			const reports = await contract.getReports(signerAddress);
			return reports;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}