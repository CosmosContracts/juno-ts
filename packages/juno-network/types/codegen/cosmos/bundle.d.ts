import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/event";
import * as _4 from "./authz/v1beta1/genesis";
import * as _5 from "./authz/v1beta1/query";
import * as _6 from "./authz/v1beta1/tx";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/bank";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./base/abci/v1beta1/abci";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/hd/v1/hd";
import * as _18 from "./crypto/keyring/v1/record";
import * as _19 from "./crypto/multisig/keys";
import * as _20 from "./crypto/secp256k1/keys";
import * as _21 from "./crypto/secp256r1/keys";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1/genesis";
import * as _27 from "./gov/v1/gov";
import * as _28 from "./gov/v1/query";
import * as _29 from "./gov/v1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/upgrade";
import * as _117 from "./authz/v1beta1/query.lcd";
import * as _118 from "./bank/v1beta1/query.lcd";
import * as _119 from "./distribution/v1beta1/query.lcd";
import * as _120 from "./gov/v1/query.lcd";
import * as _121 from "./gov/v1beta1/query.lcd";
import * as _122 from "./staking/v1beta1/query.lcd";
import * as _123 from "./tx/v1beta1/service.lcd";
import * as _124 from "./upgrade/v1beta1/query.lcd";
import * as _125 from "./authz/v1beta1/query.rpc.Query";
import * as _126 from "./bank/v1beta1/query.rpc.Query";
import * as _127 from "./distribution/v1beta1/query.rpc.Query";
import * as _128 from "./gov/v1/query.rpc.Query";
import * as _129 from "./gov/v1beta1/query.rpc.Query";
import * as _130 from "./staking/v1beta1/query.rpc.Query";
import * as _131 from "./tx/v1beta1/service.rpc.Service";
import * as _132 from "./upgrade/v1beta1/query.rpc.Query";
import * as _133 from "./authz/v1beta1/tx.rpc.msg";
import * as _134 from "./bank/v1beta1/tx.rpc.msg";
import * as _135 from "./distribution/v1beta1/tx.rpc.msg";
import * as _136 from "./gov/v1/tx.rpc.msg";
import * as _137 from "./gov/v1beta1/tx.rpc.msg";
import * as _138 from "./staking/v1beta1/tx.rpc.msg";
import * as _139 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _133.MsgClientImpl;
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _117.LCDQueryClient;
            MsgGrant: {
                encode(message: _6.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrant;
                fromPartial(object: any): _6.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _6.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExecResponse;
                fromPartial(object: any): _6.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _6.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExec;
                fromPartial(object: any): _6.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _6.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrantResponse;
                fromPartial(_: any): _6.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _6.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevoke;
                fromPartial(object: any): _6.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _6.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevokeResponse;
                fromPartial(_: any): _6.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _5.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsRequest;
                fromPartial(object: any): _5.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _5.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsResponse;
                fromPartial(object: any): _5.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _5.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsRequest;
                fromPartial(object: any): _5.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _5.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsResponse;
                fromPartial(object: any): _5.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _5.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsRequest;
                fromPartial(object: any): _5.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _5.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsResponse;
                fromPartial(object: any): _5.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromPartial(object: any): _4.GenesisState;
            };
            EventGrant: {
                encode(message: _3.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventGrant;
                fromPartial(object: any): _3.EventGrant;
            };
            EventRevoke: {
                encode(message: _3.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventRevoke;
                fromPartial(object: any): _3.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _2.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenericAuthorization;
                fromPartial(object: any): _2.GenericAuthorization;
            };
            Grant: {
                encode(message: _2.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Grant;
                fromPartial(object: any): _2.Grant;
            };
            GrantAuthorization: {
                encode(message: _2.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantAuthorization;
                fromPartial(object: any): _2.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _2.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantQueueItem;
                fromPartial(object: any): _2.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _126.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _118.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _11.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _11.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _11.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _11.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _11.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSend;
                fromPartial(object: any): _11.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _11.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSendResponse;
                fromPartial(_: any): _11.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _11.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSend;
                fromPartial(object: any): _11.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _11.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSendResponse;
                fromPartial(_: any): _11.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _10.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceRequest;
                fromPartial(object: any): _10.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _10.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceResponse;
                fromPartial(object: any): _10.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _10.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesRequest;
                fromPartial(object: any): _10.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _10.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesResponse;
                fromPartial(object: any): _10.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _10.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesRequest;
                fromPartial(object: any): _10.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _10.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesResponse;
                fromPartial(object: any): _10.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _10.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyRequest;
                fromPartial(object: any): _10.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _10.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyResponse;
                fromPartial(object: any): _10.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _10.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfRequest;
                fromPartial(object: any): _10.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _10.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfResponse;
                fromPartial(object: any): _10.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsRequest;
                fromPartial(_: any): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsResponse;
                fromPartial(object: any): _10.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _10.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataRequest;
                fromPartial(object: any): _10.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _10.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataResponse;
                fromPartial(object: any): _10.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _10.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataRequest;
                fromPartial(object: any): _10.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _10.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataResponse;
                fromPartial(object: any): _10.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _10.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersRequest;
                fromPartial(object: any): _10.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _10.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomOwner;
                fromPartial(object: any): _10.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _10.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersResponse;
                fromPartial(object: any): _10.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromPartial(object: any): _9.GenesisState;
            };
            Balance: {
                encode(message: _9.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Balance;
                fromPartial(object: any): _9.Balance;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Params;
                fromPartial(object: any): _8.Params;
            };
            SendEnabled: {
                encode(message: _8.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendEnabled;
                fromPartial(object: any): _8.SendEnabled;
            };
            Input: {
                encode(message: _8.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Input;
                fromPartial(object: any): _8.Input;
            };
            Output: {
                encode(message: _8.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Output;
                fromPartial(object: any): _8.Output;
            };
            Supply: {
                encode(message: _8.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Supply;
                fromPartial(object: any): _8.Supply;
            };
            DenomUnit: {
                encode(message: _8.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.DenomUnit;
                fromPartial(object: any): _8.DenomUnit;
            };
            Metadata: {
                encode(message: _8.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Metadata;
                fromPartial(object: any): _8.Metadata;
            };
            SendAuthorization: {
                encode(message: _7.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.SendAuthorization;
                fromPartial(object: any): _7.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _12.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxResponse;
                    fromPartial(object: any): _12.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _12.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ABCIMessageLog;
                    fromPartial(object: any): _12.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _12.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.StringEvent;
                    fromPartial(object: any): _12.StringEvent;
                };
                Attribute: {
                    encode(message: _12.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Attribute;
                    fromPartial(object: any): _12.Attribute;
                };
                GasInfo: {
                    encode(message: _12.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GasInfo;
                    fromPartial(object: any): _12.GasInfo;
                };
                Result: {
                    encode(message: _12.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Result;
                    fromPartial(object: any): _12.Result;
                };
                SimulationResponse: {
                    encode(message: _12.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SimulationResponse;
                    fromPartial(object: any): _12.SimulationResponse;
                };
                MsgData: {
                    encode(message: _12.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgData;
                    fromPartial(object: any): _12.MsgData;
                };
                TxMsgData: {
                    encode(message: _12.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxMsgData;
                    fromPartial(object: any): _12.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _12.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SearchTxsResult;
                    fromPartial(object: any): _12.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _13.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageRequest;
                    fromPartial(object: any): _13.PageRequest;
                };
                PageResponse: {
                    encode(message: _13.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageResponse;
                    fromPartial(object: any): _13.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _14.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AppDescriptor;
                    fromPartial(object: any): _14.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _14.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDescriptor;
                    fromPartial(object: any): _14.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _14.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AuthnDescriptor;
                    fromPartial(object: any): _14.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _14.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SigningModeDescriptor;
                    fromPartial(object: any): _14.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _14.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ChainDescriptor;
                    fromPartial(object: any): _14.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _14.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.CodecDescriptor;
                    fromPartial(object: any): _14.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _14.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceDescriptor;
                    fromPartial(object: any): _14.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _14.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceImplementerDescriptor;
                    fromPartial(object: any): _14.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _14.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: any): _14.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _14.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ConfigurationDescriptor;
                    fromPartial(object: any): _14.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _14.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDescriptor;
                    fromPartial(object: any): _14.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _14.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorRequest;
                    fromPartial(_: any): _14.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _14.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorResponse;
                    fromPartial(object: any): _14.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _14.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorRequest;
                    fromPartial(_: any): _14.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _14.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorResponse;
                    fromPartial(object: any): _14.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _14.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorRequest;
                    fromPartial(_: any): _14.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _14.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorResponse;
                    fromPartial(object: any): _14.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _14.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorRequest;
                    fromPartial(_: any): _14.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _14.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorResponse;
                    fromPartial(object: any): _14.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _14.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorRequest;
                    fromPartial(_: any): _14.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _14.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorResponse;
                    fromPartial(object: any): _14.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _14.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorRequest;
                    fromPartial(_: any): _14.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _14.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorResponse;
                    fromPartial(object: any): _14.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _14.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServicesDescriptor;
                    fromPartial(object: any): _14.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _14.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServiceDescriptor;
                    fromPartial(object: any): _14.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _14.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryMethodDescriptor;
                    fromPartial(object: any): _14.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _15.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Coin;
                fromPartial(object: any): _15.Coin;
            };
            DecCoin: {
                encode(message: _15.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecCoin;
                fromPartial(object: any): _15.DecCoin;
            };
            IntProto: {
                encode(message: _15.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.IntProto;
                fromPartial(object: any): _15.IntProto;
            };
            DecProto: {
                encode(message: _15.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecProto;
                fromPartial(object: any): _15.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _16.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PubKey;
                fromPartial(object: any): _16.PubKey;
            };
            PrivKey: {
                encode(message: _16.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PrivKey;
                fromPartial(object: any): _16.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _17.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.BIP44Params;
                    fromPartial(object: any): _17.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _18.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record;
                    fromPartial(object: any): _18.Record;
                };
                Record_Local: {
                    encode(message: _18.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Local;
                    fromPartial(object: any): _18.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _18.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Ledger;
                    fromPartial(object: any): _18.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _18.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Multi;
                    fromPartial(_: any): _18.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _18.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Offline;
                    fromPartial(_: any): _18.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _19.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.LegacyAminoPubKey;
                fromPartial(object: any): _19.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _20.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PubKey;
                fromPartial(object: any): _20.PubKey;
            };
            PrivKey: {
                encode(message: _20.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PrivKey;
                fromPartial(object: any): _20.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
                fromPartial(object: any): _21.PubKey;
            };
            PrivKey: {
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
                fromPartial(object: any): _21.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _119.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _25.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _25.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _25.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _25.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _25.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _25.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _25.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _25.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _25.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddress;
                fromPartial(object: any): _25.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _25.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddressResponse;
                fromPartial(_: any): _25.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _25.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorReward;
                fromPartial(object: any): _25.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _25.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: any): _25.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _25.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommission;
                fromPartial(object: any): _25.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _25.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: any): _25.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _25.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPool;
                fromPartial(object: any): _25.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _25.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPoolResponse;
                fromPartial(_: any): _25.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromPartial(_: any): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromPartial(object: any): _24.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _24.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: any): _24.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _24.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: any): _24.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _24.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionRequest;
                fromPartial(object: any): _24.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _24.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionResponse;
                fromPartial(object: any): _24.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _24.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesRequest;
                fromPartial(object: any): _24.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _24.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesResponse;
                fromPartial(object: any): _24.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _24.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsRequest;
                fromPartial(object: any): _24.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _24.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsResponse;
                fromPartial(object: any): _24.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _24.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsRequest;
                fromPartial(object: any): _24.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _24.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsResponse;
                fromPartial(object: any): _24.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _24.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _24.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _24.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _24.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _24.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: any): _24.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _24.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: any): _24.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _24.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolRequest;
                fromPartial(_: any): _24.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _24.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolResponse;
                fromPartial(object: any): _24.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _23.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorWithdrawInfo;
                fromPartial(object: any): _23.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _23.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewardsRecord;
                fromPartial(object: any): _23.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _23.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: any): _23.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _23.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewardsRecord;
                fromPartial(object: any): _23.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _23.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewardsRecord;
                fromPartial(object: any): _23.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _23.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfoRecord;
                fromPartial(object: any): _23.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _23.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEventRecord;
                fromPartial(object: any): _23.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromPartial(object: any): _23.GenesisState;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromPartial(object: any): _22.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _22.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorHistoricalRewards;
                fromPartial(object: any): _22.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _22.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorCurrentRewards;
                fromPartial(object: any): _22.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _22.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorAccumulatedCommission;
                fromPartial(object: any): _22.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _22.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorOutstandingRewards;
                fromPartial(object: any): _22.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _22.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvent;
                fromPartial(object: any): _22.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _22.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvents;
                fromPartial(object: any): _22.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _22.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.FeePool;
                fromPartial(object: any): _22.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _22.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposal;
                fromPartial(object: any): _22.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _22.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegatorStartingInfo;
                fromPartial(object: any): _22.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _22.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegationDelegatorReward;
                fromPartial(object: any): _22.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _22.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: any): _22.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _136.MsgClientImpl;
            QueryClientImpl: typeof _128.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _120.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _29.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _29.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _29.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _29.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _29.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _29.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _29.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _29.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _29.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _29.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _29.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposal;
                fromPartial(object: any): _29.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _29.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposalResponse;
                fromPartial(object: any): _29.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _29.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContent;
                fromPartial(object: any): _29.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _29.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContentResponse;
                fromPartial(_: any): _29.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _29.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVote;
                fromPartial(object: any): _29.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _29.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteResponse;
                fromPartial(_: any): _29.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _29.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeighted;
                fromPartial(object: any): _29.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _29.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeightedResponse;
                fromPartial(_: any): _29.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _29.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDeposit;
                fromPartial(object: any): _29.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _29.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDepositResponse;
                fromPartial(_: any): _29.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _28.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalRequest;
                fromPartial(object: any): _28.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _28.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalResponse;
                fromPartial(object: any): _28.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _28.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsRequest;
                fromPartial(object: any): _28.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _28.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsResponse;
                fromPartial(object: any): _28.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _28.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteRequest;
                fromPartial(object: any): _28.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _28.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteResponse;
                fromPartial(object: any): _28.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _28.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesRequest;
                fromPartial(object: any): _28.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _28.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesResponse;
                fromPartial(object: any): _28.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromPartial(object: any): _28.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromPartial(object: any): _28.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _28.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositRequest;
                fromPartial(object: any): _28.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _28.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositResponse;
                fromPartial(object: any): _28.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _28.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsRequest;
                fromPartial(object: any): _28.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _28.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsResponse;
                fromPartial(object: any): _28.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _28.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultRequest;
                fromPartial(object: any): _28.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _28.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultResponse;
                fromPartial(object: any): _28.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _27.VoteOption;
            voteOptionToJSON(object: _27.VoteOption): string;
            proposalStatusFromJSON(object: any): _27.ProposalStatus;
            proposalStatusToJSON(object: _27.ProposalStatus): string;
            VoteOption: typeof _27.VoteOption;
            VoteOptionSDKType: typeof _27.VoteOption;
            ProposalStatus: typeof _27.ProposalStatus;
            ProposalStatusSDKType: typeof _27.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _27.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.WeightedVoteOption;
                fromPartial(object: any): _27.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _27.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Deposit;
                fromPartial(object: any): _27.Deposit;
            };
            Proposal: {
                encode(message: _27.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Proposal;
                fromPartial(object: any): _27.Proposal;
            };
            TallyResult: {
                encode(message: _27.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyResult;
                fromPartial(object: any): _27.TallyResult;
            };
            Vote: {
                encode(message: _27.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Vote;
                fromPartial(object: any): _27.Vote;
            };
            DepositParams: {
                encode(message: _27.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DepositParams;
                fromPartial(object: any): _27.DepositParams;
            };
            VotingParams: {
                encode(message: _27.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VotingParams;
                fromPartial(object: any): _27.VotingParams;
            };
            TallyParams: {
                encode(message: _27.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyParams;
                fromPartial(object: any): _27.TallyParams;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: any): _26.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _129.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _121.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _33.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _33.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _33.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _33.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _33.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _33.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposal;
                fromPartial(object: any): _33.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposalResponse;
                fromPartial(object: any): _33.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _33.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVote;
                fromPartial(object: any): _33.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _33.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteResponse;
                fromPartial(_: any): _33.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _33.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeighted;
                fromPartial(object: any): _33.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeightedResponse;
                fromPartial(_: any): _33.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _33.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDeposit;
                fromPartial(object: any): _33.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _33.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDepositResponse;
                fromPartial(_: any): _33.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _32.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalRequest;
                fromPartial(object: any): _32.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _32.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalResponse;
                fromPartial(object: any): _32.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _32.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsRequest;
                fromPartial(object: any): _32.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _32.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsResponse;
                fromPartial(object: any): _32.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _32.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteRequest;
                fromPartial(object: any): _32.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _32.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteResponse;
                fromPartial(object: any): _32.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _32.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesRequest;
                fromPartial(object: any): _32.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _32.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesResponse;
                fromPartial(object: any): _32.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromPartial(object: any): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromPartial(object: any): _32.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _32.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositRequest;
                fromPartial(object: any): _32.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _32.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositResponse;
                fromPartial(object: any): _32.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _32.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsRequest;
                fromPartial(object: any): _32.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _32.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsResponse;
                fromPartial(object: any): _32.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _32.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultRequest;
                fromPartial(object: any): _32.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _32.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultResponse;
                fromPartial(object: any): _32.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOption;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _31.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.WeightedVoteOption;
                fromPartial(object: any): _31.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _31.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TextProposal;
                fromPartial(object: any): _31.TextProposal;
            };
            Deposit: {
                encode(message: _31.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Deposit;
                fromPartial(object: any): _31.Deposit;
            };
            Proposal: {
                encode(message: _31.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Proposal;
                fromPartial(object: any): _31.Proposal;
            };
            TallyResult: {
                encode(message: _31.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyResult;
                fromPartial(object: any): _31.TallyResult;
            };
            Vote: {
                encode(message: _31.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Vote;
                fromPartial(object: any): _31.Vote;
            };
            DepositParams: {
                encode(message: _31.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DepositParams;
                fromPartial(object: any): _31.DepositParams;
            };
            VotingParams: {
                encode(message: _31.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VotingParams;
                fromPartial(object: any): _31.VotingParams;
            };
            TallyParams: {
                encode(message: _31.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyParams;
                fromPartial(object: any): _31.TallyParams;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: any): _30.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _130.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _122.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _38.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _38.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _38.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _38.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _38.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _38.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _38.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _38.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _38.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _38.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _38.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidator;
                fromPartial(object: any): _38.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _38.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidatorResponse;
                fromPartial(_: any): _38.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _38.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidator;
                fromPartial(object: any): _38.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _38.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidatorResponse;
                fromPartial(_: any): _38.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _38.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegate;
                fromPartial(object: any): _38.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _38.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegateResponse;
                fromPartial(_: any): _38.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _38.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegate;
                fromPartial(object: any): _38.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _38.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegateResponse;
                fromPartial(object: any): _38.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _38.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegate;
                fromPartial(object: any): _38.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _38.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegateResponse;
                fromPartial(object: any): _38.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _37.BondStatus;
            bondStatusToJSON(object: _37.BondStatus): string;
            BondStatus: typeof _37.BondStatus;
            BondStatusSDKType: typeof _37.BondStatus;
            HistoricalInfo: {
                encode(message: _37.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.HistoricalInfo;
                fromPartial(object: any): _37.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _37.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommissionRates;
                fromPartial(object: any): _37.CommissionRates;
            };
            Commission: {
                encode(message: _37.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Commission;
                fromPartial(object: any): _37.Commission;
            };
            Description: {
                encode(message: _37.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Description;
                fromPartial(object: any): _37.Description;
            };
            Validator: {
                encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Validator;
                fromPartial(object: any): _37.Validator;
            };
            ValAddresses: {
                encode(message: _37.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValAddresses;
                fromPartial(object: any): _37.ValAddresses;
            };
            DVPair: {
                encode(message: _37.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPair;
                fromPartial(object: any): _37.DVPair;
            };
            DVPairs: {
                encode(message: _37.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPairs;
                fromPartial(object: any): _37.DVPairs;
            };
            DVVTriplet: {
                encode(message: _37.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplet;
                fromPartial(object: any): _37.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _37.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplets;
                fromPartial(object: any): _37.DVVTriplets;
            };
            Delegation: {
                encode(message: _37.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Delegation;
                fromPartial(object: any): _37.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _37.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegation;
                fromPartial(object: any): _37.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _37.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegationEntry;
                fromPartial(object: any): _37.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _37.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntry;
                fromPartial(object: any): _37.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _37.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Redelegation;
                fromPartial(object: any): _37.Redelegation;
            };
            Params: {
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromPartial(object: any): _37.Params;
            };
            DelegationResponse: {
                encode(message: _37.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationResponse;
                fromPartial(object: any): _37.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _37.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntryResponse;
                fromPartial(object: any): _37.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _37.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationResponse;
                fromPartial(object: any): _37.RedelegationResponse;
            };
            Pool: {
                encode(message: _37.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Pool;
                fromPartial(object: any): _37.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _36.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsRequest;
                fromPartial(object: any): _36.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _36.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsResponse;
                fromPartial(object: any): _36.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _36.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorRequest;
                fromPartial(object: any): _36.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _36.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorResponse;
                fromPartial(object: any): _36.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _36.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsRequest;
                fromPartial(object: any): _36.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _36.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsResponse;
                fromPartial(object: any): _36.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _36.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: any): _36.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _36.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: any): _36.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _36.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRequest;
                fromPartial(object: any): _36.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _36.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationResponse;
                fromPartial(object: any): _36.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _36.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationRequest;
                fromPartial(object: any): _36.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _36.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationResponse;
                fromPartial(object: any): _36.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _36.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsRequest;
                fromPartial(object: any): _36.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _36.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsResponse;
                fromPartial(object: any): _36.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _36.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: any): _36.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _36.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: any): _36.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _36.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsRequest;
                fromPartial(object: any): _36.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _36.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsResponse;
                fromPartial(object: any): _36.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _36.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _36.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _36.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorRequest;
                fromPartial(object: any): _36.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _36.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorResponse;
                fromPartial(object: any): _36.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _36.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoRequest;
                fromPartial(object: any): _36.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _36.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoResponse;
                fromPartial(object: any): _36.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _36.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolRequest;
                fromPartial(_: any): _36.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _36.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolResponse;
                fromPartial(object: any): _36.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromPartial(_: any): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromPartial(object: any): _36.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromPartial(object: any): _35.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _35.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LastValidatorPower;
                fromPartial(object: any): _35.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _34.AuthorizationType;
            authorizationTypeToJSON(object: _34.AuthorizationType): string;
            AuthorizationType: typeof _34.AuthorizationType;
            AuthorizationTypeSDKType: typeof _34.AuthorizationType;
            StakeAuthorization: {
                encode(message: _34.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization;
                fromPartial(object: any): _34.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _34.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization_Validators;
                fromPartial(object: any): _34.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _39.SignMode;
                signModeToJSON(object: _39.SignMode): string;
                SignMode: typeof _39.SignMode;
                SignModeSDKType: typeof _39.SignMode;
                SignatureDescriptors: {
                    encode(message: _39.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptors;
                    fromPartial(object: any): _39.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _39.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor;
                    fromPartial(object: any): _39.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _39.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data;
                    fromPartial(object: any): _39.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _39.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Single;
                    fromPartial(object: any): _39.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _39.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Multi;
                    fromPartial(object: any): _39.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _131.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _123.LCDQueryClient;
            Tx: {
                encode(message: _41.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Tx;
                fromPartial(object: any): _41.Tx;
            };
            TxRaw: {
                encode(message: _41.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxRaw;
                fromPartial(object: any): _41.TxRaw;
            };
            SignDoc: {
                encode(message: _41.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignDoc;
                fromPartial(object: any): _41.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _41.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignDocDirectAux;
                fromPartial(object: any): _41.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _41.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxBody;
                fromPartial(object: any): _41.TxBody;
            };
            AuthInfo: {
                encode(message: _41.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuthInfo;
                fromPartial(object: any): _41.AuthInfo;
            };
            SignerInfo: {
                encode(message: _41.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignerInfo;
                fromPartial(object: any): _41.SignerInfo;
            };
            ModeInfo: {
                encode(message: _41.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo;
                fromPartial(object: any): _41.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _41.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Single;
                fromPartial(object: any): _41.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _41.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Multi;
                fromPartial(object: any): _41.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _41.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Fee;
                fromPartial(object: any): _41.Fee;
            };
            Tip: {
                encode(message: _41.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Tip;
                fromPartial(object: any): _41.Tip;
            };
            AuxSignerData: {
                encode(message: _41.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuxSignerData;
                fromPartial(object: any): _41.AuxSignerData;
            };
            orderByFromJSON(object: any): _40.OrderBy;
            orderByToJSON(object: _40.OrderBy): string;
            broadcastModeFromJSON(object: any): _40.BroadcastMode;
            broadcastModeToJSON(object: _40.BroadcastMode): string;
            OrderBy: typeof _40.OrderBy;
            OrderBySDKType: typeof _40.OrderBy;
            BroadcastMode: typeof _40.BroadcastMode;
            BroadcastModeSDKType: typeof _40.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _40.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventRequest;
                fromPartial(object: any): _40.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _40.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventResponse;
                fromPartial(object: any): _40.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _40.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxRequest;
                fromPartial(object: any): _40.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _40.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxResponse;
                fromPartial(object: any): _40.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _40.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateRequest;
                fromPartial(object: any): _40.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _40.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateResponse;
                fromPartial(object: any): _40.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _40.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxRequest;
                fromPartial(object: any): _40.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _40.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxResponse;
                fromPartial(object: any): _40.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _40.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetBlockWithTxsRequest;
                fromPartial(object: any): _40.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _40.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetBlockWithTxsResponse;
                fromPartial(object: any): _40.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _124.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _43.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _43.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _43.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _43.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _44.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Plan;
                fromPartial(object: any): _44.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _44.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SoftwareUpgradeProposal;
                fromPartial(object: any): _44.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _44.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CancelSoftwareUpgradeProposal;
                fromPartial(object: any): _44.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _44.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ModuleVersion;
                fromPartial(object: any): _44.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _43.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSoftwareUpgrade;
                fromPartial(object: any): _43.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _43.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSoftwareUpgradeResponse;
                fromPartial(_: any): _43.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _43.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCancelUpgrade;
                fromPartial(object: any): _43.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _43.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCancelUpgradeResponse;
                fromPartial(_: any): _43.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _42.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanRequest;
                fromPartial(_: any): _42.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _42.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanResponse;
                fromPartial(object: any): _42.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _42.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanRequest;
                fromPartial(object: any): _42.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _42.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanResponse;
                fromPartial(object: any): _42.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _42.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateRequest;
                fromPartial(object: any): _42.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _42.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateResponse;
                fromPartial(object: any): _42.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _42.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsRequest;
                fromPartial(object: any): _42.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _42.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsResponse;
                fromPartial(object: any): _42.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _42.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAuthorityRequest;
                fromPartial(_: any): _42.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _42.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAuthorityResponse;
                fromPartial(object: any): _42.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _133.MsgClientImpl;
                };
                bank: {
                    v1beta1: _134.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _135.MsgClientImpl;
                };
                gov: {
                    v1: _136.MsgClientImpl;
                    v1beta1: _137.MsgClientImpl;
                };
                staking: {
                    v1beta1: _138.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _139.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                        granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                        granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                        allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                        spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                        supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                        denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                        vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                        votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                        params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                        deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                        tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                        proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                        vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                        votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                        params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                        deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                        tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                        validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                        validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                        unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                        pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                        getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                        broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                        getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                        getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                        appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                        authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _117.LCDQueryClient;
                };
                bank: {
                    v1beta1: _118.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _119.LCDQueryClient;
                };
                gov: {
                    v1: _120.LCDQueryClient;
                    v1beta1: _121.LCDQueryClient;
                };
                staking: {
                    v1beta1: _122.LCDQueryClient;
                };
                tx: {
                    v1beta1: _123.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _124.LCDQueryClient;
                };
            };
        }>;
    };
}
