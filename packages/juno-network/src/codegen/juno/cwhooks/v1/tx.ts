import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/clock parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/clock parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/juno.cwhooks.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/juno.cwhooks.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgRegisterStaking */
export interface MsgRegisterStaking {
  contractAddress: string;
  registerAddress: string;
}
export interface MsgRegisterStakingProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking";
  value: Uint8Array;
}
/** MsgRegisterStaking */
export interface MsgRegisterStakingAmino {
  contract_address?: string;
  register_address?: string;
}
export interface MsgRegisterStakingAminoMsg {
  type: "/juno.cwhooks.v1.MsgRegisterStaking";
  value: MsgRegisterStakingAmino;
}
/** MsgRegisterStaking */
export interface MsgRegisterStakingSDKType {
  contract_address: string;
  register_address: string;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponse {}
export interface MsgRegisterStakingResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterStakingResponse";
  value: Uint8Array;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponseAmino {}
export interface MsgRegisterStakingResponseAminoMsg {
  type: "/juno.cwhooks.v1.MsgRegisterStakingResponse";
  value: MsgRegisterStakingResponseAmino;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponseSDKType {}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernance {
  contractAddress: string;
  registerAddress: string;
}
export interface MsgRegisterGovernanceProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance";
  value: Uint8Array;
}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernanceAmino {
  contract_address?: string;
  register_address?: string;
}
export interface MsgRegisterGovernanceAminoMsg {
  type: "/juno.cwhooks.v1.MsgRegisterGovernance";
  value: MsgRegisterGovernanceAmino;
}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernanceSDKType {
  contract_address: string;
  register_address: string;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponse {}
export interface MsgRegisterGovernanceResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse";
  value: Uint8Array;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponseAmino {}
export interface MsgRegisterGovernanceResponseAminoMsg {
  type: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse";
  value: MsgRegisterGovernanceResponseAmino;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponseSDKType {}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernance {
  contractAddress: string;
  registerAddress: string;
}
export interface MsgUnregisterGovernanceProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance";
  value: Uint8Array;
}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernanceAmino {
  contract_address?: string;
  register_address?: string;
}
export interface MsgUnregisterGovernanceAminoMsg {
  type: "/juno.cwhooks.v1.MsgUnregisterGovernance";
  value: MsgUnregisterGovernanceAmino;
}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernanceSDKType {
  contract_address: string;
  register_address: string;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponse {}
export interface MsgUnregisterGovernanceResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse";
  value: Uint8Array;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponseAmino {}
export interface MsgUnregisterGovernanceResponseAminoMsg {
  type: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse";
  value: MsgUnregisterGovernanceResponseAmino;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponseSDKType {}
/** MsgUnregisterStaking */
export interface MsgUnregisterStaking {
  contractAddress: string;
  registerAddress: string;
}
export interface MsgUnregisterStakingProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking";
  value: Uint8Array;
}
/** MsgUnregisterStaking */
export interface MsgUnregisterStakingAmino {
  contract_address?: string;
  register_address?: string;
}
export interface MsgUnregisterStakingAminoMsg {
  type: "/juno.cwhooks.v1.MsgUnregisterStaking";
  value: MsgUnregisterStakingAmino;
}
/** MsgUnregisterStaking */
export interface MsgUnregisterStakingSDKType {
  contract_address: string;
  register_address: string;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponse {}
export interface MsgUnregisterStakingResponseProtoMsg {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterStakingResponse";
  value: Uint8Array;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponseAmino {}
export interface MsgUnregisterStakingResponseAminoMsg {
  type: "/juno.cwhooks.v1.MsgUnregisterStakingResponse";
  value: MsgUnregisterStakingResponseAmino;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/juno.cwhooks.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/juno.cwhooks.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterStaking(): MsgRegisterStaking {
  return {
    contractAddress: "",
    registerAddress: ""
  };
}
export const MsgRegisterStaking = {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking",
  encode(message: MsgRegisterStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.registerAddress !== "") {
      writer.uint32(18).string(message.registerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.registerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterStaking>): MsgRegisterStaking {
    const message = createBaseMsgRegisterStaking();
    message.contractAddress = object.contractAddress ?? "";
    message.registerAddress = object.registerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterStakingAmino): MsgRegisterStaking {
    const message = createBaseMsgRegisterStaking();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.register_address !== undefined && object.register_address !== null) {
      message.registerAddress = object.register_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterStaking): MsgRegisterStakingAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.register_address = message.registerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterStakingAminoMsg): MsgRegisterStaking {
    return MsgRegisterStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterStakingProtoMsg): MsgRegisterStaking {
    return MsgRegisterStaking.decode(message.value);
  },
  toProto(message: MsgRegisterStaking): Uint8Array {
    return MsgRegisterStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterStaking): MsgRegisterStakingProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking",
      value: MsgRegisterStaking.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterStakingResponse(): MsgRegisterStakingResponse {
  return {};
}
export const MsgRegisterStakingResponse = {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterStakingResponse",
  encode(_: MsgRegisterStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterStakingResponse();
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
  fromPartial(_: Partial<MsgRegisterStakingResponse>): MsgRegisterStakingResponse {
    const message = createBaseMsgRegisterStakingResponse();
    return message;
  },
  fromAmino(_: MsgRegisterStakingResponseAmino): MsgRegisterStakingResponse {
    const message = createBaseMsgRegisterStakingResponse();
    return message;
  },
  toAmino(_: MsgRegisterStakingResponse): MsgRegisterStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterStakingResponseAminoMsg): MsgRegisterStakingResponse {
    return MsgRegisterStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterStakingResponseProtoMsg): MsgRegisterStakingResponse {
    return MsgRegisterStakingResponse.decode(message.value);
  },
  toProto(message: MsgRegisterStakingResponse): Uint8Array {
    return MsgRegisterStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterStakingResponse): MsgRegisterStakingResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgRegisterStakingResponse",
      value: MsgRegisterStakingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterGovernance(): MsgRegisterGovernance {
  return {
    contractAddress: "",
    registerAddress: ""
  };
}
export const MsgRegisterGovernance = {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance",
  encode(message: MsgRegisterGovernance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.registerAddress !== "") {
      writer.uint32(18).string(message.registerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterGovernance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.registerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterGovernance>): MsgRegisterGovernance {
    const message = createBaseMsgRegisterGovernance();
    message.contractAddress = object.contractAddress ?? "";
    message.registerAddress = object.registerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterGovernanceAmino): MsgRegisterGovernance {
    const message = createBaseMsgRegisterGovernance();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.register_address !== undefined && object.register_address !== null) {
      message.registerAddress = object.register_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterGovernance): MsgRegisterGovernanceAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.register_address = message.registerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterGovernanceAminoMsg): MsgRegisterGovernance {
    return MsgRegisterGovernance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterGovernanceProtoMsg): MsgRegisterGovernance {
    return MsgRegisterGovernance.decode(message.value);
  },
  toProto(message: MsgRegisterGovernance): Uint8Array {
    return MsgRegisterGovernance.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterGovernance): MsgRegisterGovernanceProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance",
      value: MsgRegisterGovernance.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterGovernanceResponse(): MsgRegisterGovernanceResponse {
  return {};
}
export const MsgRegisterGovernanceResponse = {
  typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse",
  encode(_: MsgRegisterGovernanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterGovernanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterGovernanceResponse();
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
  fromPartial(_: Partial<MsgRegisterGovernanceResponse>): MsgRegisterGovernanceResponse {
    const message = createBaseMsgRegisterGovernanceResponse();
    return message;
  },
  fromAmino(_: MsgRegisterGovernanceResponseAmino): MsgRegisterGovernanceResponse {
    const message = createBaseMsgRegisterGovernanceResponse();
    return message;
  },
  toAmino(_: MsgRegisterGovernanceResponse): MsgRegisterGovernanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterGovernanceResponseAminoMsg): MsgRegisterGovernanceResponse {
    return MsgRegisterGovernanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterGovernanceResponseProtoMsg): MsgRegisterGovernanceResponse {
    return MsgRegisterGovernanceResponse.decode(message.value);
  },
  toProto(message: MsgRegisterGovernanceResponse): Uint8Array {
    return MsgRegisterGovernanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterGovernanceResponse): MsgRegisterGovernanceResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse",
      value: MsgRegisterGovernanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterGovernance(): MsgUnregisterGovernance {
  return {
    contractAddress: "",
    registerAddress: ""
  };
}
export const MsgUnregisterGovernance = {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance",
  encode(message: MsgUnregisterGovernance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.registerAddress !== "") {
      writer.uint32(18).string(message.registerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterGovernance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.registerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnregisterGovernance>): MsgUnregisterGovernance {
    const message = createBaseMsgUnregisterGovernance();
    message.contractAddress = object.contractAddress ?? "";
    message.registerAddress = object.registerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterGovernanceAmino): MsgUnregisterGovernance {
    const message = createBaseMsgUnregisterGovernance();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.register_address !== undefined && object.register_address !== null) {
      message.registerAddress = object.register_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterGovernance): MsgUnregisterGovernanceAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.register_address = message.registerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterGovernanceAminoMsg): MsgUnregisterGovernance {
    return MsgUnregisterGovernance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterGovernanceProtoMsg): MsgUnregisterGovernance {
    return MsgUnregisterGovernance.decode(message.value);
  },
  toProto(message: MsgUnregisterGovernance): Uint8Array {
    return MsgUnregisterGovernance.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterGovernance): MsgUnregisterGovernanceProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance",
      value: MsgUnregisterGovernance.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterGovernanceResponse(): MsgUnregisterGovernanceResponse {
  return {};
}
export const MsgUnregisterGovernanceResponse = {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse",
  encode(_: MsgUnregisterGovernanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterGovernanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterGovernanceResponse();
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
  fromPartial(_: Partial<MsgUnregisterGovernanceResponse>): MsgUnregisterGovernanceResponse {
    const message = createBaseMsgUnregisterGovernanceResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterGovernanceResponseAmino): MsgUnregisterGovernanceResponse {
    const message = createBaseMsgUnregisterGovernanceResponse();
    return message;
  },
  toAmino(_: MsgUnregisterGovernanceResponse): MsgUnregisterGovernanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterGovernanceResponseAminoMsg): MsgUnregisterGovernanceResponse {
    return MsgUnregisterGovernanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterGovernanceResponseProtoMsg): MsgUnregisterGovernanceResponse {
    return MsgUnregisterGovernanceResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterGovernanceResponse): Uint8Array {
    return MsgUnregisterGovernanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterGovernanceResponse): MsgUnregisterGovernanceResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse",
      value: MsgUnregisterGovernanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterStaking(): MsgUnregisterStaking {
  return {
    contractAddress: "",
    registerAddress: ""
  };
}
export const MsgUnregisterStaking = {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking",
  encode(message: MsgUnregisterStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.registerAddress !== "") {
      writer.uint32(18).string(message.registerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.registerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnregisterStaking>): MsgUnregisterStaking {
    const message = createBaseMsgUnregisterStaking();
    message.contractAddress = object.contractAddress ?? "";
    message.registerAddress = object.registerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterStakingAmino): MsgUnregisterStaking {
    const message = createBaseMsgUnregisterStaking();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.register_address !== undefined && object.register_address !== null) {
      message.registerAddress = object.register_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterStaking): MsgUnregisterStakingAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.register_address = message.registerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterStakingAminoMsg): MsgUnregisterStaking {
    return MsgUnregisterStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterStakingProtoMsg): MsgUnregisterStaking {
    return MsgUnregisterStaking.decode(message.value);
  },
  toProto(message: MsgUnregisterStaking): Uint8Array {
    return MsgUnregisterStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterStaking): MsgUnregisterStakingProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking",
      value: MsgUnregisterStaking.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterStakingResponse(): MsgUnregisterStakingResponse {
  return {};
}
export const MsgUnregisterStakingResponse = {
  typeUrl: "/juno.cwhooks.v1.MsgUnregisterStakingResponse",
  encode(_: MsgUnregisterStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterStakingResponse();
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
  fromPartial(_: Partial<MsgUnregisterStakingResponse>): MsgUnregisterStakingResponse {
    const message = createBaseMsgUnregisterStakingResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterStakingResponseAmino): MsgUnregisterStakingResponse {
    const message = createBaseMsgUnregisterStakingResponse();
    return message;
  },
  toAmino(_: MsgUnregisterStakingResponse): MsgUnregisterStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterStakingResponseAminoMsg): MsgUnregisterStakingResponse {
    return MsgUnregisterStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterStakingResponseProtoMsg): MsgUnregisterStakingResponse {
    return MsgUnregisterStakingResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterStakingResponse): Uint8Array {
    return MsgUnregisterStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterStakingResponse): MsgUnregisterStakingResponseProtoMsg {
    return {
      typeUrl: "/juno.cwhooks.v1.MsgUnregisterStakingResponse",
      value: MsgUnregisterStakingResponse.encode(message).finish()
    };
  }
};