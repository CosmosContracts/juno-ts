import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface GenesisState_InFlightPacketsEntry {
  key: string;
  value?: InFlightPacket;
}
export interface GenesisState_InFlightPacketsEntrySDKType {
  key: string;
  value?: InFlightPacketSDKType;
}
/** GenesisState defines the router genesis state */

export interface GenesisState {
  params?: Params;
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */

  inFlightPackets?: {
    [key: string]: InFlightPacket;
  };
}
/** GenesisState defines the router genesis state */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  in_flight_packets?: {
    [key: string]: InFlightPacketSDKType;
  };
}
/** Params defines the set of IBC router parameters. */

export interface Params {
  feePercentage: string;
}
/** Params defines the set of IBC router parameters. */

export interface ParamsSDKType {
  fee_percentage: string;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */

export interface InFlightPacket {
  originalSenderAddress: string;
  refundChannelId: string;
  refundPortId: string;
  packetSrcChannelId: string;
  packetSrcPortId: string;
  packetTimeoutTimestamp: Long;
  packetTimeoutHeight: string;
  packetData: Uint8Array;
  refundSequence: Long;
  retriesRemaining: number;
  timeout: Long;
  nonrefundable: boolean;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */

export interface InFlightPacketSDKType {
  original_sender_address: string;
  refund_channel_id: string;
  refund_port_id: string;
  packet_src_channel_id: string;
  packet_src_port_id: string;
  packet_timeout_timestamp: Long;
  packet_timeout_height: string;
  packet_data: Uint8Array;
  refund_sequence: Long;
  retries_remaining: number;
  timeout: Long;
  nonrefundable: boolean;
}

function createBaseGenesisState_InFlightPacketsEntry(): GenesisState_InFlightPacketsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const GenesisState_InFlightPacketsEntry = {
  encode(message: GenesisState_InFlightPacketsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_InFlightPacketsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_InFlightPacketsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = InFlightPacket.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry {
    const message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    inFlightPackets: {}
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    Object.entries(message.inFlightPackets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
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
          const entry2 = GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.inFlightPackets[entry2.key] = entry2.value;
          }

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
    message.inFlightPackets = Object.entries(object.inFlightPackets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseParams(): Params {
  return {
    feePercentage: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feePercentage !== "") {
      writer.uint32(10).string(message.feePercentage);
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
          message.feePercentage = reader.string();
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
    message.feePercentage = object.feePercentage ?? "";
    return message;
  }

};

function createBaseInFlightPacket(): InFlightPacket {
  return {
    originalSenderAddress: "",
    refundChannelId: "",
    refundPortId: "",
    packetSrcChannelId: "",
    packetSrcPortId: "",
    packetTimeoutTimestamp: Long.UZERO,
    packetTimeoutHeight: "",
    packetData: new Uint8Array(),
    refundSequence: Long.UZERO,
    retriesRemaining: 0,
    timeout: Long.UZERO,
    nonrefundable: false
  };
}

export const InFlightPacket = {
  encode(message: InFlightPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalSenderAddress !== "") {
      writer.uint32(10).string(message.originalSenderAddress);
    }

    if (message.refundChannelId !== "") {
      writer.uint32(18).string(message.refundChannelId);
    }

    if (message.refundPortId !== "") {
      writer.uint32(26).string(message.refundPortId);
    }

    if (message.packetSrcChannelId !== "") {
      writer.uint32(34).string(message.packetSrcChannelId);
    }

    if (message.packetSrcPortId !== "") {
      writer.uint32(42).string(message.packetSrcPortId);
    }

    if (!message.packetTimeoutTimestamp.isZero()) {
      writer.uint32(48).uint64(message.packetTimeoutTimestamp);
    }

    if (message.packetTimeoutHeight !== "") {
      writer.uint32(58).string(message.packetTimeoutHeight);
    }

    if (message.packetData.length !== 0) {
      writer.uint32(66).bytes(message.packetData);
    }

    if (!message.refundSequence.isZero()) {
      writer.uint32(72).uint64(message.refundSequence);
    }

    if (message.retriesRemaining !== 0) {
      writer.uint32(80).int32(message.retriesRemaining);
    }

    if (!message.timeout.isZero()) {
      writer.uint32(88).uint64(message.timeout);
    }

    if (message.nonrefundable === true) {
      writer.uint32(96).bool(message.nonrefundable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InFlightPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInFlightPacket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.originalSenderAddress = reader.string();
          break;

        case 2:
          message.refundChannelId = reader.string();
          break;

        case 3:
          message.refundPortId = reader.string();
          break;

        case 4:
          message.packetSrcChannelId = reader.string();
          break;

        case 5:
          message.packetSrcPortId = reader.string();
          break;

        case 6:
          message.packetTimeoutTimestamp = (reader.uint64() as Long);
          break;

        case 7:
          message.packetTimeoutHeight = reader.string();
          break;

        case 8:
          message.packetData = reader.bytes();
          break;

        case 9:
          message.refundSequence = (reader.uint64() as Long);
          break;

        case 10:
          message.retriesRemaining = reader.int32();
          break;

        case 11:
          message.timeout = (reader.uint64() as Long);
          break;

        case 12:
          message.nonrefundable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket {
    const message = createBaseInFlightPacket();
    message.originalSenderAddress = object.originalSenderAddress ?? "";
    message.refundChannelId = object.refundChannelId ?? "";
    message.refundPortId = object.refundPortId ?? "";
    message.packetSrcChannelId = object.packetSrcChannelId ?? "";
    message.packetSrcPortId = object.packetSrcPortId ?? "";
    message.packetTimeoutTimestamp = object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null ? Long.fromValue(object.packetTimeoutTimestamp) : Long.UZERO;
    message.packetTimeoutHeight = object.packetTimeoutHeight ?? "";
    message.packetData = object.packetData ?? new Uint8Array();
    message.refundSequence = object.refundSequence !== undefined && object.refundSequence !== null ? Long.fromValue(object.refundSequence) : Long.UZERO;
    message.retriesRemaining = object.retriesRemaining ?? 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.UZERO;
    message.nonrefundable = object.nonrefundable ?? false;
    return message;
  }

};