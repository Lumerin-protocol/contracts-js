export declare const btcPriceOracleMockAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "description";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint80";
        readonly type: "uint80";
    }];
    readonly name: "getRoundData";
    readonly outputs: readonly [{
        readonly name: "roundId";
        readonly internalType: "uint80";
        readonly type: "uint80";
    }, {
        readonly name: "answer";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "startedAt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "updatedAt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "answeredInRound";
        readonly internalType: "uint80";
        readonly type: "uint80";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "latestRoundData";
    readonly outputs: readonly [{
        readonly name: "roundId";
        readonly internalType: "uint80";
        readonly type: "uint80";
    }, {
        readonly name: "answer";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "startedAt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "updatedAt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "answeredInRound";
        readonly internalType: "uint80";
        readonly type: "uint80";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "price";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "ndecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "setPrice";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const cloneFactoryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_validator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "clonefactoryContractPurchased";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_pubkey";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "contractCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "_isDeleted";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "contractDeleteUpdated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "contractHardDeleted";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "purchaseInfoUpdated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_validatorFeeRateScaled";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "validatorFeeRateUpdated";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VALIDATOR_FEE_DECIMALS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "baseImplementation";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "contractHardDelete";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "feeToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getContractDurationInterval";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getContractList";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_offset";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_limit";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "getSellers";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "hashrateOracle";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_baseImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_hashrateOracle";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_paymentToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_validatorFeeRateScaled";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minSellerStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minContractDuration";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_maxContractDuration";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "minSellerStake";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paymentToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rentalContracts";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_seller";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "sellerByAddress";
    readonly outputs: readonly [{
        readonly name: "seller";
        readonly internalType: "struct CloneFactory.Seller";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "isRegistered";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "sellerDeregister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "sellerRegister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_min";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_max";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "setContractDurationInterval";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_contractAddresses";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }, {
        readonly name: "_isDeleted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setContractsDeleted";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }, {
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pubKey";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setCreateNewRentalContractV2";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_hashrateOracle";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setHashrateOracle";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minSellerStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setMinSellerStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_contractAddress";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_validatorAddress";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_encrValidatorURL";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_encrDestURL";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "termsVersion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "setPurchaseRentalContractV2";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_contractAddress";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }];
    readonly name: "setUpdateContractInformationV2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_validatorFeeRateScaled";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setValidatorFeeRate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "validatorFeeRateScaled";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const ecAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_ecAdd";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_ecDouble";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "d";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_ecMul";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "val";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_inverse";
    readonly outputs: readonly [{
        readonly name: "invVal";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_jAdd";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_jDiv";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_jMul";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_jSub";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "z3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "a";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "b";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "compressPoint";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "privKey";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pubX";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pubY";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "deriveKey";
    readonly outputs: readonly [{
        readonly name: "qx";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "qy";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ecadd";
    readonly outputs: readonly [{
        readonly name: "x3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y3";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "x1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "scalar";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ecmul";
    readonly outputs: readonly [{
        readonly name: "x2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "gx";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "gy";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "base";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "exponent";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "modulus";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "modExp";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "n";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "privKey";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "publicKey";
    readonly outputs: readonly [{
        readonly name: "qx";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "qy";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "compressed";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "recoverY";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}];
export declare const faucetAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_lmr";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_dailyMaxLmr";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_lmrPayout";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ethPayout";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_ipAddress";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "canClaimTokens";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "cooldownPeriod";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "cooldownStartingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentLMRTokenDistribution";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "emptyGeth";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "ethPayout";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lmrPayout";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lmrTokenDistributionMax";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "resetDistributedTodayLmr";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setTransferLumerin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_ethPayout";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setUpdateEthPayout";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_lmrPayout";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setUpdateLmrPayout";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_lmr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setUpdateLumerin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setUpdateOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_dailyMaxLmr";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setUpdatedailyMaxLmr";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_claiment";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_ipAddress";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "supervisedClaim";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
export declare const hashrateOracleAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_btcTokenOracleAddress";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_tokenDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StaleData";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ValueCannotBeZero";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newHashesForBTC";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "HashesForBTCUpdated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "btcPriceTTL";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getHashesForBTC";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct HashrateOracle.Feed";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "updatedAt";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "ttl";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getHashesforToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newHashesForBTC";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setHashesForBTC";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newBtcPriceTTL";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newHashesForBTCTTL";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setTTL";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
export declare const implementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_reason";
        readonly internalType: "enum Implementation.CloseReason";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "closedEarly";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_buyer";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "contractPurchased";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newValidatorURL";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }, {
        readonly name: "newDestURL";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "destinationUpdated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "fundsClaimed";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "purchaseInfoUpdated";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VALIDATOR_FEE_DECIMALS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "buyer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "claimFunds";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "claimFundsValidator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "cloneFactory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract CloneFactory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "reason";
        readonly internalType: "enum Implementation.CloseReason";
        readonly type: "uint8";
    }];
    readonly name: "closeEarly";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "contractState";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "enum Implementation.ContractState";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "encrDestURL";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "encrValidatorURL";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "feeToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "futureTerms";
    readonly outputs: readonly [{
        readonly name: "_price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_fee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_version";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "gap";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_offset";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_limit";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "getHistory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct Implementation.HistoryEntry[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "_purchaseTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_endTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_price";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_fee";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_speed";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_length";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_buyer";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_validator";
            readonly internalType: "address";
            readonly type: "address";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getPublicVariablesV2";
    readonly outputs: readonly [{
        readonly name: "_state";
        readonly internalType: "enum Implementation.ContractState";
        readonly type: "uint8";
    }, {
        readonly name: "_terms";
        readonly internalType: "struct Implementation.Terms";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "_price";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_fee";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_speed";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_length";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_version";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "_profitTarget";
            readonly internalType: "int8";
            readonly type: "int8";
        }];
    }, {
        readonly name: "_startingBlockTimestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_buyer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_seller";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_encryptedPoolData";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_isDeleted";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_hasFutureTerms";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getStats";
    readonly outputs: readonly [{
        readonly name: "_successCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_failCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "hashrateOracle";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract HashrateOracle";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "history";
    readonly outputs: readonly [{
        readonly name: "_purchaseTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_endTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_fee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_buyer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_validator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_cloneFactory";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_hashrateOracle";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_paymentToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_seller";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pubKey";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "isDeleted";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paymentToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "priceAndFee";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pubKey";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "seller";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_isDeleted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setContractDeleted";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_encrValidatorURL";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_encrDestURL";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setDestination";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_encrValidatorURL";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_encrDestURL";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_buyer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_validator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_validatorFeeRateScaled";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setPurchaseContract";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }];
    readonly name: "setUpdatePurchaseInformation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "startingBlockTimestamp";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "terms";
    readonly outputs: readonly [{
        readonly name: "_price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_fee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_speed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_version";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_profitTarget";
        readonly internalType: "int8";
        readonly type: "int8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "validator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "validatorFeeRateScaled";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const lumerinAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "Paused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "Unpaused";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "burnFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const lumerinTokenAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const multicall3Abi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "aggregate";
    readonly outputs: readonly [{
        readonly name: "blockNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "returnData";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call3[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "allowFailure";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "aggregate3";
    readonly outputs: readonly [{
        readonly name: "returnData";
        readonly internalType: "struct Multicall3.Result[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call3Value[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "allowFailure";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "aggregate3Value";
    readonly outputs: readonly [{
        readonly name: "returnData";
        readonly internalType: "struct Multicall3.Result[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "blockAndAggregate";
    readonly outputs: readonly [{
        readonly name: "blockNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "blockHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "returnData";
        readonly internalType: "struct Multicall3.Result[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getBasefee";
    readonly outputs: readonly [{
        readonly name: "basefee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "blockNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getBlockHash";
    readonly outputs: readonly [{
        readonly name: "blockHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getBlockNumber";
    readonly outputs: readonly [{
        readonly name: "blockNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getChainId";
    readonly outputs: readonly [{
        readonly name: "chainid";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentBlockCoinbase";
    readonly outputs: readonly [{
        readonly name: "coinbase";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentBlockDifficulty";
    readonly outputs: readonly [{
        readonly name: "difficulty";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentBlockGasLimit";
    readonly outputs: readonly [{
        readonly name: "gaslimit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentBlockTimestamp";
    readonly outputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getEthBalance";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getLastBlockHash";
    readonly outputs: readonly [{
        readonly name: "blockHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requireSuccess";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "tryAggregate";
    readonly outputs: readonly [{
        readonly name: "returnData";
        readonly internalType: "struct Multicall3.Result[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requireSuccess";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "calls";
        readonly internalType: "struct Multicall3.Call[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "callData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "tryBlockAndAggregate";
    readonly outputs: readonly [{
        readonly name: "blockNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "blockHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "returnData";
        readonly internalType: "struct Multicall3.Result[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly stateMutability: "payable";
}];
export declare const usdcMockAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const validatorRegistryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyComplained";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "HostTooLong";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InsufficientStake";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "Unauthorized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ValidatorNotFound";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "complainer";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "ValidatorComplain";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "ValidatorDeregistered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "ValidatorPunished";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "ValidatorRegisteredUpdated";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "activeValidatorsLength";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "forceUpdateActive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "offset";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "limit";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "getActiveValidators";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getValidator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct ValidatorRegistry.Validator";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addr";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pubKeyYparity";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "lastComplainer";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "complains";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "host";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "pubKeyX";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getValidatorV2";
    readonly outputs: readonly [{
        readonly name: "validator";
        readonly internalType: "struct ValidatorRegistry.Validator";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addr";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pubKeyYparity";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "lastComplainer";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "complains";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "host";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "pubKeyX";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "isRegistered";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "offset";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "limit";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "getValidators";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_stakeMinimun";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_stakeRegister";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_punishAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_punishThreshold";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "punishAmount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "punishThreshold";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "val";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setPunishAmount";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "val";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "setPunishThreshold";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "val";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setStakeMinimum";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "val";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setStakeRegister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "stakeMinimum";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "stakeRegister";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "token";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalStake";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "validatorComplain";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "validatorDeregister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pubKeyYparity";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "pubKeyX";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "host";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "validatorRegister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "validators";
    readonly outputs: readonly [{
        readonly name: "stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "addr";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pubKeyYparity";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "lastComplainer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "complains";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "host";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "pubKeyX";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "validatorsLength";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const versionableAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
