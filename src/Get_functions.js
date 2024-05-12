// import { bytes32ToAscii } from "./HextoASCII";
const ethers = require("ethers");


// const main = async() => {
// const provider = new ethers.providers.BrowserProvider(window.ethereum);


// const address = '0x693933f18c335dfa3a10c8c316d64addafae5725'
// const contract = new ethers.Contract(address, ERC20_ABI, provider)


export async function func1(metamaskID) {
	// console.log(1)
	if (window.ethereum) {
		// console.log(2)
		await window.ethereum.enable(); // Request user permission to connect
		// console.log(ethers.BrowserProvider)
		const provider = new ethers.BrowserProvider(window.ethereum);
		// console.log(4)
		const ERC20_ABI = [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "CID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timeStamp",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					}
				],
				"name": "insertReport",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "permitted",
						"type": "address"
					}
				],
				"name": "permitUpload",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "permitted",
						"type": "address"
					}
				],
				"name": "permitView",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "toRevoke",
						"type": "address"
					}
				],
				"name": "revokeUploadPermission",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "toRevoke",
						"type": "address"
					}
				],
				"name": "revokeViewPermission",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_Blood_Type",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergy",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deficiency",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "chronicdisease",
						"type": "string"
					}
				],
				"name": "set_emergency_info",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_patient_Name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "_age",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "_gender",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "_number",
						"type": "int256"
					}
				],
				"name": "set_general_info",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "get_emergency_data",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "get_general_data",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "",
						"type": "int256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "getReports",
				"outputs": [
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "map",
				"outputs": [
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "age",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "contactNumber",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "bloodType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deficiencies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "chronicDiseases",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "uploadPermitted",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "viewPermitted",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		] // Your ERC20 ABI definition
		const address = '0x8c3365d9d69190e8BE089F78A0e98a0D0EE8A2a3';
		// console.log(address)
		const contract = new ethers.Contract(address, ERC20_ABI, provider);

		try {
			// const signer = await provider.getSigner();
			const signerAddress = metamaskID
			// const name2 = await contract.get_name(signerAddress);
			// let gender = await contract.get_gender(signerAddress);
			// let age = await contract.get_age(signerAddress);
			// let contactnumber = await contract.get_contactnumber(signerAddress);
			// let blood_group = await contract.get_blood_group(signerAddress);
			// let Allergies = await contract.get_Allergies(signerAddress);
			// let Deficiencies = await contract.get_Deficiencies(signerAddress);
			// let ChronicDiseases = await contract.get_ChronicDiseases(signerAddress);
			// age = Number(age)
			// contactnumber = Number(contactnumber)
			// console.log(name);
			// console.log(Number(age));
			let gen_info = await contract.get_general_data(signerAddress);
			let em_info = await contract.get_emergency_data(signerAddress);
			const y = [gen_info, em_info];
			// console.log(y)
			return y;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}

export async function func2(metamaskID) {
	// console.log(1)
	if (window.ethereum) {
		// console.log(2)
		await window.ethereum.enable(); // Request user permission to connect
		// console.log(ethers.BrowserProvider)
		const provider = new ethers.BrowserProvider(window.ethereum);
		// console.log(4)
		const ERC20_ABI = [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "CID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timeStamp",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					}
				],
				"name": "insertReport",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "permitted",
						"type": "address"
					}
				],
				"name": "permitUpload",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "permitted",
						"type": "address"
					}
				],
				"name": "permitView",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "toRevoke",
						"type": "address"
					}
				],
				"name": "revokeUploadPermission",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "toRevoke",
						"type": "address"
					}
				],
				"name": "revokeViewPermission",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_Blood_Type",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergy",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deficiency",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "chronicdisease",
						"type": "string"
					}
				],
				"name": "set_emergency_info",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_patient_Name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "_age",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "_gender",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "_number",
						"type": "int256"
					}
				],
				"name": "set_general_info",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "get_emergency_data",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "get_general_data",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "",
						"type": "int256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					}
				],
				"name": "getReports",
				"outputs": [
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "map",
				"outputs": [
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "age",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "contactNumber",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "bloodType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deficiencies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "chronicDiseases",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "uploadPermitted",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "viewPermitted",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		]// Your ERC20 ABI definition
		const address = '0x8c3365d9d69190e8BE089F78A0e98a0D0EE8A2a3';
		// console.log(address)
		const contract = new ethers.Contract(address, ERC20_ABI, provider);

		try {
			// const signer = await provider.getSigner();
			const signerAddress = metamaskID
			const reports = await contract.getReports(signerAddress);
			return reports;
			// const name2 = await contract.get_name(signerAddress);
			// let gender = await contract.get_gender(signerAddress);
			// let age = await contract.get_age(signerAddress);
			// let contactnumber = await contract.get_contactnumber(signerAddress);
			// let blood_group = await contract.get_blood_group(signerAddress);
			// let Allergies = await contract.get_Allergies(signerAddress);
			// let Deficiencies = await contract.get_Deficiencies(signerAddress);
			// let ChronicDiseases = await contract.get_ChronicDiseases(signerAddress);
			// age = Number(age)
			// contactnumber = Number(contactnumber)
			// console.log(name);
			// console.log(Number(age));

			// const y = [name2, age, gender, contactnumber, blood_group, Allergies, Deficiencies, ChronicDiseases];
			// console.log(y)
			// return y;
		} catch (err) {
			console.log(err);
		}
	}
	else {
		console.log("MetaMask or similar provider not found.");
	}
}
// main()
// export default func1;