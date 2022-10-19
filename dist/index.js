"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lumerin = exports.Implementation = exports.CloneFactory = void 0;
const CloneFactory_json_1 = __importDefault(require("./abi/CloneFactory.json"));
const Implementation_json_1 = __importDefault(require("./abi/Implementation.json"));
const Lumerin_json_1 = __importDefault(require("./abi/Lumerin.json"));
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
const CloneFactory = (web3, address) => factory(web3, address, CloneFactory_json_1.default);
exports.CloneFactory = CloneFactory;
const Implementation = (web3, address) => factory(web3, address, Implementation_json_1.default);
exports.Implementation = Implementation;
const Lumerin = (web3, address) => factory(web3, address, Lumerin_json_1.default);
exports.Lumerin = Lumerin;
