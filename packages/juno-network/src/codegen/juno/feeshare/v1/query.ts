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
  /** pagination defines an optional pagination for the request. */
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
  /** FeeShare is a slice of all stored Reveneue */
  feeshare: FeeShareSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */

export interface QueryFeeShareRequest {
  /** contract_address of a registered contract in bech32 format */
  contractAddress: string;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */

export interface QueryFeeShareRequestSDKType {
  /** contract_address of a registered contract in bech32 format */
  contract_address: string;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */

export interface QueryFeeShareResponse {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShare;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */

export interface QueryFeeShareResponseSDKType {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShareSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params is the returned FeeShare parameter */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params is the returned FeeShare parameter */
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
  /** deployer_address in bech32 format */
  deployer_address: string;
  /** pagination defines an optional pagination for the request. */

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
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * deployer
   */
  contract_addresses: string[];
  /** pagination defines the pagination in the response. */

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
  /** withdrawer_address in bech32 format */
  withdrawer_address: string;
  /** pagination defines an optional pagination for the request. */

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
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * withdrawer
   */
  contract_addresses: string[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}

function createBaseQueryFeeSharesRequest(): QueryFeeSharesRequest {
  return {
    pagination: undefined
  };
}

export const QueryFeeSharesRequest = {
  encode(message: QueryFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeSharesRequest>): QueryFeeSharesRequest {
    const message = createBaseQueryFeeSharesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryFeeSharesResponse(): QueryFeeSharesResponse {
  return {
    feeshare: [],
    pagination: undefined
  };
}

export const QueryFeeSharesResponse = {
  encode(message: QueryFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeshare.push(FeeShare.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeSharesResponse>): QueryFeeSharesResponse {
    const message = createBaseQueryFeeSharesResponse();
    message.feeshare = object.feeshare?.map(e => FeeShare.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryFeeShareRequest(): QueryFeeShareRequest {
  return {
    contractAddress: ""
  };
}

export const QueryFeeShareRequest = {
  encode(message: QueryFeeShareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeShareRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeShareRequest>): QueryFeeShareRequest {
    const message = createBaseQueryFeeShareRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryFeeShareResponse(): QueryFeeShareResponse {
  return {
    feeshare: undefined
  };
}

export const QueryFeeShareResponse = {
  encode(message: QueryFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeshare !== undefined) {
      FeeShare.encode(message.feeshare, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeShareResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeshare = FeeShare.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeShareResponse>): QueryFeeShareResponse {
    const message = createBaseQueryFeeShareResponse();
    message.feeshare = object.feeshare !== undefined && object.feeshare !== null ? FeeShare.fromPartial(object.feeshare) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryDeployerFeeSharesRequest(): QueryDeployerFeeSharesRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}

export const QueryDeployerFeeSharesRequest = {
  encode(message: QueryDeployerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployerFeeSharesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest {
    const message = createBaseQueryDeployerFeeSharesRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDeployerFeeSharesResponse(): QueryDeployerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}

export const QueryDeployerFeeSharesResponse = {
  encode(message: QueryDeployerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployerFeeSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse {
    const message = createBaseQueryDeployerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawerFeeSharesRequest(): QueryWithdrawerFeeSharesRequest {
  return {
    withdrawerAddress: "",
    pagination: undefined
  };
}

export const QueryWithdrawerFeeSharesRequest = {
  encode(message: QueryWithdrawerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawerFeeSharesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawerAddress = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest {
    const message = createBaseQueryWithdrawerFeeSharesRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawerFeeSharesResponse(): QueryWithdrawerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}

export const QueryWithdrawerFeeSharesResponse = {
  encode(message: QueryWithdrawerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawerFeeSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse {
    const message = createBaseQueryWithdrawerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};