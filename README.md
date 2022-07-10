# Smart contract setup
Solidity contract, migration and test with Truffle and Ganache.

## Requirements:

[NodeJS](https://nodejs.org/es/download/)

[Ganache Blockchain](https://trufflesuite.com/ganache/index.html)

[Syntax highlighting](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)

## Truffle
Global installation:
```
sudo npm install truffle -g
```
Testing:
```
truffle test
```
Compile:
```
sudo truffle compile
```
Deploy:
```
sudo truffle deploy
```
Console:
```
truffle console
```
Console example:
```
tasksContract = await TasksContract.deployed()
tasksContract.address
```
