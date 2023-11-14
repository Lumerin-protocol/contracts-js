"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneFactoryContract = exports.ImplementationContract = exports.FaucetContract = exports.LumerinContract = exports.EthersFaucet = exports.EthersLumerin = exports.EthersImplementation = exports.EthersCloneFactory = exports.Faucet = exports.Lumerin = exports.Implementation = exports.CloneFactory = void 0;
const CloneFactory_json_1 = require("./abi/CloneFactory.json");
const Implementation_json_1 = require("./abi/Implementation.json");
const Lumerin_json_1 = require("./abi/Lumerin.json");
const Faucet_json_1 = require("./abi/Faucet.json");
const factory = (web3, address, abi) => {
    if (!web3 || !web3.eth) {
        throw new Error("Invalid web3 provided");
    }
    // Create a contract using either web3@0.2x or web3@1.0.0
    const contract = typeof web3.eth.Contract === "function"
        ? new web3.eth.Contract(abi, address)
        : web3.eth.contract(abi).at(address);
    return contract;
};
const CloneFactory = (web3, address) => factory(web3, address, CloneFactory_json_1.abi);
exports.CloneFactory = CloneFactory;
const Implementation = (web3, address) => factory(web3, address, Implementation_json_1.abi);
exports.Implementation = Implementation;
const Lumerin = (web3, address) => factory(web3, address, Lumerin_json_1.abi);
exports.Lumerin = Lumerin;
const Faucet = (web3, address) => factory(web3, address, Faucet_json_1.abi);
exports.Faucet = Faucet;
const ethersFactory = (ethers, address, abi, bytecode) => {
    if (!ethers || !ethers.ContractFactory) {
        console.log("Ethers: ", ethers);
        throw new Error("Invalid ethers object provided");
    }
    // Create a contract using either web3@0.2x or web3@1.0.0
    const contract = ethers.ContractFactory(abi, bytecode);
    return contract;
};
const EthersCloneFactory = (ethers, address) => ethersFactory(ethers, address, CloneFactory_json_1.abi, CloneFactory_json_1.bytecode);
exports.EthersCloneFactory = EthersCloneFactory;
const EthersImplementation = (ethers, address) => ethersFactory(ethers, address, Implementation_json_1.abi, Implementation_json_1.bytecode);
exports.EthersImplementation = EthersImplementation;
const EthersLumerin = (ethers, address) => ethersFactory(ethers, address, Lumerin_json_1.abi, Lumerin_json_1.bytecode);
exports.EthersLumerin = EthersLumerin;
const EthersFaucet = (ethers, address) => ethersFactory(ethers, address, Faucet_json_1.abi, Faucet_json_1.bytecode);
exports.EthersFaucet = EthersFaucet;
exports.LumerinContract = { abi: Lumerin_json_1.abi, bytecode: Lumerin_json_1.bytecode };
exports.FaucetContract = { abi: Faucet_json_1.abi, bytecode: Faucet_json_1.bytecode };
exports.ImplementationContract = { abi: Implementation_json_1.abi, bytecode: Implementation_json_1.bytecode };
exports.CloneFactoryContract = { abi: CloneFactory_json_1.abi, bytecode: CloneFactory_json_1.bytecode };
