const forwarderOrigin = 'https://lifeledger3.onrender.com';

const initialize = () => {
    const connectButton = document.getElementsByClassName('metamask');
    const { ethereum } = window;

    const onboardMetaMaskClient = async () => {
        if (!isMetamaskInstalled()) {
            // prompt the user to install it
            console.log("MetaMask is not installed :(");
            connectButton.value = "Click here to install metamask";

            connectButton.onClick = installMetaMask;
        } else {
            console.log("MetaMask is installed Hurray!!!!!");

            connectButton.onClick = connectMetaMask;
        }
    }

    const connectMetaMask = async () => {
        connectButton.disabled = true;
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            connectButton.value = "Connected";
            console.log("accounts: ", accounts[0]);
            connectButton.disabled = false;
        } catch (err) {
            console.error("error occured while connecting to MetaMask: ", err)
        }
    }

    const isMetamaskInstalled = () => {
        return ethereum && ethereum.isMetaMask;
    }

    const installMetaMask = () => {
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        connectButton.value = "Installation in progress";
        connectButton.disabled = true;
        onboarding.startOnboarding();
    }

    onboardMetaMaskClient();
};

window.addEventListener('DOMContentLoaded', initialize);
