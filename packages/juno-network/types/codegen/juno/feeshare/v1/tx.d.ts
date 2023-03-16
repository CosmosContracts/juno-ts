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
export interface MsgRegisterFeeShareResponse {
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponseSDKType {
}
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
export interface MsgUpdateFeeShareResponse {
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponseSDKType {
}
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
export interface MsgCancelFeeShareResponse {
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponseSDKType {
}
export declare const MsgRegisterFeeShare: {
    encode(message: MsgRegisterFeeShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShare;
    fromPartial(object: DeepPartial<MsgRegisterFeeShare>): MsgRegisterFeeShare;
};
export declare const MsgRegisterFeeShareResponse: {
    encode(_: MsgRegisterFeeShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShareResponse;
    fromPartial(_: DeepPartial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse;
};
export declare const MsgUpdateFeeShare: {
    encode(message: MsgUpdateFeeShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShare;
    fromPartial(object: DeepPartial<MsgUpdateFeeShare>): MsgUpdateFeeShare;
};
export declare const MsgUpdateFeeShareResponse: {
    encode(_: MsgUpdateFeeShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShareResponse;
    fromPartial(_: DeepPartial<MsgUpdateFeeShareResponse>): MsgUpdateFeeShareResponse;
};
export declare const MsgCancelFeeShare: {
    encode(message: MsgCancelFeeShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShare;
    fromPartial(object: DeepPartial<MsgCancelFeeShare>): MsgCancelFeeShare;
};
export declare const MsgCancelFeeShareResponse: {
    encode(_: MsgCancelFeeShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShareResponse;
    fromPartial(_: DeepPartial<MsgCancelFeeShareResponse>): MsgCancelFeeShareResponse;
};
