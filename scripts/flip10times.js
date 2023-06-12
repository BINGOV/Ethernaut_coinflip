const { ethers } = require("hardhat");
const CoinFlipABI = require('./hacker.json');


  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function function1() {
    const [account] = await ethers.getSigners();
    
    const address = 'your hacker contract address';
    const hacker = new ethers.Contract(address, CoinFlipABI, account);
      
    await hacker.flip();
   

 }

 async function executeFunctions() {
    const loopcount = 9;
    const delaytime = 25000; // Wait for 5 seconds
    for (let i = 0; i < loopcount; i++) {
    await function1();
    await delay(delaytime); 
}

  }
  
  executeFunctions();
  
    



