import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeShare, FeeShareAmino, FeeShareSDKType } from "./feeshare";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryFeeSharesRequestProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryFeeSharesRequest";
  value: Uint8Array;
}
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFeeSharesRequestAminoMsg {
  type: "/juno.feeshare.v1.QueryFeeSharesRequest";
  value: QueryFeeSharesRequestAmino;
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
export interface QueryFeeSharesResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryFeeSharesResponse";
  value: Uint8Array;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponseAmino {
  /** FeeShare is a slice of all stored Reveneue */
  feeshare?: FeeShareAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFeeSharesResponseAminoMsg {
  type: "/juno.feeshare.v1.QueryFeeSharesResponse";
  value: QueryFeeSharesResponseAmino;
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
export interface QueryFeeShareRequestProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryFeeShareRequest";
  value: Uint8Array;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestAmino {
  /** contract_address of a registered contract in bech32 format */
  contract_address?: string;
}
export interface QueryFeeShareRequestAminoMsg {
  type: "/juno.feeshare.v1.QueryFeeShareRequest";
  value: QueryFeeShareRequestAmino;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestSDKType {
  contract_address: string;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare: FeeShare;
}
export interface QueryFeeShareResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryFeeShareResponse";
  value: Uint8Array;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseAmino {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShareAmino;
}
export interface QueryFeeShareResponseAminoMsg {
  type: "/juno.feeshare.v1.QueryFeeShareResponse";
  value: QueryFeeShareResponseAmino;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseSDKType {
  feeshare: FeeShareSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/juno.feeshare.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned FeeShare parameter */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params is the returned FeeShare parameter */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/juno.feeshare.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
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
export interface QueryDeployerFeeSharesRequestProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest";
  value: Uint8Array;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequestAmino {
  /** deployer_address in bech32 format */
  deployer_address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDeployerFeeSharesRequestAminoMsg {
  type: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest";
  value: QueryDeployerFeeSharesRequestAmino;
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
export interface QueryDeployerFeeSharesResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse";
  value: Uint8Array;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponseAmino {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * deployer
   */
  contract_addresses?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDeployerFeeSharesResponseAminoMsg {
  type: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse";
  value: QueryDeployerFeeSharesResponseAmino;
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
export interface QueryWithdrawerFeeSharesRequestProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest";
  value: Uint8Array;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequestAmino {
  /** withdrawer_address in bech32 format */
  withdrawer_address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryWithdrawerFeeSharesRequestAminoMsg {
  type: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest";
  value: QueryWithdrawerFeeSharesRequestAmino;
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
export interface QueryWithdrawerFeeSharesResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse";
  value: Uint8Array;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseAmino {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * withdrawer
   */
  contract_addresses?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryWithdrawerFeeSharesResponseAminoMsg {
  type: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse";
  value: QueryWithdrawerFeeSharesResponseAmino;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryFeeSharesRequest(): QueryFeeSharesRequest {
  return {
    pagination: undefined
  };
}
export const QueryFeeSharesRequest = {
  typeUrl: "/juno.feeshare.v1.QueryFeeSharesRequest",
  encode(message: QueryFeeSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryFeeSharesRequest>): QueryFeeSharesRequest {
    const message = createBaseQueryFeeSharesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeSharesRequestAmino): QueryFeeSharesRequest {
    const message = createBaseQueryFeeSharesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeeSharesRequest): QueryFeeSharesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeSharesRequestAminoMsg): QueryFeeSharesRequest {
    return QueryFeeSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeSharesRequestProtoMsg): QueryFeeSharesRequest {
    return QueryFeeSharesRequest.decode(message.value);
  },
  toProto(message: QueryFeeSharesRequest): Uint8Array {
    return QueryFeeSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeSharesRequest): QueryFeeSharesRequestProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryFeeSharesRequest",
      value: QueryFeeSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeSharesResponse(): QueryFeeSharesResponse {
  return {
    feeshare: [],
    pagination: undefined
  };
}
export const QueryFeeSharesResponse = {
  typeUrl: "/juno.feeshare.v1.QueryFeeSharesResponse",
  encode(message: QueryFeeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryFeeSharesResponse>): QueryFeeSharesResponse {
    const message = createBaseQueryFeeSharesResponse();
    message.feeshare = object.feeshare?.map(e => FeeShare.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeSharesResponseAmino): QueryFeeSharesResponse {
    const message = createBaseQueryFeeSharesResponse();
    message.feeshare = object.feeshare?.map(e => FeeShare.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeeSharesResponse): QueryFeeSharesResponseAmino {
    const obj: any = {};
    if (message.feeshare) {
      obj.feeshare = message.feeshare.map(e => e ? FeeShare.toAmino(e) : undefined);
    } else {
      obj.feeshare = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeSharesResponseAminoMsg): QueryFeeSharesResponse {
    return QueryFeeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeSharesResponseProtoMsg): QueryFeeSharesResponse {
    return QueryFeeSharesResponse.decode(message.value);
  },
  toProto(message: QueryFeeSharesResponse): Uint8Array {
    return QueryFeeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeSharesResponse): QueryFeeSharesResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryFeeSharesResponse",
      value: QueryFeeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeShareRequest(): QueryFeeShareRequest {
  return {
    contractAddress: ""
  };
}
export const QueryFeeShareRequest = {
  typeUrl: "/juno.feeshare.v1.QueryFeeShareRequest",
  encode(message: QueryFeeShareRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeShareRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryFeeShareRequest>): QueryFeeShareRequest {
    const message = createBaseQueryFeeShareRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFeeShareRequestAmino): QueryFeeShareRequest {
    const message = createBaseQueryFeeShareRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryFeeShareRequest): QueryFeeShareRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFeeShareRequestAminoMsg): QueryFeeShareRequest {
    return QueryFeeShareRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeShareRequestProtoMsg): QueryFeeShareRequest {
    return QueryFeeShareRequest.decode(message.value);
  },
  toProto(message: QueryFeeShareRequest): Uint8Array {
    return QueryFeeShareRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeShareRequest): QueryFeeShareRequestProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryFeeShareRequest",
      value: QueryFeeShareRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeShareResponse(): QueryFeeShareResponse {
  return {
    feeshare: FeeShare.fromPartial({})
  };
}
export const QueryFeeShareResponse = {
  typeUrl: "/juno.feeshare.v1.QueryFeeShareResponse",
  encode(message: QueryFeeShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeshare !== undefined) {
      FeeShare.encode(message.feeshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryFeeShareResponse>): QueryFeeShareResponse {
    const message = createBaseQueryFeeShareResponse();
    message.feeshare = object.feeshare !== undefined && object.feeshare !== null ? FeeShare.fromPartial(object.feeshare) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeShareResponseAmino): QueryFeeShareResponse {
    const message = createBaseQueryFeeShareResponse();
    if (object.feeshare !== undefined && object.feeshare !== null) {
      message.feeshare = FeeShare.fromAmino(object.feeshare);
    }
    return message;
  },
  toAmino(message: QueryFeeShareResponse): QueryFeeShareResponseAmino {
    const obj: any = {};
    obj.feeshare = message.feeshare ? FeeShare.toAmino(message.feeshare) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeShareResponseAminoMsg): QueryFeeShareResponse {
    return QueryFeeShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeShareResponseProtoMsg): QueryFeeShareResponse {
    return QueryFeeShareResponse.decode(message.value);
  },
  toProto(message: QueryFeeShareResponse): Uint8Array {
    return QueryFeeShareResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeShareResponse): QueryFeeShareResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryFeeShareResponse",
      value: QueryFeeShareResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/juno.feeshare.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/juno.feeshare.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeployerFeeSharesRequest(): QueryDeployerFeeSharesRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
export const QueryDeployerFeeSharesRequest = {
  typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest",
  encode(message: QueryDeployerFeeSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeployerFeeSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest {
    const message = createBaseQueryDeployerFeeSharesRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDeployerFeeSharesRequestAmino): QueryDeployerFeeSharesRequest {
    const message = createBaseQueryDeployerFeeSharesRequest();
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeployerFeeSharesRequest): QueryDeployerFeeSharesRequestAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployerFeeSharesRequestAminoMsg): QueryDeployerFeeSharesRequest {
    return QueryDeployerFeeSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployerFeeSharesRequestProtoMsg): QueryDeployerFeeSharesRequest {
    return QueryDeployerFeeSharesRequest.decode(message.value);
  },
  toProto(message: QueryDeployerFeeSharesRequest): Uint8Array {
    return QueryDeployerFeeSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployerFeeSharesRequest): QueryDeployerFeeSharesRequestProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest",
      value: QueryDeployerFeeSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeployerFeeSharesResponse(): QueryDeployerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryDeployerFeeSharesResponse = {
  typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse",
  encode(message: QueryDeployerFeeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeployerFeeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse {
    const message = createBaseQueryDeployerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDeployerFeeSharesResponseAmino): QueryDeployerFeeSharesResponse {
    const message = createBaseQueryDeployerFeeSharesResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeployerFeeSharesResponse): QueryDeployerFeeSharesResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployerFeeSharesResponseAminoMsg): QueryDeployerFeeSharesResponse {
    return QueryDeployerFeeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployerFeeSharesResponseProtoMsg): QueryDeployerFeeSharesResponse {
    return QueryDeployerFeeSharesResponse.decode(message.value);
  },
  toProto(message: QueryDeployerFeeSharesResponse): Uint8Array {
    return QueryDeployerFeeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployerFeeSharesResponse): QueryDeployerFeeSharesResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse",
      value: QueryDeployerFeeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawerFeeSharesRequest(): QueryWithdrawerFeeSharesRequest {
  return {
    withdrawerAddress: "",
    pagination: undefined
  };
}
export const QueryWithdrawerFeeSharesRequest = {
  typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest",
  encode(message: QueryWithdrawerFeeSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWithdrawerFeeSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest {
    const message = createBaseQueryWithdrawerFeeSharesRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawerFeeSharesRequestAmino): QueryWithdrawerFeeSharesRequest {
    const message = createBaseQueryWithdrawerFeeSharesRequest();
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawerAddress = object.withdrawer_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWithdrawerFeeSharesRequest): QueryWithdrawerFeeSharesRequestAmino {
    const obj: any = {};
    obj.withdrawer_address = message.withdrawerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawerFeeSharesRequestAminoMsg): QueryWithdrawerFeeSharesRequest {
    return QueryWithdrawerFeeSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawerFeeSharesRequestProtoMsg): QueryWithdrawerFeeSharesRequest {
    return QueryWithdrawerFeeSharesRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawerFeeSharesRequest): Uint8Array {
    return QueryWithdrawerFeeSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawerFeeSharesRequest): QueryWithdrawerFeeSharesRequestProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest",
      value: QueryWithdrawerFeeSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawerFeeSharesResponse(): QueryWithdrawerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryWithdrawerFeeSharesResponse = {
  typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse",
  encode(message: QueryWithdrawerFeeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWithdrawerFeeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse {
    const message = createBaseQueryWithdrawerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawerFeeSharesResponseAmino): QueryWithdrawerFeeSharesResponse {
    const message = createBaseQueryWithdrawerFeeSharesResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWithdrawerFeeSharesResponse): QueryWithdrawerFeeSharesResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawerFeeSharesResponseAminoMsg): QueryWithdrawerFeeSharesResponse {
    return QueryWithdrawerFeeSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawerFeeSharesResponseProtoMsg): QueryWithdrawerFeeSharesResponse {
    return QueryWithdrawerFeeSharesResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawerFeeSharesResponse): Uint8Array {
    return QueryWithdrawerFeeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawerFeeSharesResponse): QueryWithdrawerFeeSharesResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse",
      value: QueryWithdrawerFeeSharesResponse.encode(message).finish()
    };
  }
};