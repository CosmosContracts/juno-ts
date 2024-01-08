import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContract {
  /** contract_address defines the address of the fee pay contract */
  contractAddress: string;
}
export interface QueryFeePayContractProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContract";
  value: Uint8Array;
}
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContractAmino {
  /** contract_address defines the address of the fee pay contract */
  contract_address?: string;
}
export interface QueryFeePayContractAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContract";
  value: QueryFeePayContractAmino;
}
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContractSDKType {
  contract_address: string;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponse {
  /** contract defines the fee pay contract */
  feePayContract?: FeePayContract;
}
export interface QueryFeePayContractResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse";
  value: Uint8Array;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponseAmino {
  /** contract defines the fee pay contract */
  fee_pay_contract?: FeePayContractAmino;
}
export interface QueryFeePayContractResponseAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContractResponse";
  value: QueryFeePayContractResponseAmino;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponseSDKType {
  fee_pay_contract?: FeePayContractSDKType;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContracts {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryFeePayContractsProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContracts";
  value: Uint8Array;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFeePayContractsAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContracts";
  value: QueryFeePayContractsAmino;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsSDKType {
  pagination?: PageRequestSDKType;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponse {
  /** A slice of all the stored fee pay contracts */
  feePayContracts: FeePayContract[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFeePayContractsResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse";
  value: Uint8Array;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponseAmino {
  /** A slice of all the stored fee pay contracts */
  fee_pay_contracts?: FeePayContractAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFeePayContractsResponseAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContractsResponse";
  value: QueryFeePayContractsResponseAmino;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponseSDKType {
  fee_pay_contracts: FeePayContractSDKType[];
  pagination?: PageResponseSDKType;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUses {
  /** The contract address. */
  contractAddress: string;
  /** The wallet address. */
  walletAddress: string;
}
export interface QueryFeePayContractUsesProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractUses";
  value: Uint8Array;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesAmino {
  /** The contract address. */
  contract_address?: string;
  /** The wallet address. */
  wallet_address?: string;
}
export interface QueryFeePayContractUsesAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContractUses";
  value: QueryFeePayContractUsesAmino;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesSDKType {
  contract_address: string;
  wallet_address: string;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponse {
  /** The number of uses on the fee pay contract by wallet */
  uses: bigint;
}
export interface QueryFeePayContractUsesResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse";
  value: Uint8Array;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponseAmino {
  /** The number of uses on the fee pay contract by wallet */
  uses?: string;
}
export interface QueryFeePayContractUsesResponseAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayContractUsesResponse";
  value: QueryFeePayContractUsesResponseAmino;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponseSDKType {
  uses: bigint;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligible {
  /** The contract address. */
  contractAddress: string;
  /** The wallet address. */
  walletAddress: string;
}
export interface QueryFeePayWalletIsEligibleProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligible";
  value: Uint8Array;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleAmino {
  /** The contract address. */
  contract_address?: string;
  /** The wallet address. */
  wallet_address?: string;
}
export interface QueryFeePayWalletIsEligibleAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayWalletIsEligible";
  value: QueryFeePayWalletIsEligibleAmino;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleSDKType {
  contract_address: string;
  wallet_address: string;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponse {
  /** The eligibility of the wallet for fee pay contract interactions */
  eligible: boolean;
}
export interface QueryFeePayWalletIsEligibleResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse";
  value: Uint8Array;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponseAmino {
  /** The eligibility of the wallet for fee pay contract interactions */
  eligible?: boolean;
}
export interface QueryFeePayWalletIsEligibleResponseAminoMsg {
  type: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse";
  value: QueryFeePayWalletIsEligibleResponseAmino;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponseSDKType {
  eligible: boolean;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/juno.feepay.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned Feepay parameter */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params is the returned Feepay parameter */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/juno.feepay.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryFeePayContract(): QueryFeePayContract {
  return {
    contractAddress: ""
  };
}
export const QueryFeePayContract = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContract",
  encode(message: QueryFeePayContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContract>): QueryFeePayContract {
    const message = createBaseQueryFeePayContract();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFeePayContractAmino): QueryFeePayContract {
    const message = createBaseQueryFeePayContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryFeePayContract): QueryFeePayContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractAminoMsg): QueryFeePayContract {
    return QueryFeePayContract.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractProtoMsg): QueryFeePayContract {
    return QueryFeePayContract.decode(message.value);
  },
  toProto(message: QueryFeePayContract): Uint8Array {
    return QueryFeePayContract.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContract): QueryFeePayContractProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContract",
      value: QueryFeePayContract.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayContractResponse(): QueryFeePayContractResponse {
  return {
    feePayContract: undefined
  };
}
export const QueryFeePayContractResponse = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse",
  encode(message: QueryFeePayContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feePayContract !== undefined) {
      FeePayContract.encode(message.feePayContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feePayContract = FeePayContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContractResponse>): QueryFeePayContractResponse {
    const message = createBaseQueryFeePayContractResponse();
    message.feePayContract = object.feePayContract !== undefined && object.feePayContract !== null ? FeePayContract.fromPartial(object.feePayContract) : undefined;
    return message;
  },
  fromAmino(object: QueryFeePayContractResponseAmino): QueryFeePayContractResponse {
    const message = createBaseQueryFeePayContractResponse();
    if (object.fee_pay_contract !== undefined && object.fee_pay_contract !== null) {
      message.feePayContract = FeePayContract.fromAmino(object.fee_pay_contract);
    }
    return message;
  },
  toAmino(message: QueryFeePayContractResponse): QueryFeePayContractResponseAmino {
    const obj: any = {};
    obj.fee_pay_contract = message.feePayContract ? FeePayContract.toAmino(message.feePayContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractResponseAminoMsg): QueryFeePayContractResponse {
    return QueryFeePayContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractResponseProtoMsg): QueryFeePayContractResponse {
    return QueryFeePayContractResponse.decode(message.value);
  },
  toProto(message: QueryFeePayContractResponse): Uint8Array {
    return QueryFeePayContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContractResponse): QueryFeePayContractResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse",
      value: QueryFeePayContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayContracts(): QueryFeePayContracts {
  return {
    pagination: undefined
  };
}
export const QueryFeePayContracts = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContracts",
  encode(message: QueryFeePayContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContracts>): QueryFeePayContracts {
    const message = createBaseQueryFeePayContracts();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFeePayContractsAmino): QueryFeePayContracts {
    const message = createBaseQueryFeePayContracts();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeePayContracts): QueryFeePayContractsAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractsAminoMsg): QueryFeePayContracts {
    return QueryFeePayContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractsProtoMsg): QueryFeePayContracts {
    return QueryFeePayContracts.decode(message.value);
  },
  toProto(message: QueryFeePayContracts): Uint8Array {
    return QueryFeePayContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContracts): QueryFeePayContractsProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContracts",
      value: QueryFeePayContracts.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayContractsResponse(): QueryFeePayContractsResponse {
  return {
    feePayContracts: [],
    pagination: undefined
  };
}
export const QueryFeePayContractsResponse = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse",
  encode(message: QueryFeePayContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feePayContracts) {
      FeePayContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feePayContracts.push(FeePayContract.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContractsResponse>): QueryFeePayContractsResponse {
    const message = createBaseQueryFeePayContractsResponse();
    message.feePayContracts = object.feePayContracts?.map(e => FeePayContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFeePayContractsResponseAmino): QueryFeePayContractsResponse {
    const message = createBaseQueryFeePayContractsResponse();
    message.feePayContracts = object.fee_pay_contracts?.map(e => FeePayContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseAmino {
    const obj: any = {};
    if (message.feePayContracts) {
      obj.fee_pay_contracts = message.feePayContracts.map(e => e ? FeePayContract.toAmino(e) : undefined);
    } else {
      obj.fee_pay_contracts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractsResponseAminoMsg): QueryFeePayContractsResponse {
    return QueryFeePayContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractsResponseProtoMsg): QueryFeePayContractsResponse {
    return QueryFeePayContractsResponse.decode(message.value);
  },
  toProto(message: QueryFeePayContractsResponse): Uint8Array {
    return QueryFeePayContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse",
      value: QueryFeePayContractsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayContractUses(): QueryFeePayContractUses {
  return {
    contractAddress: "",
    walletAddress: ""
  };
}
export const QueryFeePayContractUses = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractUses",
  encode(message: QueryFeePayContractUses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractUses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContractUses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContractUses>): QueryFeePayContractUses {
    const message = createBaseQueryFeePayContractUses();
    message.contractAddress = object.contractAddress ?? "";
    message.walletAddress = object.walletAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFeePayContractUsesAmino): QueryFeePayContractUses {
    const message = createBaseQueryFeePayContractUses();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wallet_address !== undefined && object.wallet_address !== null) {
      message.walletAddress = object.wallet_address;
    }
    return message;
  },
  toAmino(message: QueryFeePayContractUses): QueryFeePayContractUsesAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.wallet_address = message.walletAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractUsesAminoMsg): QueryFeePayContractUses {
    return QueryFeePayContractUses.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractUsesProtoMsg): QueryFeePayContractUses {
    return QueryFeePayContractUses.decode(message.value);
  },
  toProto(message: QueryFeePayContractUses): Uint8Array {
    return QueryFeePayContractUses.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContractUses): QueryFeePayContractUsesProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContractUses",
      value: QueryFeePayContractUses.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayContractUsesResponse(): QueryFeePayContractUsesResponse {
  return {
    uses: BigInt(0)
  };
}
export const QueryFeePayContractUsesResponse = {
  typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse",
  encode(message: QueryFeePayContractUsesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uses !== BigInt(0)) {
      writer.uint32(8).uint64(message.uses);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractUsesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayContractUsesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uses = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayContractUsesResponse>): QueryFeePayContractUsesResponse {
    const message = createBaseQueryFeePayContractUsesResponse();
    message.uses = object.uses !== undefined && object.uses !== null ? BigInt(object.uses.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryFeePayContractUsesResponseAmino): QueryFeePayContractUsesResponse {
    const message = createBaseQueryFeePayContractUsesResponse();
    if (object.uses !== undefined && object.uses !== null) {
      message.uses = BigInt(object.uses);
    }
    return message;
  },
  toAmino(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseAmino {
    const obj: any = {};
    obj.uses = message.uses ? message.uses.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayContractUsesResponseAminoMsg): QueryFeePayContractUsesResponse {
    return QueryFeePayContractUsesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayContractUsesResponseProtoMsg): QueryFeePayContractUsesResponse {
    return QueryFeePayContractUsesResponse.decode(message.value);
  },
  toProto(message: QueryFeePayContractUsesResponse): Uint8Array {
    return QueryFeePayContractUsesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse",
      value: QueryFeePayContractUsesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayWalletIsEligible(): QueryFeePayWalletIsEligible {
  return {
    contractAddress: "",
    walletAddress: ""
  };
}
export const QueryFeePayWalletIsEligible = {
  typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligible",
  encode(message: QueryFeePayWalletIsEligible, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayWalletIsEligible {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayWalletIsEligible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayWalletIsEligible>): QueryFeePayWalletIsEligible {
    const message = createBaseQueryFeePayWalletIsEligible();
    message.contractAddress = object.contractAddress ?? "";
    message.walletAddress = object.walletAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFeePayWalletIsEligibleAmino): QueryFeePayWalletIsEligible {
    const message = createBaseQueryFeePayWalletIsEligible();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wallet_address !== undefined && object.wallet_address !== null) {
      message.walletAddress = object.wallet_address;
    }
    return message;
  },
  toAmino(message: QueryFeePayWalletIsEligible): QueryFeePayWalletIsEligibleAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.wallet_address = message.walletAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayWalletIsEligibleAminoMsg): QueryFeePayWalletIsEligible {
    return QueryFeePayWalletIsEligible.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayWalletIsEligibleProtoMsg): QueryFeePayWalletIsEligible {
    return QueryFeePayWalletIsEligible.decode(message.value);
  },
  toProto(message: QueryFeePayWalletIsEligible): Uint8Array {
    return QueryFeePayWalletIsEligible.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayWalletIsEligible): QueryFeePayWalletIsEligibleProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligible",
      value: QueryFeePayWalletIsEligible.encode(message).finish()
    };
  }
};
function createBaseQueryFeePayWalletIsEligibleResponse(): QueryFeePayWalletIsEligibleResponse {
  return {
    eligible: false
  };
}
export const QueryFeePayWalletIsEligibleResponse = {
  typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse",
  encode(message: QueryFeePayWalletIsEligibleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eligible === true) {
      writer.uint32(8).bool(message.eligible);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayWalletIsEligibleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeePayWalletIsEligibleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eligible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeePayWalletIsEligibleResponse>): QueryFeePayWalletIsEligibleResponse {
    const message = createBaseQueryFeePayWalletIsEligibleResponse();
    message.eligible = object.eligible ?? false;
    return message;
  },
  fromAmino(object: QueryFeePayWalletIsEligibleResponseAmino): QueryFeePayWalletIsEligibleResponse {
    const message = createBaseQueryFeePayWalletIsEligibleResponse();
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = object.eligible;
    }
    return message;
  },
  toAmino(message: QueryFeePayWalletIsEligibleResponse): QueryFeePayWalletIsEligibleResponseAmino {
    const obj: any = {};
    obj.eligible = message.eligible;
    return obj;
  },
  fromAminoMsg(object: QueryFeePayWalletIsEligibleResponseAminoMsg): QueryFeePayWalletIsEligibleResponse {
    return QueryFeePayWalletIsEligibleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeePayWalletIsEligibleResponseProtoMsg): QueryFeePayWalletIsEligibleResponse {
    return QueryFeePayWalletIsEligibleResponse.decode(message.value);
  },
  toProto(message: QueryFeePayWalletIsEligibleResponse): Uint8Array {
    return QueryFeePayWalletIsEligibleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeePayWalletIsEligibleResponse): QueryFeePayWalletIsEligibleResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse",
      value: QueryFeePayWalletIsEligibleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/juno.feepay.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/juno.feepay.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};