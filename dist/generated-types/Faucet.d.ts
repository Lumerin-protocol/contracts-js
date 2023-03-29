import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import { PromiEvent, TransactionReceipt, Web3ContractContext } from 'ethereum-abi-types-generator';
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
export declare type ContractContext = Web3ContractContext<Faucet, FaucetMethodNames, FaucetEventsContext, FaucetEvents>;
export declare type FaucetEvents = undefined;
export interface FaucetEventsContext {
}
export declare type FaucetMethodNames = 'new' | 'canClaimTokens' | 'cooldownPeriod' | 'dailyLimitCount' | 'emptyGeth' | 'gethAmount' | 'setTransferLumerin' | 'setUpdateCooldownPeriod' | 'setUpdateGWEIAmount' | 'setUpdateLumerin' | 'setUpdateOwner' | 'setUpdateTxAmount' | 'startOfDay' | 'supervisedClaim' | 'txAmount';
export interface Faucet {
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: constructor
     * @param _lmr Type: address, Indexed: false
     */
    'new'(_lmr: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _address Type: address, Indexed: false
     * @param _ipAddress Type: string, Indexed: false
     */
    canClaimTokens(_address: string, _ipAddress: string): MethodConstantReturnContext<boolean>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    cooldownPeriod(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    dailyLimitCount(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    emptyGeth(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    gethAmount(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _to Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    setTransferLumerin(_to: string, _amount: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _cooldownPeriod Type: uint256, Indexed: false
     */
    setUpdateCooldownPeriod(_cooldownPeriod: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _gwei Type: uint256, Indexed: false
     */
    setUpdateGWEIAmount(_gwei: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _lmr Type: address, Indexed: false
     */
    setUpdateLumerin(_lmr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _newOwner Type: address, Indexed: false
     */
    setUpdateOwner(_newOwner: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _txAmount Type: uint256, Indexed: false
     */
    setUpdateTxAmount(_txAmount: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    startOfDay(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _claiment Type: address, Indexed: false
     * @param _ipAddress Type: string, Indexed: false
     */
    supervisedClaim(_claiment: string, _ipAddress: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    txAmount(): MethodConstantReturnContext<string>;
}
