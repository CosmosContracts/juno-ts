import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/juno.cwhooks.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/juno.cwhooks.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequest {}
export interface QueryStakingContractsRequestProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryStakingContractsRequest";
  value: Uint8Array;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequestAmino {}
export interface QueryStakingContractsRequestAminoMsg {
  type: "/juno.cwhooks.v1.QueryStakingContractsRequest";
  value: QueryStakingContractsRequestAmino;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequestSDKType {}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponse {
  contracts: string[];
}
export interface QueryStakingContractsResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryStakingContractsResponse";
  value: Uint8Array;
}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponseAmino {
  contracts?: string[];
}
export interface QueryStakingContractsResponseAminoMsg {
  type: "/juno.cwhooks.v1.QueryStakingContractsResponse";
  value: QueryStakingContractsResponseAmino;
}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponseSDKType {
  contracts: string[];
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequest {}
export interface QueryGovernanceContractsRequestProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsRequest";
  value: Uint8Array;
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequestAmino {}
export interface QueryGovernanceContractsRequestAminoMsg {
  type: "/juno.cwhooks.v1.QueryGovernanceContractsRequest";
  value: QueryGovernanceContractsRequestAmino;
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequestSDKType {}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponse {
  contracts: string[];
}
export interface QueryGovernanceContractsResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsResponse";
  value: Uint8Array;
}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponseAmino {
  contracts?: string[];
}
export interface QueryGovernanceContractsResponseAminoMsg {
  type: "/juno.cwhooks.v1.QueryGovernanceContractsResponse";
  value: QueryGovernanceContractsResponseAmino;
}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponseSDKType {
  contracts: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/juno.cwhooks.v1.QueryParamsRequest",
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
      typeUrl: "/juno.cwhooks.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/juno.cwhooks.v1.QueryParamsResponse",
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
      typeUrl: "/juno.cwhooks.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakingContractsRequest(): QueryStakingContractsRequest {
  return {};
}
export const QueryStakingContractsRequest = {
  typeUrl: "/juno.cwhooks.v1.QueryStakingContractsRequest",
  encode(_: QueryStakingContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingContractsRequest();
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
  fromPartial(_: Partial<QueryStakingContractsRequest>): QueryStakingContractsRequest {
    const message = createBaseQueryStakingContractsRequest();
    return message;
  },
  fromAmino(_: QueryStakingContractsRequestAmino): QueryStakingContractsRequest {
    const message = createBaseQueryStakingContractsRequest();
    return message;
  },
  toAmino(_: QueryStakingContractsRequest): QueryStakingContractsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStakingContractsRequestAminoMsg): QueryStakingContractsRequest {
    return QueryStakingContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingContractsRequestProtoMsg): QueryStakingContractsRequest {
    return QueryStakingContractsRequest.decode(message.value);
  },
  toProto(message: QueryStakingContractsRequest): Uint8Array {
    return QueryStakingContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingContractsRequest): QueryStakingContractsRequestProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.QueryStakingContractsRequest",
      value: QueryStakingContractsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakingContractsResponse(): QueryStakingContractsResponse {
  return {
    contracts: []
  };
}
export const QueryStakingContractsResponse = {
  typeUrl: "/juno.cwhooks.v1.QueryStakingContractsResponse",
  encode(message: QueryStakingContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakingContractsResponse>): QueryStakingContractsResponse {
    const message = createBaseQueryStakingContractsResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryStakingContractsResponseAmino): QueryStakingContractsResponse {
    const message = createBaseQueryStakingContractsResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryStakingContractsResponse): QueryStakingContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStakingContractsResponseAminoMsg): QueryStakingContractsResponse {
    return QueryStakingContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingContractsResponseProtoMsg): QueryStakingContractsResponse {
    return QueryStakingContractsResponse.decode(message.value);
  },
  toProto(message: QueryStakingContractsResponse): Uint8Array {
    return QueryStakingContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingContractsResponse): QueryStakingContractsResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.QueryStakingContractsResponse",
      value: QueryStakingContractsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGovernanceContractsRequest(): QueryGovernanceContractsRequest {
  return {};
}
export const QueryGovernanceContractsRequest = {
  typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsRequest",
  encode(_: QueryGovernanceContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceContractsRequest();
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
  fromPartial(_: Partial<QueryGovernanceContractsRequest>): QueryGovernanceContractsRequest {
    const message = createBaseQueryGovernanceContractsRequest();
    return message;
  },
  fromAmino(_: QueryGovernanceContractsRequestAmino): QueryGovernanceContractsRequest {
    const message = createBaseQueryGovernanceContractsRequest();
    return message;
  },
  toAmino(_: QueryGovernanceContractsRequest): QueryGovernanceContractsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceContractsRequestAminoMsg): QueryGovernanceContractsRequest {
    return QueryGovernanceContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceContractsRequestProtoMsg): QueryGovernanceContractsRequest {
    return QueryGovernanceContractsRequest.decode(message.value);
  },
  toProto(message: QueryGovernanceContractsRequest): Uint8Array {
    return QueryGovernanceContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceContractsRequest): QueryGovernanceContractsRequestProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsRequest",
      value: QueryGovernanceContractsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGovernanceContractsResponse(): QueryGovernanceContractsResponse {
  return {
    contracts: []
  };
}
export const QueryGovernanceContractsResponse = {
  typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsResponse",
  encode(message: QueryGovernanceContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGovernanceContractsResponse>): QueryGovernanceContractsResponse {
    const message = createBaseQueryGovernanceContractsResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryGovernanceContractsResponseAmino): QueryGovernanceContractsResponse {
    const message = createBaseQueryGovernanceContractsResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryGovernanceContractsResponse): QueryGovernanceContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceContractsResponseAminoMsg): QueryGovernanceContractsResponse {
    return QueryGovernanceContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceContractsResponseProtoMsg): QueryGovernanceContractsResponse {
    return QueryGovernanceContractsResponse.decode(message.value);
  },
  toProto(message: QueryGovernanceContractsResponse): Uint8Array {
    return QueryGovernanceContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceContractsResponse): QueryGovernanceContractsResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsResponse",
      value: QueryGovernanceContractsResponse.encode(message).finish()
    };
  }
};