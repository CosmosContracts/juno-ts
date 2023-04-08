import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** Params defines the parameters for the tokenfactory module. */

export interface Params {
  denomCreationFee: Coin[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
   * to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */

  denomCreationGasConsume: Long;
}
/** Params defines the parameters for the tokenfactory module. */

export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
   * to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */

  denom_creation_gas_consume: Long;
}

function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
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
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.denomCreationGasConsume = (reader.uint64() as Long);
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
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? Long.fromValue(object.denomCreationGasConsume) : undefined;
    return message;
  }

};