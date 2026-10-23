// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SimpleStorage - a counter anyone can increment, decrement and read
/// @author Steven Rios
contract SimpleStorage {
    /// @notice Current counter value (public => auto-generated getter `counter()`)
    uint256 public counter;

    event Incremented(address indexed by, uint256 newValue);
    event Decremented(address indexed by, uint256 newValue);

    error CounterIsZero();

    /// @notice Add 1 to the counter
    function increment() external {
        counter += 1;
        emit Incremented(msg.sender, counter);
    }

    /// @notice Subtract 1 from the counter; reverts at zero instead of underflowing
    function decrement() external {
        if (counter == 0) revert CounterIsZero();
        counter -= 1;
        emit Decremented(msg.sender, counter);
    }

    /// @notice Read the counter (same as `counter()`)
    function getCount() external view returns (uint256) {
        return counter;
    }
}
