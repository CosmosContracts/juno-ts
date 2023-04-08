import * as _50 from "./wasm/v1/authz";
import * as _51 from "./wasm/v1/genesis";
import * as _52 from "./wasm/v1/ibc";
import * as _53 from "./wasm/v1/proposal";
import * as _54 from "./wasm/v1/query";
import * as _55 from "./wasm/v1/tx";
import * as _56 from "./wasm/v1/types";
import * as _147 from "./wasm/v1/query.lcd";
import * as _148 from "./wasm/v1/query.rpc.Query";
import * as _149 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _149.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _54.QueryContractInfoRequest): Promise<_54.QueryContractInfoResponse>;
                contractHistory(request: _54.QueryContractHistoryRequest): Promise<_54.QueryContractHistoryResponse>;
                contractsByCode(request: _54.QueryContractsByCodeRequest): Promise<_54.QueryContractsByCodeResponse>;
                allContractState(request: _54.QueryAllContractStateRequest): Promise<_54.QueryAllContractStateResponse>;
                rawContractState(request: _54.QueryRawContractStateRequest): Promise<_54.QueryRawContractStateResponse>;
                smartContractState(request: _54.QuerySmartContractStateRequest): Promise<_54.QuerySmartContractStateResponse>;
                code(request: _54.QueryCodeRequest): Promise<_54.QueryCodeResponse>;
                codes(request?: _54.QueryCodesRequest): Promise<_54.QueryCodesResponse>;
                pinnedCodes(request?: _54.QueryPinnedCodesRequest): Promise<_54.QueryPinnedCodesResponse>;
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                contractsByCreator(request: _54.QueryContractsByCreatorRequest): Promise<_54.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _55.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _55.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _55.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _55.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _55.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _55.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _55.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _55.MsgStoreCode): {
                        typeUrl: string;
                        value: _55.MsgStoreCode;
                    };
                    instantiateContract(value: _55.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _55.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _55.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _55.MsgInstantiateContract2;
                    };
                    executeContract(value: _55.MsgExecuteContract): {
                        typeUrl: string;
                        value: _55.MsgExecuteContract;
                    };
                    migrateContract(value: _55.MsgMigrateContract): {
                        typeUrl: string;
                        value: _55.MsgMigrateContract;
                    };
                    updateAdmin(value: _55.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _55.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _55.MsgClearAdmin): {
                        typeUrl: string;
                        value: _55.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _55.MsgStoreCode): {
                        typeUrl: string;
                        value: _55.MsgStoreCode;
                    };
                    instantiateContract(value: _55.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _55.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _55.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _55.MsgInstantiateContract2;
                    };
                    executeContract(value: _55.MsgExecuteContract): {
                        typeUrl: string;
                        value: _55.MsgExecuteContract;
                    };
                    migrateContract(value: _55.MsgMigrateContract): {
                        typeUrl: string;
                        value: _55.MsgMigrateContract;
                    };
                    updateAdmin(value: _55.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _55.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _55.MsgClearAdmin): {
                        typeUrl: string;
                        value: _55.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _55.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _55.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _55.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _55.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _55.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _55.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _55.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _55.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _55.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _55.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _55.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _55.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _56.AccessType;
            accessTypeToJSON(object: _56.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _56.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _56.ContractCodeHistoryOperationType): string;
            AccessType: typeof _56.AccessType;
            AccessTypeSDKType: typeof _56.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _56.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _56.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _56.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AccessTypeParam;
                fromPartial(object: any): _56.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _56.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AccessConfig;
                fromPartial(object: any): _56.AccessConfig;
            };
            Params: {
                encode(message: _56.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Params;
                fromPartial(object: any): _56.Params;
            };
            CodeInfo: {
                encode(message: _56.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.CodeInfo;
                fromPartial(object: any): _56.CodeInfo;
            };
            ContractInfo: {
                encode(message: _56.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ContractInfo;
                fromPartial(object: any): _56.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _56.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ContractCodeHistoryEntry;
                fromPartial(object: any): _56.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _56.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AbsoluteTxPosition;
                fromPartial(object: any): _56.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _56.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Model;
                fromPartial(object: any): _56.Model;
            };
            MsgStoreCode: {
                encode(message: _55.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgStoreCode;
                fromPartial(object: any): _55.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _55.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgStoreCodeResponse;
                fromPartial(object: any): _55.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _55.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgInstantiateContract;
                fromPartial(object: any): _55.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _55.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgInstantiateContract2;
                fromPartial(object: any): _55.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _55.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgInstantiateContractResponse;
                fromPartial(object: any): _55.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _55.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgInstantiateContract2Response;
                fromPartial(object: any): _55.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _55.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecuteContract;
                fromPartial(object: any): _55.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _55.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecuteContractResponse;
                fromPartial(object: any): _55.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _55.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgMigrateContract;
                fromPartial(object: any): _55.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _55.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgMigrateContractResponse;
                fromPartial(object: any): _55.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _55.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgUpdateAdmin;
                fromPartial(object: any): _55.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _55.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgUpdateAdminResponse;
                fromPartial(_: any): _55.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _55.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgClearAdmin;
                fromPartial(object: any): _55.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _55.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgClearAdminResponse;
                fromPartial(_: any): _55.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _54.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractInfoRequest;
                fromPartial(object: any): _54.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _54.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractInfoResponse;
                fromPartial(object: any): _54.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _54.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractHistoryRequest;
                fromPartial(object: any): _54.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _54.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractHistoryResponse;
                fromPartial(object: any): _54.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _54.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractsByCodeRequest;
                fromPartial(object: any): _54.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _54.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractsByCodeResponse;
                fromPartial(object: any): _54.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _54.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllContractStateRequest;
                fromPartial(object: any): _54.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _54.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllContractStateResponse;
                fromPartial(object: any): _54.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _54.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryRawContractStateRequest;
                fromPartial(object: any): _54.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _54.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryRawContractStateResponse;
                fromPartial(object: any): _54.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _54.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySmartContractStateRequest;
                fromPartial(object: any): _54.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _54.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySmartContractStateResponse;
                fromPartial(object: any): _54.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _54.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryCodeRequest;
                fromPartial(object: any): _54.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _54.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.CodeInfoResponse;
                fromPartial(object: any): _54.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _54.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryCodeResponse;
                fromPartial(object: any): _54.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _54.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryCodesRequest;
                fromPartial(object: any): _54.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _54.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryCodesResponse;
                fromPartial(object: any): _54.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _54.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryPinnedCodesRequest;
                fromPartial(object: any): _54.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _54.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryPinnedCodesResponse;
                fromPartial(object: any): _54.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromPartial(_: any): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: any): _54.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _54.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractsByCreatorRequest;
                fromPartial(object: any): _54.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _54.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryContractsByCreatorResponse;
                fromPartial(object: any): _54.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _53.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.StoreCodeProposal;
                fromPartial(object: any): _53.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _53.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.InstantiateContractProposal;
                fromPartial(object: any): _53.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _53.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MigrateContractProposal;
                fromPartial(object: any): _53.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _53.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SudoContractProposal;
                fromPartial(object: any): _53.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _53.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ExecuteContractProposal;
                fromPartial(object: any): _53.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _53.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UpdateAdminProposal;
                fromPartial(object: any): _53.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _53.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ClearAdminProposal;
                fromPartial(object: any): _53.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _53.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.PinCodesProposal;
                fromPartial(object: any): _53.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _53.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UnpinCodesProposal;
                fromPartial(object: any): _53.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _53.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AccessConfigUpdate;
                fromPartial(object: any): _53.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _53.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UpdateInstantiateConfigProposal;
                fromPartial(object: any): _53.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _53.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.StoreAndInstantiateContractProposal;
                fromPartial(object: any): _53.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _52.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgIBCSend;
                fromPartial(object: any): _52.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _52.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgIBCCloseChannel;
                fromPartial(object: any): _52.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: any): _51.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _51.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState_GenMsgs;
                fromPartial(object: any): _51.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _51.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Code;
                fromPartial(object: any): _51.Code;
            };
            Contract: {
                encode(message: _51.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Contract;
                fromPartial(object: any): _51.Contract;
            };
            Sequence: {
                encode(message: _51.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Sequence;
                fromPartial(object: any): _51.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _50.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ContractExecutionAuthorization;
                fromPartial(object: any): _50.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _50.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ContractMigrationAuthorization;
                fromPartial(object: any): _50.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _50.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ContractGrant;
                fromPartial(object: any): _50.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _50.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MaxCallsLimit;
                fromPartial(object: any): _50.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _50.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MaxFundsLimit;
                fromPartial(object: any): _50.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _50.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CombinedLimit;
                fromPartial(object: any): _50.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _50.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AllowAllMessagesFilter;
                fromPartial(_: any): _50.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _50.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AcceptedMessageKeysFilter;
                fromPartial(object: any): _50.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _50.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AcceptedMessagesFilter;
                fromPartial(object: any): _50.AcceptedMessagesFilter;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: import("../cosmos/tokenfactory/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _149.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: import("../cosmos/tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryParamsResponse>;
                        denomAuthorityMetadata(request: import("../cosmos/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: import("../cosmos/tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _54.QueryContractInfoRequest): Promise<_54.QueryContractInfoResponse>;
                        contractHistory(request: _54.QueryContractHistoryRequest): Promise<_54.QueryContractHistoryResponse>;
                        contractsByCode(request: _54.QueryContractsByCodeRequest): Promise<_54.QueryContractsByCodeResponse>;
                        allContractState(request: _54.QueryAllContractStateRequest): Promise<_54.QueryAllContractStateResponse>;
                        rawContractState(request: _54.QueryRawContractStateRequest): Promise<_54.QueryRawContractStateResponse>;
                        smartContractState(request: _54.QuerySmartContractStateRequest): Promise<_54.QuerySmartContractStateResponse>;
                        code(request: _54.QueryCodeRequest): Promise<_54.QueryCodeResponse>;
                        codes(request?: _54.QueryCodesRequest): Promise<_54.QueryCodesResponse>;
                        pinnedCodes(request?: _54.QueryPinnedCodesRequest): Promise<_54.QueryPinnedCodesResponse>;
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        contractsByCreator(request: _54.QueryContractsByCreatorRequest): Promise<_54.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: import("../cosmos/tokenfactory/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _147.LCDQueryClient;
                };
            };
        }>;
    };
}
