export const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "patientId",
                "type": "address"
            }
        ],
        "name": "AccessDenied",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "patientId",
                "type": "address"
            }
        ],
        "name": "AccessGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "patientId",
                "type": "address"
            }
        ],
        "name": "AccessRequested",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "accessRequests",
        "outputs": [
            {
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "patient",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "granted",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "exists",
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
                "name": "patient",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "addAllowedAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "deregisterHospital",
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
        "name": "deregisterPatient",
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
                "name": "caller",
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
                "name": "patient",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "caller",
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
            },
            {
                "internalType": "address",
                "name": "caller",
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
            },
            {
                "internalType": "address",
                "name": "caller",
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
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "isAllowed",
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
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "isRegisteredHospital",
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
                "name": "patient",
                "type": "address"
            }
        ],
        "name": "isRegisteredPatient",
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
        "name": "permitted",
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
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "registerHospital",
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
        "name": "registerPatient",
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
        "name": "registeredHospitals",
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
            }
        ],
        "name": "registeredPatients",
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
                "name": "patient",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "hospital",
                "type": "address"
            }
        ],
        "name": "removeAllowedAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "patientAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "hospitalAddress",
                "type": "address"
            }
        ],
        "name": "requestAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_grant",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "patientAddress",
                "type": "address"
            }
        ],
        "name": "respondToRequest",
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
                "name": "caller",
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
                "internalType": "address",
                "name": "caller",
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
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "toString",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];

export const contractAddress = '0xeaDa555E65e4ba0a7Eb44B1D50D143ff43c58dF8';
