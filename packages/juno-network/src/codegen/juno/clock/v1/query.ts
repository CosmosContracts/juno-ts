import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContracts {}
export interface QueryClockContractsProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContracts";
  value: Uint8Array;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsAmino {}
export interface QueryClockContractsAminoMsg {
  type: "/juno.clock.v1.QueryClockContracts";
  value: QueryClockContractsAmino;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsSDKType {}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponse {
  contractAddresses: string[];
}
export interface QueryClockContractsResponseProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContractsResponse";
  value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseAmino {
  contract_addresses?: string[];
}
export interface QueryClockContractsResponseAminoMsg {
  type: "/juno.clock.v1.QueryClockContractsResponse";
  value: QueryClockContractsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseSDKType {
  contract_addresses: string[];
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/juno.clock.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/juno.clock.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/juno.clock.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/juno.clock.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryClockContracts(): QueryClockContracts {
  return {};
}
export const QueryClockContracts = {
  typeUrl: "/juno.clock.v1.QueryClockContracts",
  encode(_: QueryClockContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClockContracts();
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
  fromPartial(_: Partial<QueryClockContracts>): QueryClockContracts {
    const message = createBaseQueryClockContracts();
    return message;
  },
  fromAmino(_: QueryClockContractsAmino): QueryClockContracts {
    const message = createBaseQueryClockContracts();
    return message;
  },
  toAmino(_: QueryClockContracts): QueryClockContractsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClockContractsAminoMsg): QueryClockContracts {
    return QueryClockContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractsProtoMsg): QueryClockContracts {
    return QueryClockContracts.decode(message.value);
  },
  toProto(message: QueryClockContracts): Uint8Array {
    return QueryClockContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContracts): QueryClockContractsProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContracts",
      value: QueryClockContracts.encode(message).finish()
    };
  }
};
function createBaseQueryClockContractsResponse(): QueryClockContractsResponse {
  return {
    contractAddresses: []
  };
}
export const QueryClockContractsResponse = {
  typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
  encode(message: QueryClockContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClockContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClockContractsResponse>): QueryClockContractsResponse {
    const message = createBaseQueryClockContractsResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryClockContractsResponseAmino): QueryClockContractsResponse {
    const message = createBaseQueryClockContractsResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryClockContractsResponse): QueryClockContractsResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClockContractsResponseAminoMsg): QueryClockContractsResponse {
    return QueryClockContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractsResponseProtoMsg): QueryClockContractsResponse {
    return QueryClockContractsResponse.decode(message.value);
  },
  toProto(message: QueryClockContractsResponse): Uint8Array {
    return QueryClockContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContractsResponse): QueryClockContractsResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
      value: QueryClockContractsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/juno.clock.v1.QueryParamsRequest",
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
      typeUrl: "/juno.clock.v1.QueryParamsRequest",
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
  typeUrl: "/juno.clock.v1.QueryParamsResponse",
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
      typeUrl: "/juno.clock.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};