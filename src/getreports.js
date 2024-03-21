import React from 'react';

const ethers = require("ethers");

// const main = async() => {
// const provider = new ethers.providers.BrowserProvider(window.ethereum);


// const address = '0x693933f18c335dfa3a10c8c316d64addafae5725'
// const contract = new ethers.Contract(address, ERC20_ABI, provider)


export async function func_get_reports(metamaskID) {
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
						"name": "allergy",
						"type": "string"
					}
				],
				"name": "add_allergy",
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
						"name": "chronicdisease",
						"type": "string"
					}
				],
				"name": "add_chronicdisease",
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
						"name": "deficiency",
						"type": "string"
					}
				],
				"name": "add_deficiency",
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
				"name": "getReports",
				"outputs": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "cID",
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
						"internalType": "struct demo.report[4]",
						"name": "",
						"type": "tuple[4]"
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
				"name": "get_Allergies",
				"outputs": [
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
				"name": "get_ChronicDiseases",
				"outputs": [
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
				"name": "get_Deficiencies",
				"outputs": [
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
				"name": "get_age",
				"outputs": [
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
				"name": "get_blood_group",
				"outputs": [
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
				"name": "get_contactnumber",
				"outputs": [
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
				"name": "get_gender",
				"outputs": [
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
				"name": "get_name",
				"outputs": [
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
						"internalType": "int256",
						"name": "_age",
						"type": "int256"
					}
				],
				"name": "set_age",
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
					}
				],
				"name": "set_blood_type",
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
						"internalType": "int256",
						"name": "_number",
						"type": "int256"
					}
				],
				"name": "set_contactnumber",
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
						"name": "_gender",
						"type": "string"
					}
				],
				"name": "set_gender",
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
					}
				],
				"name": "set_name",
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
				"name": "size",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
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
		]; // Your ERC20 ABI definition
		const address = '0x29962030bD8f2813c0589EbcA3Ab7873EA5B5856';
		// console.log(69)
		const contract = new ethers.Contract(address, ERC20_ABI, provider);

		try {
			// const signer = await provider.getSigner();
			const signerAddress = metamaskID
			const reports = await contract.getReports(signerAddress);
			console.log(reports)

			return 0;

			// return name;
			// return name;
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