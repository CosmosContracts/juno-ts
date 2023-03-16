import { FeeShare, FeeShareSDKType } from "./feeshare";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the feeshare module parameters */
    params?: Params;
    /** FeeShare is a slice of active registered contracts for fee distribution */
    feeShare: FeeShare[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    /** params are the feeshare module parameters */
    params?: ParamsSDKType;
    /** FeeShare is a slice of active registered contracts for fee distribution */
    fee_share: FeeShareSDKType[];
}
/** Params defines the feeshare module params */
export interface Params {
    /** enable_feeshare defines a parameter to enable the feeshare module */
    enableFeeShare: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developerShares: string;
    /**
     * allowed_denoms defines the list of denoms that are allowed to be paid to
     * the contract withdraw addresses. If said denom is not in the list, the fees
     * will ONLY be sent to the community pool.
     * If this list is empty, all denoms are allowed.
     */
    allowedDenoms: string[];
}
/** Params defines the feeshare module params */
export interface ParamsSDKType {
    /** enable_feeshare defines a parameter to enable the feeshare module */
    enable_fee_share: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developer_shares: string;
    /**
     * allowed_denoms defines the list of denoms that are allowed to be paid to
     * the contract withdraw addresses. If said denom is not in the list, the fees
     * will ONLY be sent to the community pool.
     * If this list is empty, all denoms are allowed.
     */
    allowed_denoms: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
