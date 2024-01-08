import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContract {
  /** The address of the contract. */
  contractAddress: string;
  /** The ledger balance of the contract. */
  balance: bigint;
  /** The number of times a wallet may interact with the contract. */
  walletLimit: bigint;
}
export interface FeePayContractProtoMsg {
  typeUrl: "/juno.feepay.v1.FeePayContract";
  value: Uint8Array;
}
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContractAmino {
  /** The address of the contract. */
  contract_address?: string;
  /** The ledger balance of the contract. */
  balance?: string;
  /** The number of times a wallet may interact with the contract. */
  wallet_limit?: string;
}
export interface FeePayContractAminoMsg {
  type: "/juno.feepay.v1.FeePayContract";
  value: FeePayContractAmino;
}
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContractSDKType {
  contract_address: string;
  balance: bigint;
  wallet_limit: bigint;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsage {
  /** The contract address. */
  contractAddress: string;
  /** The wallet address. */
  walletAddress: string;
  /** The number of uses corresponding to a wallet. */
  uses: bigint;
}
export interface FeePayWalletUsageProtoMsg {
  typeUrl: "/juno.feepay.v1.FeePayWalletUsage";
  value: Uint8Array;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsageAmino {
  /** The contract address. */
  contract_address?: string;
  /** The wallet address. */
  wallet_address?: string;
  /** The number of uses corresponding to a wallet. */
  uses?: string;
}
export interface FeePayWalletUsageAminoMsg {
  type: "/juno.feepay.v1.FeePayWalletUsage";
  value: FeePayWalletUsageAmino;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsageSDKType {
  contract_address: string;
  wallet_address: string;
  uses: bigint;
}
function createBaseFeePayContract(): FeePayContract {
  return {
    contractAddress: "",
    balance: BigInt(0),
    walletLimit: BigInt(0)
  };
}
export const FeePayContract = {
  typeUrl: "/juno.feepay.v1.FeePayContract",
  encode(message: FeePayContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.balance !== BigInt(0)) {
      writer.uint32(16).uint64(message.balance);
    }
    if (message.walletLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.walletLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeePayContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePayContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.balance = reader.uint64();
          break;
        case 3:
          message.walletLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeePayContract>): FeePayContract {
    const message = createBaseFeePayContract();
    message.contractAddress = object.contractAddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? BigInt(object.balance.toString()) : BigInt(0);
    message.walletLimit = object.walletLimit !== undefined && object.walletLimit !== null ? BigInt(object.walletLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeePayContractAmino): FeePayContract {
    const message = createBaseFeePayContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = BigInt(object.balance);
    }
    if (object.wallet_limit !== undefined && object.wallet_limit !== null) {
      message.walletLimit = BigInt(object.wallet_limit);
    }
    return message;
  },
  toAmino(message: FeePayContract): FeePayContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.balance = message.balance ? message.balance.toString() : undefined;
    obj.wallet_limit = message.walletLimit ? message.walletLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeePayContractAminoMsg): FeePayContract {
    return FeePayContract.fromAmino(object.value);
  },
  fromProtoMsg(message: FeePayContractProtoMsg): FeePayContract {
    return FeePayContract.decode(message.value);
  },
  toProto(message: FeePayContract): Uint8Array {
    return FeePayContract.encode(message).finish();
  },
  toProtoMsg(message: FeePayContract): FeePayContractProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.FeePayContract",
      value: FeePayContract.encode(message).finish()
    };
  }
};
function createBaseFeePayWalletUsage(): FeePayWalletUsage {
  return {
    contractAddress: "",
    walletAddress: "",
    uses: BigInt(0)
  };
}
export const FeePayWalletUsage = {
  typeUrl: "/juno.feepay.v1.FeePayWalletUsage",
  encode(message: FeePayWalletUsage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    if (message.uses !== BigInt(0)) {
      writer.uint32(24).uint64(message.uses);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeePayWalletUsage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePayWalletUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        case 3:
          message.uses = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeePayWalletUsage>): FeePayWalletUsage {
    const message = createBaseFeePayWalletUsage();
    message.contractAddress = object.contractAddress ?? "";
    message.walletAddress = object.walletAddress ?? "";
    message.uses = object.uses !== undefined && object.uses !== null ? BigInt(object.uses.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeePayWalletUsageAmino): FeePayWalletUsage {
    const message = createBaseFeePayWalletUsage();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wallet_address !== undefined && object.wallet_address !== null) {
      message.walletAddress = object.wallet_address;
    }
    if (object.uses !== undefined && object.uses !== null) {
      message.uses = BigInt(object.uses);
    }
    return message;
  },
  toAmino(message: FeePayWalletUsage): FeePayWalletUsageAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.wallet_address = message.walletAddress;
    obj.uses = message.uses ? message.uses.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeePayWalletUsageAminoMsg): FeePayWalletUsage {
    return FeePayWalletUsage.fromAmino(object.value);
  },
  fromProtoMsg(message: FeePayWalletUsageProtoMsg): FeePayWalletUsage {
    return FeePayWalletUsage.decode(message.value);
  },
  toProto(message: FeePayWalletUsage): Uint8Array {
    return FeePayWalletUsage.encode(message).finish();
  },
  toProtoMsg(message: FeePayWalletUsage): FeePayWalletUsageProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.FeePayWalletUsage",
      value: FeePayWalletUsage.encode(message).finish()
    };
  }
};