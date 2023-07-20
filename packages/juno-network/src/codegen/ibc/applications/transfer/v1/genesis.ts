import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisState {
  portId: string;
  denomTraces: DenomTrace[];
  params?: Params;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */

  totalEscrowed: Coin[];
}
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisStateSDKType {
  port_id: string;
  denom_traces: DenomTraceSDKType[];
  params?: ParamsSDKType;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */

  total_escrowed: CoinSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denomTraces: [],
    params: undefined,
    totalEscrowed: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.totalEscrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.portId = reader.string();
          break;

        case 2:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 4:
          message.totalEscrowed.push(Coin.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.totalEscrowed = object.totalEscrowed?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};