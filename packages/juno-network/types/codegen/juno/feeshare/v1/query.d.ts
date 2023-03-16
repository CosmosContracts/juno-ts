import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeShare, FeeShareSDKType } from "./feeshare";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponse {
    /** FeeShare is a slice of all stored Reveneue */
    feeshare: FeeShare[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponseSDKType {
    feeshare: FeeShareSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequest {
    /** contract_address of a registered contract in bech32 format */
    contractAddress: string;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestSDKType {
    contract_address: string;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
    /** FeeShare is a stored Reveneue for the queried contract */
    feeshare?: FeeShare;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseSDKType {
    feeshare?: FeeShareSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params is the returned FeeShare parameter */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequest {
    /** deployer_address in bech32 format */
    deployerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequestSDKType {
    deployer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponse {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * deployer
     */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequest {
    /** withdrawer_address in bech32 format */
    withdrawerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequestSDKType {
    withdrawer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponse {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * withdrawer
     */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryFeeSharesRequest: {
    encode(message: QueryFeeSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesRequest;
    fromPartial(object: DeepPartial<QueryFeeSharesRequest>): QueryFeeSharesRequest;
};
export declare const QueryFeeSharesResponse: {
    encode(message: QueryFeeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesResponse;
    fromPartial(object: DeepPartial<QueryFeeSharesResponse>): QueryFeeSharesResponse;
};
export declare const QueryFeeShareRequest: {
    encode(message: QueryFeeShareRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareRequest;
    fromPartial(object: DeepPartial<QueryFeeShareRequest>): QueryFeeShareRequest;
};
export declare const QueryFeeShareResponse: {
    encode(message: QueryFeeShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareResponse;
    fromPartial(object: DeepPartial<QueryFeeShareResponse>): QueryFeeShareResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDeployerFeeSharesRequest: {
    encode(message: QueryDeployerFeeSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesRequest;
    fromPartial(object: DeepPartial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest;
};
export declare const QueryDeployerFeeSharesResponse: {
    encode(message: QueryDeployerFeeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesResponse;
    fromPartial(object: DeepPartial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse;
};
export declare const QueryWithdrawerFeeSharesRequest: {
    encode(message: QueryWithdrawerFeeSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesRequest;
    fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest;
};
export declare const QueryWithdrawerFeeSharesResponse: {
    encode(message: QueryWithdrawerFeeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesResponse;
    fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse;
};
