import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the drip module parameters */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/juno.drip.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** params are the drip module parameters */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/juno.drip.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params defines the drip module params */
export interface Params {
  /** enable_drip defines a parameter to enable the drip module */
  enableDrip: boolean;
  /** allowed_addresses defines the list of addresses authorized to use the module */
  allowedAddresses: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/juno.drip.v1.Params";
  value: Uint8Array;
}
/** Params defines the drip module params */
export interface ParamsAmino {
  /** enable_drip defines a parameter to enable the drip module */
  enable_drip?: boolean;
  /** allowed_addresses defines the list of addresses authorized to use the module */
  allowed_addresses?: string[];
}
export interface ParamsAminoMsg {
  type: "/juno.drip.v1.Params";
  value: ParamsAmino;
}
/** Params defines the drip module params */
export interface ParamsSDKType {
  enable_drip: boolean;
  allowed_addresses: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/juno.drip.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/juno.drip.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableDrip: false,
    allowedAddresses: []
  };
}
export const Params = {
  typeUrl: "/juno.drip.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableDrip === true) {
      writer.uint32(8).bool(message.enableDrip);
    }
    for (const v of message.allowedAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableDrip = reader.bool();
          break;
        case 3:
          message.allowedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableDrip = object.enableDrip ?? false;
    message.allowedAddresses = object.allowedAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_drip !== undefined && object.enable_drip !== null) {
      message.enableDrip = object.enable_drip;
    }
    message.allowedAddresses = object.allowed_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_drip = message.enableDrip;
    if (message.allowedAddresses) {
      obj.allowed_addresses = message.allowedAddresses.map(e => e);
    } else {
      obj.allowed_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/juno.drip.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};