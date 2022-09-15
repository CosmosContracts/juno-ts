import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** Minter represents the minting state. */
export interface Minter {
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
  mint_denom: string;

  /** expected blocks per year */
  blocks_per_year: Long;
}

function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: Long.UZERO,
    start_phase_block: Long.UZERO,
    annual_provisions: ""
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

    if (!message.start_phase_block.isZero()) {
      writer.uint32(24).uint64(message.start_phase_block);
    }

    if (message.annual_provisions !== "") {
      writer.uint32(34).string(message.annual_provisions);
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
          message.start_phase_block = (reader.uint64() as Long);
          break;

        case 4:
          message.annual_provisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      phase: isSet(object.phase) ? Long.fromString(object.phase) : Long.UZERO,
      start_phase_block: isSet(object.start_phase_block) ? Long.fromString(object.start_phase_block) : Long.UZERO,
      annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.phase !== undefined && (obj.phase = (message.phase || Long.UZERO).toString());
    message.start_phase_block !== undefined && (obj.start_phase_block = (message.start_phase_block || Long.UZERO).toString());
    message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? Long.fromValue(object.phase) : Long.UZERO;
    message.start_phase_block = object.start_phase_block !== undefined && object.start_phase_block !== null ? Long.fromValue(object.start_phase_block) : Long.UZERO;
    message.annual_provisions = object.annual_provisions ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mint_denom: "",
    blocks_per_year: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }

    if (!message.blocks_per_year.isZero()) {
      writer.uint32(16).uint64(message.blocks_per_year);
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
          message.mint_denom = reader.string();
          break;

        case 2:
          message.blocks_per_year = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      blocks_per_year: isSet(object.blocks_per_year) ? Long.fromString(object.blocks_per_year) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
    message.blocks_per_year !== undefined && (obj.blocks_per_year = (message.blocks_per_year || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mint_denom = object.mint_denom ?? "";
    message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? Long.fromValue(object.blocks_per_year) : Long.UZERO;
    return message;
  }

};