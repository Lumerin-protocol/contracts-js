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
export type ContractContext = Web3ContractContext<IERC20, IERC20MethodNames, IERC20EventsContext, IERC20Events>;
export type IERC20Events = 'Approval' | 'Transfer';
export interface IERC20EventsContext {
    Approval(parameters: {
        filter?: {
            owner?: string | string[];
            spender?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    Transfer(parameters: {
        filter?: {
            from?: string | string[];
            to?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export type IERC20MethodNames = 'allowance' | 'approve' | 'balanceOf' | 'totalSupply' | 'transfer' | 'transferFrom';
export interface ApprovalEventEmittedResponse {
    owner: string;
    spender: string;
    value: string;
}
export interface TransferEventEmittedResponse {
    from: string;
    to: string;
    value: string;
}
export interface IERC20 {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param owner Type: address, Indexed: false
     * @param spender Type: address, Indexed: false
     */
    allowance(owner: string, spender: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param spender Type: address, Indexed: false
     * @param value Type: uint256, Indexed: false
     */
    approve(spender: string, value: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param account Type: address, Indexed: false
     */
    balanceOf(account: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalSupply(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param to Type: address, Indexed: false
     * @param value Type: uint256, Indexed: false
     */
    transfer(to: string, value: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param from Type: address, Indexed: false
     * @param to Type: address, Indexed: false
     * @param value Type: uint256, Indexed: false
     */
    transferFrom(from: string, to: string, value: string): MethodReturnContext;
}
