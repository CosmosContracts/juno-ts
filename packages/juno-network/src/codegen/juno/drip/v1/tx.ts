import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokens {
  /** sender_address is the bech32 address of message sender. */
  senderAddress: string;
  /** amount is the amount being airdropped to stakers */
  amount: Coin[];
}
export interface MsgDistributeTokensProtoMsg {
  typeUrl: "/juno.drip.v1.MsgDistributeTokens";
  value: Uint8Array;
}
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokensAmino {
  /** sender_address is the bech32 address of message sender. */
  sender_address?: string;
  /** amount is the amount being airdropped to stakers */
  amount: CoinAmino[];
}
export interface MsgDistributeTokensAminoMsg {
  type: "/juno.drip.v1.MsgDistributeTokens";
  value: MsgDistributeTokensAmino;
}
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokensSDKType {
  sender_address: string;
  amount: CoinSDKType[];
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponse {}
export interface MsgDistributeTokensResponseProtoMsg {
  typeUrl: "/juno.drip.v1.MsgDistributeTokensResponse";
  value: Uint8Array;
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponseAmino {}
export interface MsgDistributeTokensResponseAminoMsg {
  type: "/juno.drip.v1.MsgDistributeTokensResponse";
  value: MsgDistributeTokensResponseAmino;
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/auth parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/juno.drip.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/auth parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/x/auth/MsgUpdateParams";
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/juno.drip.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/juno.drip.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgDistributeTokens(): MsgDistributeTokens {
  return {
    senderAddress: "",
    amount: []
  };
}
export const MsgDistributeTokens = {
  typeUrl: "/juno.drip.v1.MsgDistributeTokens",
  encode(message: MsgDistributeTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDistributeTokens>): MsgDistributeTokens {
    const message = createBaseMsgDistributeTokens();
    message.senderAddress = object.senderAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDistributeTokensAmino): MsgDistributeTokens {
    const message = createBaseMsgDistributeTokens();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDistributeTokens): MsgDistributeTokensAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgDistributeTokensAminoMsg): MsgDistributeTokens {
    return MsgDistributeTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributeTokensProtoMsg): MsgDistributeTokens {
    return MsgDistributeTokens.decode(message.value);
  },
  toProto(message: MsgDistributeTokens): Uint8Array {
    return MsgDistributeTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeTokens): MsgDistributeTokensProtoMsg {
    return {
      typeUrl: "/juno.drip.v1.MsgDistributeTokens",
      value: MsgDistributeTokens.encode(message).finish()
    };
  }
};
function createBaseMsgDistributeTokensResponse(): MsgDistributeTokensResponse {
  return {};
}
export const MsgDistributeTokensResponse = {
  typeUrl: "/juno.drip.v1.MsgDistributeTokensResponse",
  encode(_: MsgDistributeTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeTokensResponse();
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
  fromPartial(_: Partial<MsgDistributeTokensResponse>): MsgDistributeTokensResponse {
    const message = createBaseMsgDistributeTokensResponse();
    return message;
  },
  fromAmino(_: MsgDistributeTokensResponseAmino): MsgDistributeTokensResponse {
    const message = createBaseMsgDistributeTokensResponse();
    return message;
  },
  toAmino(_: MsgDistributeTokensResponse): MsgDistributeTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDistributeTokensResponseAminoMsg): MsgDistributeTokensResponse {
    return MsgDistributeTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributeTokensResponseProtoMsg): MsgDistributeTokensResponse {
    return MsgDistributeTokensResponse.decode(message.value);
  },
  toProto(message: MsgDistributeTokensResponse): Uint8Array {
    return MsgDistributeTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeTokensResponse): MsgDistributeTokensResponseProtoMsg {
    return {
      typeUrl: "/juno.drip.v1.MsgDistributeTokensResponse",
      value: MsgDistributeTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/juno.drip.v1.MsgUpdateParams",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/auth/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/juno.drip.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/juno.drip.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/juno.drip.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};