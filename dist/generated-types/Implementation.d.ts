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
export type ContractContext = Web3ContractContext<Implementation, ImplementationMethodNames, ImplementationEventsContext, ImplementationEvents>;
export type ImplementationEvents = 'Initialized' | 'OwnershipTransferred' | 'Upgraded' | 'closedEarly' | 'contractPurchased' | 'destinationUpdated' | 'fundsClaimed' | 'fundsClaimedValidator' | 'purchaseInfoUpdated';
export interface ImplementationEventsContext {
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
    closedEarly(parameters: {
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
    destinationUpdated(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    fundsClaimed(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    fundsClaimedValidator(parameters: {
        filter?: {
            _validator?: string | string[];
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
}
export type ImplementationMethodNames = 'UPGRADE_INTERFACE_VERSION' | 'VALIDATOR_FEE_DECIMALS' | 'VERSION' | 'buyer' | 'claimFunds' | 'claimFundsValidator' | 'cloneFactory' | 'closeEarly' | 'contractState' | 'encrDestURL' | 'encrValidatorURL' | 'feeToken' | 'futureTerms' | 'getHistory' | 'getPublicVariablesV2' | 'getStats' | 'hashrateOracle' | 'history' | 'initialize' | 'isDeleted' | 'owner' | 'paymentToken' | 'priceAndFee' | 'proxiableUUID' | 'pubKey' | 'renounceOwnership' | 'seller' | 'setContractDeleted' | 'setDestination' | 'setPurchaseContract' | 'setUpdatePurchaseInformation' | 'startingBlockTimestamp' | 'terms' | 'transferOwnership' | 'upgradeToAndCall' | 'validator' | 'validatorFeeRateScaled';
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
export interface ClosedEarlyEventEmittedResponse {
    _reason: string | number;
}
export interface ContractPurchasedEventEmittedResponse {
    _buyer: string;
}
export interface DestinationUpdatedEventEmittedResponse {
    newValidatorURL: string;
    newDestURL: string;
}
export interface FundsClaimedValidatorEventEmittedResponse {
    _validator: string;
}
export interface PurchaseInfoUpdatedEventEmittedResponse {
    _address: string;
}
export interface FutureTermsResponse {
    _price: string;
    _limit: string;
    _speed: string;
    _length: string;
    _version: string;
    _profitTarget: string;
}
export interface HistoryentryResponse {
    _goodCloseout: boolean;
    _purchaseTime: string;
    _endTime: string;
    _price: string;
    _fee: string;
    _speed: string;
    _length: string;
    _buyer: string;
}
export interface _termsResponse {
    _price: string;
    _limit: string;
    _speed: string;
    _length: string;
    _version: string;
    _profitTarget: string;
}
export interface GetPublicVariablesV2Response {
    _state: string;
    _terms: _termsResponse;
    _startingBlockTimestamp: string;
    _buyer: string;
    _seller: string;
    _encryptedPoolData: string;
    _isDeleted: boolean;
    _balance: string;
    _hasFutureTerms: boolean;
}
export interface GetStatsResponse {
    _successCount: string;
    _failCount: string;
}
export interface HistoryResponse {
    _goodCloseout: boolean;
    _purchaseTime: string;
    _endTime: string;
    _price: string;
    _fee: string;
    _speed: string;
    _length: string;
    _buyer: string;
}
export interface PriceAndFeeResponse {
    result0: string;
    result1: string;
}
export interface TermsResponse {
    _price: string;
    _limit: string;
    _speed: string;
    _length: string;
    _version: string;
    _profitTarget: string;
}
export interface Implementation {
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
    buyer(): MethodConstantReturnContext<string>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     */
    claimFunds(): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    claimFundsValidator(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    cloneFactory(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param reason Type: uint8, Indexed: false
     */
    closeEarly(reason: string | number): MethodReturnContext;
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
    encrDestURL(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    encrValidatorURL(): MethodConstantReturnContext<string>;
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
    futureTerms(): MethodConstantReturnContext<FutureTermsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _offset Type: uint256, Indexed: false
     * @param _limit Type: uint256, Indexed: false
     */
    getHistory(_offset: string, _limit: string): MethodConstantReturnContext<HistoryentryResponse[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getPublicVariablesV2(): MethodConstantReturnContext<GetPublicVariablesV2Response>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getStats(): MethodConstantReturnContext<GetStatsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    hashrateOracle(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    history(parameter0: string): MethodConstantReturnContext<HistoryResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _cloneFactory Type: address, Indexed: false
     * @param _hashrateOracle Type: address, Indexed: false
     * @param _paymentToken Type: address, Indexed: false
     * @param _feeToken Type: address, Indexed: false
     * @param _seller Type: address, Indexed: false
     * @param _pubKey Type: string, Indexed: false
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     */
    initialize(_cloneFactory: string, _hashrateOracle: string, _paymentToken: string, _feeToken: string, _seller: string, _pubKey: string, _speed: string, _length: string, _profitTarget: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    isDeleted(): MethodConstantReturnContext<boolean>;
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
    priceAndFee(): MethodConstantReturnContext<PriceAndFeeResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    proxiableUUID(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    pubKey(): MethodConstantReturnContext<string>;
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
     */
    seller(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _isDeleted Type: bool, Indexed: false
     */
    setContractDeleted(_isDeleted: boolean): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _encrValidatorURL Type: string, Indexed: false
     * @param _encrDestURL Type: string, Indexed: false
     */
    setDestination(_encrValidatorURL: string, _encrDestURL: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _encrValidatorURL Type: string, Indexed: false
     * @param _encrDestURL Type: string, Indexed: false
     * @param _price Type: uint256, Indexed: false
     * @param _buyer Type: address, Indexed: false
     * @param _validator Type: address, Indexed: false
     * @param _validatorFeeRateScaled Type: uint256, Indexed: false
     */
    setPurchaseContract(_encrValidatorURL: string, _encrDestURL: string, _price: string, _buyer: string, _validator: string, _validatorFeeRateScaled: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _speed Type: uint256, Indexed: false
     * @param _length Type: uint256, Indexed: false
     * @param _profitTarget Type: int8, Indexed: false
     */
    setUpdatePurchaseInformation(_speed: string, _length: string, _profitTarget: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    startingBlockTimestamp(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    terms(): MethodConstantReturnContext<TermsResponse>;
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
    validator(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    validatorFeeRateScaled(): MethodConstantReturnContext<string>;
}
