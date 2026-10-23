const { ethers } = require("hardhat");
async function main() {
  const c = await (await ethers.getContractFactory("SimpleStorage")).deploy();
  await c.waitForDeployment();
  console.log("SimpleStorage deployed to:", await c.getAddress());
  await (await c.increment()).wait();
  console.log("counter after increment():", (await c.counter()).toString());
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
