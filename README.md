# Easy Payment

This is a Easy Payment project where you can Create Account,Check Account,Check Balance,Transfer, Deposit, Calculate you loan amount, Change Default Acoount etc. 

## Description

This project is an innovative web-based application for an Automated Teller Machine (ATM) system, thoughtfully crafted using cutting-edge technologies: React for the frontend and Ethereum blockchain for secure and transparent financial transactions. By leveraging these technologies, users can seamlessly interact with a local Ganache blockchain, a development Ethereum network, through their MetaMask wallet, ensuring a secure and decentralized banking experience.

1 User-Friendly Interface: The application boasts an intuitive and user-friendly interface that ensures a smooth banking experience for users of all levels of technical expertise.

2 Account Creation: 
Users can effortlessly create their bank accounts within the system, requiring minimal information and ensuring a streamlined onboarding process.

3 Account Existence and Balance Checking: The system enables users to verify the existence of their accounts and promptly check their account balances, providing real-time updates.

4 Funds Transfer: Facilitating seamless peer-to-peer transactions, users can transfer funds securely between accounts within the application. The decentralized nature of the Ethereum blockchain ensures reliability and transparency.
  
5 Deposit and Withdrawal Operations: The application accommodates hassle-free deposits and withdrawals, allowing users to manage their funds efficiently.

6 Blockchain Integration: The integration of Ethereum blockchain technology guarantees robust security, immutability, and transparency for all financial operations.

7 MetaMask Wallet Integration: By integrating the widely trusted MetaMask wallet, users can effortlessly manage their digital assets securely and conduct transactions with utmost confidence.

8 Ganache Blockchain Network: The application harnesses the power of a local Ganache blockchain network for testing and development purposes, ensuring optimal performance and efficiency.

Benefits:

* Security: With the implementation of Ethereum blockchain, the system ensures that all financial transactions are highly secure, mitigating the risk of fraudulent activities.

* Transparency: The decentralized nature of the Ethereum blockchain brings transparency to every financial operation, allowing users to verify and audit transactions independently.

* Accessibility: Users can access the application through their web browsers, ensuring convenient access to banking services from anywhere at any time.

* Innovation: By adopting emerging technologies like React and Ethereum, the project stands at the forefront of the latest advancements in fintech, providing users with a modern and forward-thinking banking solution.

### Executing program


To execute the program described in the previous code snippet, follow these steps:

Prerequisites:

* Make sure you have Visual Studio Code (VSCode) installed as your IDE.
* Install Node.js from the official website (https://nodejs.org/). This will also install npm (Node Package Manager) by default.
* Open a terminal or command prompt.

2 Install Hardhat:
npm install -g hardhat

3 Setting up the project:

(i) Create a new folder for your project and navigate to it in the terminal.
Inside the project folder, create a new file named hardhat.config.js. This file will contain the Hardhat configuration for your project and specify the Ethereum network (Ganache in this case).
(ii) Install necessary dependencies:
In your terminal, navigate to your project folder and run the following command:
npm init -y
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers

4 Start the local Ethereum network (Ganache):
npx hardhat node

5 Deploy the smart contract:
In a new terminal (Terminal 2), run the following command to deploy the smart contract on the local Ethereum network:
npx hardhat run --network localhost scripts/deploy.js

6 Start the React application:
In a new terminal (Terminal 3), navigate to your project folder (where package.json is located) and run the following command:
npm start


## Authors
Ashi Yadav
USer Name-Ashi_21BCS8248

## License
This Contract is using the MIT License
