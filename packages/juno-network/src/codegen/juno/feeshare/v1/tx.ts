import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgRegisterFeeShare defines a message that registers a FeeShare */

export interface MsgRegisterFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */

  withdrawerAddress: string;
}
/** MsgRegisterFeeShare defines a message that registers a FeeShare */

export interface MsgRegisterFeeShareSDKType {
  /** contract_address in bech32 format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployer_address: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */

  withdrawer_address: string;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */

export interface MsgRegisterFeeShareResponse {}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */

export interface MsgRegisterFeeShareResponseSDKType {}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */

export interface MsgUpdateFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */

  withdrawerAddress: string;
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */

export interface MsgUpdateFeeShareSDKType {
  /** contract_address in bech32 format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployer_address: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */

  withdrawer_address: string;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */

export interface MsgUpdateFeeShareResponse {}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */

export interface MsgUpdateFeeShareResponseSDKType {}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */

export interface MsgCancelFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployerAddress: string;
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */

export interface MsgCancelFeeShareSDKType {
  /** contract_address in bech32 format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */

  deployer_address: string;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */

export interface MsgCancelFeeShareResponse {}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */

export interface MsgCancelFeeShareResponseSDKType {}

function createBaseMsgRegisterFeeShare(): MsgRegisterFeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}

export const MsgRegisterFeeShare = {
  encode(message: MsgRegisterFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterFeeShare();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        case 3:
          message.withdrawerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterFeeShare>): MsgRegisterFeeShare {
    const message = createBaseMsgRegisterFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};

function createBaseMsgRegisterFeeShareResponse(): MsgRegisterFeeShareResponse {
  return {};
}

export const MsgRegisterFeeShareResponse = {
  encode(_: MsgRegisterFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterFeeShareResponse();

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

  fromPartial(_: DeepPartial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse {
    const message = createBaseMsgRegisterFeeShareResponse();
    return message;
  }

};

function createBaseMsgUpdateFeeShare(): MsgUpdateFeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}

export const MsgUpdateFeeShare = {
  encode(message: MsgUpdateFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeShare();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        case 3:
          message.withdrawerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeShare>): MsgUpdateFeeShare {
    const message = createBaseMsgUpdateFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateFeeShareResponse(): MsgUpdateFeeShareResponse {
  return {};
}

export const MsgUpdateFeeShareResponse = {
  encode(_: MsgUpdateFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeShareResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateFeeShareResponse>): MsgUpdateFeeShareResponse {
    const message = createBaseMsgUpdateFeeShareResponse();
    return message;
  }

};

function createBaseMsgCancelFeeShare(): MsgCancelFeeShare {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}

export const MsgCancelFeeShare = {
  encode(message: MsgCancelFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelFeeShare();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelFeeShare>): MsgCancelFeeShare {
    const message = createBaseMsgCancelFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  }

};

function createBaseMsgCancelFeeShareResponse(): MsgCancelFeeShareResponse {
  return {};
}

export const MsgCancelFeeShareResponse = {
  encode(_: MsgCancelFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelFeeShareResponse();

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

  fromPartial(_: DeepPartial<MsgCancelFeeShareResponse>): MsgCancelFeeShareResponse {
    const message = createBaseMsgCancelFeeShareResponse();
    return message;
  }

};