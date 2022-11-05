import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** Minter represents the minting state. */

export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  phase: Long;
  startPhaseBlock: Long;
  /** current annual expected provisions */

  annualProvisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  /** current annual inflation rate */
  inflation: string;
  phase: Long;
  start_phase_block: Long;
  /** current annual expected provisions */

  annual_provisions: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** expected blocks per year */

  blocksPerYear: Long;
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  /** type of coin to mint */
  mint_denom: string;
  /** expected blocks per year */

  blocks_per_year: Long;
}

function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: Long.UZERO,
    startPhaseBlock: Long.UZERO,
    annualProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }

    if (!message.phase.isZero()) {
      writer.uint32(16).uint64(message.phase);
    }

    if (!message.startPhaseBlock.isZero()) {
      writer.uint32(24).uint64(message.startPhaseBlock);
    }

    if (message.annualProvisions !== "") {
      writer.uint32(34).string(message.annualProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;

        case 2:
          message.phase = (reader.uint64() as Long);
          break;

        case 3:
          message.startPhaseBlock = (reader.uint64() as Long);
          break;

        case 4:
          message.annualProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? Long.fromValue(object.phase) : Long.UZERO;
    message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? Long.fromValue(object.startPhaseBlock) : Long.UZERO;
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    blocksPerYear: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (!message.blocksPerYear.isZero()) {
      writer.uint32(16).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;

        case 2:
          message.blocksPerYear = (reader.uint64() as Long);
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
    message.mintDenom = object.mintDenom ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }

};