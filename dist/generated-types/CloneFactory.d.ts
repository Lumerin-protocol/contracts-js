import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from 'ethereum-abi-types-generator';
export interface CallOptions {
    from?: string;
    gasPrice?: string;
    gas?: number;
}
export interface SendOptions {
    from: string;
    value?: number | string | BN | BigNumber;
    gasPrice?: string;
    gas?: number;
}
export interface EstimateGasOptions {
    from?: string;
    value?: number | string | BN | BigNumber;
    gas?: number;
}
export interface MethodPayableReturnContext {
    send(options: SendOptions): PromiEvent<TransactionReceipt>;
    send(options: SendOptions, callback: (error: Error, result: any) => void): PromiEvent<TransactionReceipt>;
    estimateGas(options: EstimateGasOptions): Promise<number>;
    estimateGas(options: EstimateGasOptions, callback: (error: Error, result: any) => void): Promise<number>;
    encodeABI(): string;
}
export interface MethodConstantReturnContext<TCallReturn> {
    call(): Promise<TCallReturn>;
    call(options: CallOptions): Promise<TCallReturn>;
    call(options: CallOptions, callback: (error: Error, result: TCallReturn) => void): Promise<TCallReturn>;
    encodeABI(): string;
}
export interface MethodReturnContext extends MethodPayableReturnContext {
}
export declare type ContractContext = Web3ContractContext<CloneFactory, CloneFactoryMethodNames, CloneFactoryEventsContext, CloneFactoryEvents>;
export declare type CloneFactoryEvents = 'clonefactoryContractPurchased' | 'contractCreated';
export interface CloneFactoryEventsContext {
    clonefactoryContractPurchased(parameters: {
        filter?: {
            _address?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    contractCreated(parameters: {
        filter?: {
            _address?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export declare type CloneFactoryMethodNames = 'new' | 'getContractList' | 'rentalContracts' | 'setCreateNewRentalContract' | 'setPurchaseRentalContract';
export interface ClonefactoryContractPurchasedEventEmittedResponse {
    _address: string;
}
export interface ContractCreatedEventEmittedResponse {
    _address: string;
    _pubkey: string;
}
export interface CloneFactory {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     * @param _lmn Type: address, Indexed: false
     * @param _validator Type: address, Indexed: false
     * @param _poe Type: address, Indexed: false
     */
    'new'(_lmn: string, _validator: string, _poe: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getContractList(): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    rentalContracts(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _validator Type: address, Indexed: false
     * @param _pubKey Type: string, Indexed: false
     */
    setCreateNewRentalContract(_price: string, _limit: string, _speed: string, _length: string, _validator: string, _pubKey: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param contractAddress Type: address, Indexed: false
     * @param _cipherText Type: string, Indexed: false
     */
    setPurchaseRentalContract(contractAddress: string, _cipherText: string): MethodReturnContext;
}
