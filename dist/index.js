"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = exports.ValidatorRegistryContract = exports.CloneFactoryContract = exports.ImplementationContract = exports.FaucetContract = exports.LumerinContract = exports.EthersFaucet = exports.EthersLumerin = exports.EthersImplementation = exports.EthersCloneFactory = exports.ValidatorRegistry = exports.Faucet = exports.Lumerin = exports.Implementation = exports.CloneFactory = void 0;
const abi = __importStar(require("./abi/abi"));
exports.abi = abi;
const CloneFactory_json_1 = require("./abi/CloneFactory.json");
const Implementation_json_1 = require("./abi/Implementation.json");
const Lumerin_json_1 = require("./abi/Lumerin.json");
const Faucet_json_1 = require("./abi/Faucet.json");
const ValidatorRegistry_json_1 = require("./abi/ValidatorRegistry.json");
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
const ValidatorRegistry = (web3, address) => factory(web3, address, ValidatorRegistry_json_1.abi);
exports.ValidatorRegistry = ValidatorRegistry;
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
exports.ValidatorRegistryContract = {
    abi: ValidatorRegistry_json_1.abi,
    bytecode: ValidatorRegistry_json_1.bytecode,
};
