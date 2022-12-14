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
export declare type ContractContext = Web3ContractContext<Implementation, ImplementationMethodNames, ImplementationEventsContext, ImplementationEvents>;
export declare type ImplementationEvents = 'Initialized' | 'cipherTextUpdated' | 'contractClosed' | 'contractPurchased' | 'purchaseInfoUpdated';
export interface ImplementationEventsContext {
    Initialized(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    cipherTextUpdated(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    contractClosed(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    contractPurchased(parameters: {
        filter?: {
            _buyer?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    purchaseInfoUpdated(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export declare type ImplementationMethodNames = 'buyer' | 'contractState' | 'contractTotal' | 'encryptedPoolData' | 'escrow_purchaser' | 'escrow_seller' | 'getPublicVariables' | 'initialize' | 'length' | 'limit' | 'price' | 'receivedTotal' | 'seller' | 'setContractCloseOut' | 'setPurchaseContract' | 'setUpdateMiningInformation' | 'setUpdatePurchaseInformation' | 'speed' | 'startingBlockTimestamp';
export interface InitializedEventEmittedResponse {
    version: string | number;
}
export interface CipherTextUpdatedEventEmittedResponse {
    newCipherText: string;
}
export interface ContractPurchasedEventEmittedResponse {
    _buyer: string;
}
export interface GetPublicVariablesResponse {
    result0: string;
    result1: string;
    result2: string;
    result3: string;
    result4: string;
    result5: string;
    result6: string;
    result7: string;
    result8: string;
}
export interface Implementation {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    buyer(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    contractState(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    contractTotal(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    encryptedPoolData(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    escrow_purchaser(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    escrow_seller(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getPublicVariables(): MethodConstantReturnContext<GetPublicVariablesResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _seller Type: address, Indexed: false
     * @param _lmn Type: address, Indexed: false
     * @param _cloneFactory Type: address, Indexed: false
     * @param _validator Type: address, Indexed: false
     */
    initialize(_price: string, _limit: string, _speed: string, _length: string, _seller: string, _lmn: string, _cloneFactory: string, _validator: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    length(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    limit(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    price(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    receivedTotal(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    seller(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param closeOutType Type: uint256, Indexed: false
     */
    setContractCloseOut(closeOutType: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _encryptedPoolData Type: string, Indexed: false
     * @param _buyer Type: address, Indexed: false
     */
    setPurchaseContract(_encryptedPoolData: string, _buyer: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _newEncryptedPoolData Type: string, Indexed: false
     */
    setUpdateMiningInformation(_newEncryptedPoolData: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _price Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _closeoutType Type: uint256, Indexed: false
     */
    setUpdatePurchaseInformation(_price: string, _limit: string, _speed: string, _length: string, _closeoutType: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    speed(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    startingBlockTimestamp(): MethodConstantReturnContext<string>;
}
