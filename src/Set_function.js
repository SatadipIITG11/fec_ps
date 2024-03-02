const { ethers } = require("ethers");
// metamaskID, name = 'no_val', age = -1, gender = 'no_val', contactnumber = -1, blood_type = 'no_val', allergy = 'no_val', deficiency = 'no_val', chronicdisease = 'no_val'
export async function Set_User_Data() {
    // console.log(101)
    const provider = new ethers.BrowserProvider(window.ethereum);
    // console.log(90)
    const ERC20_ABI = [
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
    const address = '0xC40793a2Ac65e9F4DCA05f4e623DF758705b5361';
    // console.log(5)
    // const signerAddress = await signer.getAddress();
    try{
        await provider.send("eth_requestAccounts", []);
        // console.log(6)
        const signer = await provider.getSigner();
        // console.log(7)
        const signerAddress = await signer.getAddress();
        // console.log(8)
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        console.log(9)
        const metamaskID = '0xaEB837233665fc43309dABF4abD53338E60a61bE'
        const name = "Varun"
        const age = 19
        const gender = "Male"
        const contactnumber = 6969
        const blood_type = "O Positive"
        const allergy = "Choco"
        const deficiency = "Bitches" 
        const chronicdisease = "Shirts"
        console.log(10)
        await contract.set_general_info(metamaskID, name, age, gender, contactnumber)
        console.log(11)
        await contract.set_emergency_info(metamaskID, blood_type, allergy, deficiency, chronicdisease)
        console.log(12)
    }
    catch (err) {
        console.log(err);
    }
}
// metamaskID, cID, timeStamp, category
export async function InsertReport() {
    // console.log(101)
    const provider = new ethers.BrowserProvider(window.ethereum);
    // console.log(90)
    const ERC20_ABI = [
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
    const address = '0xC40793a2Ac65e9F4DCA05f4e623DF758705b5361';
    // console.log(5)
    // const signerAddress = await signer.getAddress();
    try {
        await provider.send("eth_requestAccounts", []);
        // console.log(6)
        const signer = await provider.getSigner();
        // console.log(7)
        const signerAddress = await signer.getAddress();
        // console.log(8)
        const contract = new ethers.Contract(address, ERC20_ABI, signer)
        console.log(9)
        const metamaskID = '0xaEB837233665fc43309dABF4abD53338E60a61bE'
        // const name = "Varun"
        // const age = 19
        // const gender = "Male"
        // const contactnumber = 6969
        // const blood_type = "O Positive"
        // const allergy = "Choco"
        // const deficiency = "Bitches"
        // const chronicdisease = "Shirts"
        const cID = "cyer"
        const timeStamp = "br3iuf"
        const category = "iy3"
        console.log(10)
        await contract.insertReport(metamaskID, cID, timeStamp, category )
        console.log(11)
        // await contract.set_emergency_info(metamaskID, blood_type, allergy, deficiency, chronicdisease)
        console.log(89)
    }
    catch (err) {
        console.log(err);
    }
}

// module.exports = {
//     SetAge
// }