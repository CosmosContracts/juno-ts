import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the feepay module parameters */
  params: Params;
  /** fee_pay_contracts are the feepay module contracts */
  feePayContracts: FeePayContract[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/juno.feepay.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** params are the feepay module parameters */
  params?: ParamsAmino;
  /** fee_pay_contracts are the feepay module contracts */
  fee_pay_contracts?: FeePayContractAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/juno.feepay.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pay_contracts: FeePayContractSDKType[];
}
/** Params defines the feepay module params */
export interface Params {
  /** enable_feepay defines a parameter to enable the feepay module */
  enableFeepay: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/juno.feepay.v1.Params";
  value: Uint8Array;
}
/** Params defines the feepay module params */
export interface ParamsAmino {
  /** enable_feepay defines a parameter to enable the feepay module */
  enable_feepay?: boolean;
}
export interface ParamsAminoMsg {
  type: "/juno.feepay.v1.Params";
  value: ParamsAmino;
}
/** Params defines the feepay module params */
export interface ParamsSDKType {
  enable_feepay: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePayContracts: []
  };
}
export const GenesisState = {
  typeUrl: "/juno.feepay.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feePayContracts) {
      FeePayContract.encode(v!, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.feePayContracts.push(FeePayContract.decode(reader, reader.uint32()));
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
    message.feePayContracts = object.feePayContracts?.map(e => FeePayContract.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feePayContracts = object.fee_pay_contracts?.map(e => FeePayContract.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feePayContracts) {
      obj.fee_pay_contracts = message.feePayContracts.map(e => e ? FeePayContract.toAmino(e) : undefined);
    } else {
      obj.fee_pay_contracts = [];
    }
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
      typeUrl: "/juno.feepay.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableFeepay: false
  };
}
export const Params = {
  typeUrl: "/juno.feepay.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableFeepay === true) {
      writer.uint32(8).bool(message.enableFeepay);
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
          message.enableFeepay = reader.bool();
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
    message.enableFeepay = object.enableFeepay ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_feepay !== undefined && object.enable_feepay !== null) {
      message.enableFeepay = object.enable_feepay;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_feepay = message.enableFeepay;
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
      typeUrl: "/juno.feepay.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};