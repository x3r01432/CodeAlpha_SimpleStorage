const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let c, user;
  beforeEach(async () => {
    [, user] = await ethers.getSigners();
    c = await (await ethers.getContractFactory("SimpleStorage")).deploy();
  });

  it("starts at 0", async () => {
    expect(await c.counter()).to.equal(0n);
    expect(await c.getCount()).to.equal(0n);
  });
  it("increments and emits event", async () => {
    await expect(c.increment()).to.emit(c, "Incremented").withArgs((await ethers.getSigners())[0].address, 1n);
    expect(await c.counter()).to.equal(1n);
  });
  it("decrements and emits event", async () => {
    await c.increment(); await c.increment();
    await expect(c.connect(user).decrement()).to.emit(c, "Decremented").withArgs(user.address, 1n);
    expect(await c.getCount()).to.equal(1n);
  });
  it("reverts decrement at zero", async () => {
    await expect(c.decrement()).to.be.revertedWithCustomError(c, "CounterIsZero");
  });
  it("any account can change the counter", async () => {
    await c.connect(user).increment();
    await c.increment();
    expect(await c.counter()).to.equal(2n);
  });
});
