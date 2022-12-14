import Web3 from "web3";
import { ContractContext as CloneFactoryContext } from "./generated-types/CloneFactory";
import { ContractContext as ImplementationContext } from "./generated-types/Implementation";
import { ContractContext as LumerinContext } from "./generated-types/Lumerin";
export declare const CloneFactory: (web3: Web3, address: string) => CloneFactoryContext;
export declare const Implementation: (web3: Web3, address: string) => ImplementationContext;
export declare const Lumerin: (web3: Web3, address: string) => LumerinContext;
