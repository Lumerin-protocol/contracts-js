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
export type ContractContext = Web3ContractContext<CloneFactory, CloneFactoryMethodNames, CloneFactoryEventsContext, CloneFactoryEvents>;
export type CloneFactoryEvents = 'Initialized' | 'OwnershipTransferred' | 'Upgraded' | 'clonefactoryContractPurchased' | 'contractCreated' | 'contractDeleteUpdated' | 'contractHardDeleted' | 'purchaseInfoUpdated' | 'validatorFeeRateUpdated';
export interface CloneFactoryEventsContext {
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
    Upgraded(parameters: {
        filter?: {
            implementation?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    clonefactoryContractPurchased(parameters: {
        filter?: {
            _address?: string | string[];
            _validator?: string | string[];
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
    contractHardDeleted(parameters: {
        filter?: {
            _address?: string | string[];
        };
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
    validatorFeeRateUpdated(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export type CloneFactoryMethodNames = 'new' | 'UPGRADE_INTERFACE_VERSION' | 'VALIDATOR_FEE_DECIMALS' | 'VERSION' | 'baseImplementation' | 'contractHardDelete' | 'feeToken' | 'getContractDurationInterval' | 'getContractList' | 'getSellers' | 'hashrateOracle' | 'initialize' | 'minSellerStake' | 'owner' | 'paymentToken' | 'proxiableUUID' | 'renounceOwnership' | 'rentalContracts' | 'sellerByAddress' | 'sellerDeregister' | 'sellerRegister' | 'setContractDurationInterval' | 'setContractsDeleted' | 'setCreateNewRentalContractV2' | 'setHashrateOracle' | 'setMinSellerStake' | 'setPurchaseRentalContractV2' | 'setUpdateContractInformationV2' | 'setValidatorFeeRate' | 'transferOwnership' | 'upgradeToAndCall' | 'validatorFeeRateScaled';
export interface InitializedEventEmittedResponse {
    version: string;
}
export interface OwnershipTransferredEventEmittedResponse {
    previousOwner: string;
    newOwner: string;
}
export interface UpgradedEventEmittedResponse {
    implementation: string;
}
export interface ClonefactoryContractPurchasedEventEmittedResponse {
    _address: string;
    _validator: string;
}
export interface ContractCreatedEventEmittedResponse {
    _address: string;
    _pubkey: string;
}
export interface ContractDeleteUpdatedEventEmittedResponse {
    _address: string;
    _isDeleted: boolean;
}
export interface ContractHardDeletedEventEmittedResponse {
    _address: string;
}
export interface PurchaseInfoUpdatedEventEmittedResponse {
    _address: string;
}
export interface ValidatorFeeRateUpdatedEventEmittedResponse {
    _validatorFeeRateScaled: string;
}
export interface GetContractDurationIntervalResponse {
    result0: string;
    result1: string;
}
export interface SellerResponse {
    stake: string;
}
export interface SellerByAddressResponse {
    seller: SellerResponse;
    isActive: boolean;
    isRegistered: boolean;
}
export interface CloneFactory {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     */
    'new'(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    UPGRADE_INTERFACE_VERSION(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    VALIDATOR_FEE_DECIMALS(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    VERSION(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    baseImplementation(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _index Type: uint256, Indexed: false
     * @param _address Type: address, Indexed: false
     */
    contractHardDelete(_index: string, _address: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    feeToken(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getContractDurationInterval(): MethodConstantReturnContext<GetContractDurationIntervalResponse>;
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
     * @param _offset Type: uint256, Indexed: false
     * @param _limit Type: uint8, Indexed: false
     */
    getSellers(_offset: string, _limit: string | number): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    hashrateOracle(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _baseImplementation Type: address, Indexed: false
     * @param _hashrateOracle Type: address, Indexed: false
     * @param _paymentToken Type: address, Indexed: false
     * @param _feeToken Type: address, Indexed: false
     * @param _validatorFeeRateScaled Type: uint256, Indexed: false
     * @param _minSellerStake Type: uint256, Indexed: false
     * @param _minContractDuration Type: uint32, Indexed: false
     * @param _maxContractDuration Type: uint32, Indexed: false
     */
    initialize(_baseImplementation: string, _hashrateOracle: string, _paymentToken: string, _feeToken: string, _validatorFeeRateScaled: string, _minSellerStake: string, _minContractDuration: string | number, _maxContractDuration: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    minSellerStake(): MethodConstantReturnContext<string>;
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
    paymentToken(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    proxiableUUID(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    renounceOwnership(): MethodReturnContext;
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
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _seller Type: address, Indexed: false
     */
    sellerByAddress(_seller: string): MethodConstantReturnContext<SellerByAddressResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    sellerDeregister(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _stake Type: uint256, Indexed: false
     */
    sellerRegister(_stake: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _min Type: uint32, Indexed: false
     * @param _max Type: uint32, Indexed: false
     */
    setContractDurationInterval(_min: string | number, _max: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _contractAddresses Type: address[], Indexed: false
     * @param _isDeleted Type: bool, Indexed: false
     */
    setContractsDeleted(_contractAddresses: string[], _isDeleted: boolean): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     * @param parameter1 Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     * @param parameter5 Type: address, Indexed: false
     * @param _pubKey Type: string, Indexed: false
     */
    setCreateNewRentalContractV2(parameter0: string, parameter1: string, _speed: string, _length: string, _profitTarget: string | number, parameter5: string, _pubKey: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _hashrateOracle Type: address, Indexed: false
     */
    setHashrateOracle(_hashrateOracle: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _minSellerStake Type: uint256, Indexed: false
     */
    setMinSellerStake(_minSellerStake: string): MethodReturnContext;
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
     * @param _contractAddress Type: address, Indexed: false
     * @param parameter1 Type: uint256, Indexed: false
     * @param parameter2 Type: uint256, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     */
    setUpdateContractInformationV2(_contractAddress: string, parameter1: string, parameter2: string, _speed: string, _length: string, _profitTarget: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _validatorFeeRateScaled Type: uint256, Indexed: false
     */
    setValidatorFeeRate(_validatorFeeRateScaled: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param newOwner Type: address, Indexed: false
     */
    transferOwnership(newOwner: string): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param newImplementation Type: address, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    upgradeToAndCall(newImplementation: string, data: string | number[]): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    validatorFeeRateScaled(): MethodConstantReturnContext<string>;
}
