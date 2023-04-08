import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */

export interface FeeShare {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */

  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */

  withdrawerAddress: string;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */

export interface FeeShareSDKType {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */

  deployer_address: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */

  withdrawer_address: string;
}

function createBaseFeeShare(): FeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}

export const FeeShare = {
  encode(message: FeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeShare();

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

  fromPartial(object: DeepPartial<FeeShare>): FeeShare {
    const message = createBaseFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};