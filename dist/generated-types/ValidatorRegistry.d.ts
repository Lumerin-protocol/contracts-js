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
export type ContractContext = Web3ContractContext<ValidatorRegistry, ValidatorRegistryMethodNames, ValidatorRegistryEventsContext, ValidatorRegistryEvents>;
export type ValidatorRegistryEvents = 'Initialized' | 'OwnershipTransferred' | 'ValidatorComplain' | 'ValidatorDeregistered' | 'ValidatorPunished' | 'ValidatorRegisteredUpdated';
export interface ValidatorRegistryEventsContext {
    Initialized(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    OwnershipTransferred(parameters: {
        filter?: {
            previousOwner?: string | string[];
            newOwner?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    ValidatorComplain(parameters: {
        filter?: {
            validator?: string | string[];
            complainer?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    ValidatorDeregistered(parameters: {
        filter?: {
            validator?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    ValidatorPunished(parameters: {
        filter?: {
            validator?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    ValidatorRegisteredUpdated(parameters: {
        filter?: {
            validator?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export type ValidatorRegistryMethodNames = 'activeValidatorsLength' | 'forceUpdateActive' | 'getActiveValidators' | 'getValidator' | 'getValidatorV2' | 'getValidators' | 'initialize' | 'owner' | 'punishAmount' | 'punishThreshold' | 'renounceOwnership' | 'setPunishAmount' | 'setPunishThreshold' | 'setStakeMinimum' | 'setStakeRegister' | 'stakeMinimum' | 'stakeRegister' | 'token' | 'totalStake' | 'transferOwnership' | 'validatorComplain' | 'validatorDeregister' | 'validatorRegister' | 'validators' | 'validatorsLength' | 'withdraw';
export interface InitializedEventEmittedResponse {
    version: string;
}
export interface OwnershipTransferredEventEmittedResponse {
    previousOwner: string;
    newOwner: string;
}
export interface ValidatorComplainEventEmittedResponse {
    validator: string;
    complainer: string;
}
export interface ValidatorDeregisteredEventEmittedResponse {
    validator: string;
}
export interface ValidatorPunishedEventEmittedResponse {
    validator: string;
}
export interface ValidatorRegisteredUpdatedEventEmittedResponse {
    validator: string;
}
export interface ValidatorResponse {
    stake: string;
    addr: string;
    pubKeyYparity: boolean;
    lastComplainer: string;
    complains: string;
    host: string;
    pubKeyX: string;
}
export interface GetValidatorV2Response {
    validator: ValidatorResponse;
    isActive: boolean;
    isRegistered: boolean;
}
export interface ValidatorsResponse {
    stake: string;
    addr: string;
    pubKeyYparity: boolean;
    lastComplainer: string;
    complains: string;
    host: string;
    pubKeyX: string;
}
export interface ValidatorRegistry {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    activeValidatorsLength(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param validator Type: address, Indexed: false
     */
    forceUpdateActive(validator: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param offset Type: uint256, Indexed: false
     * @param limit Type: uint8, Indexed: false
     */
    getActiveValidators(offset: string, limit: string | number): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    getValidator(addr: string): MethodConstantReturnContext<ValidatorResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    getValidatorV2(addr: string): MethodConstantReturnContext<GetValidatorV2Response>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param offset Type: uint256, Indexed: false
     * @param limit Type: uint8, Indexed: false
     */
    getValidators(offset: string, limit: string | number): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _stakeMinimun Type: uint256, Indexed: false
     * @param _stakeRegister Type: uint256, Indexed: false
     * @param _punishAmount Type: uint256, Indexed: false
     * @param _punishThreshold Type: uint8, Indexed: false
     */
    initialize(_token: string, _stakeMinimun: string, _stakeRegister: string, _punishAmount: string, _punishThreshold: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    owner(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    punishAmount(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    punishThreshold(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    renounceOwnership(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param val Type: uint256, Indexed: false
     */
    setPunishAmount(val: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param val Type: uint8, Indexed: false
     */
    setPunishThreshold(val: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param val Type: uint256, Indexed: false
     */
    setStakeMinimum(val: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param val Type: uint256, Indexed: false
     */
    setStakeRegister(val: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    stakeMinimum(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    stakeRegister(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    token(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalStake(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param newOwner Type: address, Indexed: false
     */
    transferOwnership(newOwner: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    validatorComplain(addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    validatorDeregister(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param stake Type: uint256, Indexed: false
     * @param pubKeyYparity Type: bool, Indexed: false
     * @param pubKeyX Type: bytes32, Indexed: false
     * @param host Type: string, Indexed: false
     */
    validatorRegister(stake: string, pubKeyYparity: boolean, pubKeyX: string | number[], host: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    validators(parameter0: string): MethodConstantReturnContext<ValidatorsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    validatorsLength(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    withdraw(): MethodReturnContext;
}
