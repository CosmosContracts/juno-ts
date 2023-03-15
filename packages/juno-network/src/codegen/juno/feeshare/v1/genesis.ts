import { FeeShare, FeeShareSDKType } from "./feeshare";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the module's genesis state. */

export interface GenesisState {
  /** params are the feeshare module parameters */
  params?: Params;
  /** FeeShare is a slice of active registered contracts for fee distribution */

  feeShare: FeeShare[];
}
/** GenesisState defines the module's genesis state. */

export interface GenesisStateSDKType {
  /** params are the feeshare module parameters */
  params?: ParamsSDKType;
  /** FeeShare is a slice of active registered contracts for fee distribution */

  fee_share: FeeShareSDKType[];
}
/** Params defines the feeshare module params */

export interface Params {
  /** enable_feeshare defines a parameter to enable the feeshare module */
  enableFeeShare: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */

  developerShares: string;
  /**
   * allowed_denoms defines the list of denoms that are allowed to be paid to
   * the contract withdraw addresses. If said denom is not in the list, the fees
   * will ONLY be sent to the community pool.
   * If this list is empty, all denoms are allowed.
   */

  allowedDenoms: string[];
}
/** Params defines the feeshare module params */

export interface ParamsSDKType {
  /** enable_feeshare defines a parameter to enable the feeshare module */
  enable_fee_share: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */

  developer_shares: string;
  /**
   * allowed_denoms defines the list of denoms that are allowed to be paid to
   * the contract withdraw addresses. If said denom is not in the list, the fees
   * will ONLY be sent to the community pool.
   * If this list is empty, all denoms are allowed.
   */

  allowed_denoms: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feeShare: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.feeShare) {
      FeeShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.feeShare.push(FeeShare.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feeShare = object.feeShare?.map(e => FeeShare.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    enableFeeShare: false,
    developerShares: "",
    allowedDenoms: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFeeShare === true) {
      writer.uint32(8).bool(message.enableFeeShare);
    }

    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }

    for (const v of message.allowedDenoms) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enableFeeShare = reader.bool();
          break;

        case 2:
          message.developerShares = reader.string();
          break;

        case 3:
          message.allowedDenoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableFeeShare = object.enableFeeShare ?? false;
    message.developerShares = object.developerShares ?? "";
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    return message;
  }

};