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
export declare type CloneFactoryEvents = 'Initialized' | 'clonefactoryContractPurchased' | 'contractCreated' | 'contractDeleteUpdated' | 'purchaseInfoUpdated';
export interface CloneFactoryEventsContext {
    Initialized(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
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
    contractDeleteUpdated(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    purchaseInfoUpdated(parameters: {
        filter?: {
            _address?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export declare type CloneFactoryMethodNames = 'baseImplementation' | 'checkWhitelist' | 'getContractList' | 'initialize' | 'isContractDead' | 'lumerin' | 'marketplaceFee' | 'noMoreWhitelist' | 'owner' | 'payMarketplaceFee' | 'rentalContracts' | 'setAddToWhitelist' | 'setContractDeleted' | 'setCreateNewRentalContract' | 'setCreateNewRentalContractV2' | 'setDisableWhitelist' | 'setMarketplaceFeeRecipient' | 'setPurchaseRentalContract' | 'setPurchaseRentalContractV2' | 'setRemoveFromWhitelist' | 'setUpdateContractInformation' | 'setUpdateContractInformationV2' | 'whitelist';
export interface InitializedEventEmittedResponse {
    version: string | number;
}
export interface ClonefactoryContractPurchasedEventEmittedResponse {
    _address: string;
}
export interface ContractCreatedEventEmittedResponse {
    _address: string;
    _pubkey: string;
}
export interface ContractDeleteUpdatedEventEmittedResponse {
    _address: string;
    _isDeleted: boolean;
}
export interface PurchaseInfoUpdatedEventEmittedResponse {
    _address: string;
}
export interface CloneFactory {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    baseImplementation(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _address Type: address, Indexed: false
     */
    checkWhitelist(_address: string): MethodConstantReturnContext<boolean>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getContractList(): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _baseImplementation Type: address, Indexed: false
     * @param _lumerin Type: address, Indexed: false
     * @param _feeRecipient Type: address, Indexed: false
     */
    initialize(_baseImplementation: string, _lumerin: string, _feeRecipient: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    isContractDead(parameter0: string): MethodConstantReturnContext<boolean>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    lumerin(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    marketplaceFee(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    noMoreWhitelist(): MethodConstantReturnContext<boolean>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    owner(): MethodConstantReturnContext<string>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     */
    payMarketplaceFee(): MethodPayableReturnContext;
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
     * @param _address Type: address, Indexed: false
     */
    setAddToWhitelist(_address: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _contractAddress Type: address, Indexed: false
     * @param _isDeleted Type: bool, Indexed: false
     */
    setContractDeleted(_contractAddress: string, _isDeleted: boolean): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _validator Type: address, Indexed: false
     * @param _pubKey Type: string, Indexed: false
     */
    setCreateNewRentalContract(_price: string, _limit: string, _speed: string, _length: string, _validator: string, _pubKey: string): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     * @param _validator Type: address, Indexed: false
     * @param _pubKey Type: string, Indexed: false
     */
    setCreateNewRentalContractV2(_price: string, _limit: string, _speed: string, _length: string, _profitTarget: string | number, _validator: string, _pubKey: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    setDisableWhitelist(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param fee Type: uint256, Indexed: false
     * @param recipient Type: address, Indexed: false
     */
    setMarketplaceFeeRecipient(fee: string, recipient: string): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _contractAddress Type: address, Indexed: false
     * @param _cipherText Type: string, Indexed: false
     * @param termsVersion Type: uint32, Indexed: false
     */
    setPurchaseRentalContract(_contractAddress: string, _cipherText: string, termsVersion: string | number): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _contractAddress Type: address, Indexed: false
     * @param _validatorAddress Type: address, Indexed: false
     * @param _encrValidatorURL Type: string, Indexed: false
     * @param _encrDestURL Type: string, Indexed: false
     * @param termsVersion Type: uint32, Indexed: false
     */
    setPurchaseRentalContractV2(_contractAddress: string, _validatorAddress: string, _encrValidatorURL: string, _encrDestURL: string, termsVersion: string | number): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _address Type: address, Indexed: false
     */
    setRemoveFromWhitelist(_address: string): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _contractAddress Type: address, Indexed: false
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     */
    setUpdateContractInformation(_contractAddress: string, _price: string, _limit: string, _speed: string, _length: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _contractAddress Type: address, Indexed: false
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     */
    setUpdateContractInformationV2(_contractAddress: string, _price: string, _limit: string, _speed: string, _length: string, _profitTarget: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    whitelist(parameter0: string): MethodConstantReturnContext<boolean>;
}
