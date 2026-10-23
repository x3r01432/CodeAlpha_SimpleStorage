# CodeAlpha_SimpleStorage

CodeAlpha Blockchain Development internship — **Task 1: Simple Storage Smart Contract**

## Overview
A minimal Solidity smart contract that stores a public counter anyone can increment, decrement and read. Decrementing at zero reverts with a clear custom error instead of underflowing.

Built with Solidity `^0.8.20` (compiled with 0.8.24) and Hardhat 2.22.17.

## Functions
| Function | Type | Description |
|---|---|---|
| `counter()` | view | Public getter for the current value |
| `getCount()` | view | Same value via an explicit read function |
| `increment()` | write | Adds 1, emits `Incremented(by, newValue)` |
| `decrement()` | write | Subtracts 1, emits `Decremented(by, newValue)`; reverts `CounterIsZero` at 0 |

## Run and test locally
Requires Node.js 18+ (tested on 20).
```bash
npm install          # versions are pinned; .npmrc sets legacy-peer-deps
npm test             # runs the Hardhat test suite
```
Deploy to a local Hardhat node:
```bash
npx hardhat node                 # terminal 1
npm run deploy:local             # terminal 2 - deploys and runs a short demo
```

## Deploy and test in Remix IDE
1. Open https://remix.ethereum.org.
2. In **File Explorer**, create a new file named after the contract and paste in `contracts/SimpleStorage.sol`.
3. In **Solidity Compiler**, choose compiler `0.8.24` (any 0.8.20+ works) and click **Compile**.
4. In **Deploy & Run Transactions**, set Environment to **Remix VM (Cancun)** (or *Injected Provider – MetaMask* for a testnet such as Sepolia).
5. In **Deploy & Run**, click **Deploy** (no constructor arguments).
6. Under *Deployed Contracts*, click `counter` → shows `0`.
7. Click `increment` twice, then `counter` → `2`.
8. Click `decrement` → `counter` shows `1`. Click `decrement` again twice: the second one fails with `CounterIsZero` in the console.

## LinkedIn demo script (60–90 s)
1. Intro: "This is Task 1: Simple Storage Smart Contract from my CodeAlpha Blockchain internship."
2. Show the contract code briefly in VS Code or Remix.
3. Show `counter` = 0 in Remix, click increment twice, decrement once, show 1; then show the revert when decrementing at 0.
4. Run `npm test` in a terminal and show all tests passing.
5. Close with the GitHub link and tag @CodeAlpha.

## Project layout
```
contracts/   Solidity source
test/        Hardhat + Chai tests
scripts/     deploy.js (local deploy + demo)
```

## License
MIT © 2026 Steven Rios
