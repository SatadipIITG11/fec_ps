const { ethers } = require("ethers");

export async function Set_My_Data(metamaskID, name, age, gender, contactnumber) {
    const provider = new ethers.BrowserProvider(window.ethereum);
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
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        console.log(10)
        await contract.set_general_info(metamaskID, name, age, gender, contactnumber)
        console.log(11)
        console.log(12)
    }
    catch (err) {
        console.log(err);
    }
}

export async function Set_User_Data(metamaskID, blood_type, allergy, deficiency, chronicdisease) {
    const provider = new ethers.BrowserProvider(window.ethereum);
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
    ]
    const address = '0x8c3365d9d69190e8BE089F78A0e98a0D0EE8A2a3';
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
    ]
    const address = '0x8c3365d9d69190e8BE089F78A0e98a0D0EE8A2a3';
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