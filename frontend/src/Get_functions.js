import { contractABI, contractAddress } from './contract.js';
const ethers = require("ethers");

export async function func1(metamaskID) {
	if (window.ethereum) {
		// await window.ethereum.enable(); // Request user permission to connect
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();
		const ERC20_ABI = contractABI;
		// Your ERC20 ABI definition
		const address = contractAddress;
		const contract = new ethers.Contract(address, ERC20_ABI, provider);

		try {
			const caller = await signer.getAddress();
			let gen_info = await contract.get_general_data(metamaskID, caller);
			let em_info = await contract.get_emergency_data(metamaskID, caller);
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

export async function CheckPermission(patient) {
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
			const allowed = await contract.isAllowed(patient, caller);
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
		const signer = await provider.getSigner();
		const contract = new ethers.Contract(address, ERC20_ABI, provider);
		try {
			const patient = metamaskID
			const caller = await signer.getAddress();
			const reports = await contract.getReports(patient, caller);
			return reports;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}