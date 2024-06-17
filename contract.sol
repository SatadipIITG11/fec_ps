// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    function toString(address _addr) public pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
    struct report {
        string cID;
        string timeStamp;
        string category;
    }
    struct data {
        string patientName;
        string gender;
        int age;
        int contactNumber;
        string bloodType;
        string allergies;
        string deficiencies;
        string chronicDiseases;
        report[] reports;
    }

    mapping(address => data) public map;
    mapping(address => mapping(address => bool)) public permitted;
    mapping(address => bool) public registeredHospitals;
    mapping(address => bool) public registeredPatients;

    function registerHospital(address hospital) external {
        registeredHospitals[hospital] = true;
    }

    function registerPatient(address patient) external {
        registeredPatients[patient] = true;
    }

    function deregisterHospital(address hospital) external {
        registeredHospitals[hospital] = false;
    }

    function deregisterPatient(address patient) external {
        registeredPatients[patient] = false;
    }

    function isRegisteredHospital(address hospital) external view returns (bool) {
        return registeredHospitals[hospital];
    }

    function isRegisteredPatient(address patient) external view returns (bool) {
        return registeredPatients[patient];
    }

    function addAllowedAddress(address patient, address hospital) external {
        permitted[patient][hospital] = true;
    }

    function removeAllowedAddress(address patient, address hospital) external {
        permitted[patient][hospital] = false;
    }

    function isAllowed(address patient, address hospital) external view returns (bool) {
        return permitted[patient][hospital];
    }

    modifier onlySelf(address patient, address caller) {
        require(
            caller == patient,
            string(abi.encodePacked("Patient : ", toString(patient)," & Caller : ", toString(caller)))
        );
        _;
    }

    modifier onlyAuthHospi(address patient, address caller) {
        require(
            permitted[patient][caller],
            string(abi.encodePacked("Patient : ", toString(patient)," & Caller : ", toString(caller)))
        );
        _;
    }

    modifier onlySelfOrAuthHospi(address patient, address caller) {
        require(
            permitted[patient][caller] || caller == patient,
            string(abi.encodePacked("Patient : ", toString(patient)," & Caller : ", toString(caller)))
        );
        _;
    }

    modifier onlySelfOrRegisteredHospi(address patient, address caller) {
        require(
            registeredHospitals[caller] || caller == patient,
            string(abi.encodePacked("Patient : ", toString(patient)," & Caller : ", toString(caller)))
        );
        _;
    }

    struct Request {
        address hospital;
        address patient;
        bool granted;
        bool exists;
    }

    mapping(address => Request) public accessRequests;

    event AccessRequested(address hospital, address patientId);
    event AccessGranted(address hospital, address patientId);
    event AccessDenied(address hospital, address patientId);

    function requestAccess(address patientAddress, address hospitalAddress) public {
        require(patientAddress != address(0), "Patient does not exist");
        accessRequests[patientAddress] = Request({
            hospital: hospitalAddress,
            patient: patientAddress,
            granted: false,
            exists: true
        });

        emit AccessRequested(hospitalAddress, patientAddress);
    }

    function respondToRequest(bool _grant, address patientAddress) public {
        Request storage request = accessRequests[patientAddress];
        require(request.exists, "No access request found");
        if (_grant) {
            request.granted = true;
            permitted[patientAddress][request.hospital] = true;
            emit AccessGranted(request.hospital, request.patient);
        } 
        else {
            emit AccessDenied(request.hospital, request.patient);
        }
        delete accessRequests[patientAddress];
    }

    function set_general_info(
        address patient,
        address caller,
        string calldata _patient_Name,
        int _age,
        string calldata _gender,
        int _number
    ) external onlySelf(patient, caller) {
        map[patient].patientName = _patient_Name;
        map[patient].gender = _gender;
        map[patient].age = _age;
        map[patient].contactNumber = _number;
    }

    function set_emergency_info(
        address patient, 
        address caller,
        string calldata  _Blood_Type, 
        string calldata  allergy, 
        string calldata deficiency, 
        string calldata chronicdisease
    ) external onlyAuthHospi(patient, caller){
        map[patient].bloodType = _Blood_Type;
        if (bytes(map[patient].allergies).length > 0) map[patient].allergies = string.concat(map[patient].allergies, ", ");
        map[patient].allergies = string.concat(map[patient].allergies, allergy);
        if (bytes(map[patient].deficiencies).length > 0) map[patient].deficiencies = string.concat(map[patient].deficiencies, ", ");
        map[patient].deficiencies = string.concat(map[patient].deficiencies, deficiency);
        if (bytes(map[patient].chronicDiseases).length > 0) map[patient].chronicDiseases = string.concat(map[patient].chronicDiseases, ", ");
        map[patient].chronicDiseases = string.concat(map[patient].chronicDiseases, chronicdisease);
    }

    function insertReport(address patient, address caller, string calldata CID, string calldata timeStamp, string calldata category) external onlyAuthHospi(patient, caller) {
        map[patient].reports.push(report(CID, timeStamp, category));
    }

    function getReports(address patient, address caller) public view onlySelfOrAuthHospi(patient, caller) returns (string[] memory, string[] memory, string[] memory) {
        report[] memory userReports = map[patient].reports;
        string[] memory cids = new string[](userReports.length);
        string[] memory timestamps = new string[](userReports.length);
        string[] memory categories = new string[](userReports.length);

        for (uint256 i = 0; i < userReports.length; i++) {
            cids[i] = userReports[i].cID;
            timestamps[i] = userReports[i].timeStamp;
            categories[i] = userReports[i].category;
        }
        return (cids, timestamps, categories);
    }

    // General Info
    function get_general_data(address patient, address caller) public view onlySelfOrRegisteredHospi(patient, caller) returns(string memory, int, string memory, int){
        return (map[patient].patientName, map[patient].age, map[patient].gender, map[patient].contactNumber) ;
    }

    // Emergency Info
    function get_emergency_data(address patient, address caller) public view onlySelfOrRegisteredHospi(patient, caller) returns(string memory, string memory, string memory, string memory){
        return (map[patient].bloodType, map[patient].allergies, map[patient].deficiencies, map[patient].chronicDiseases);
    }
}