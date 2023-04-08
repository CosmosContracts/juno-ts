import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    denomCreationFee: Coin[];
    /**
     * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
     * to the base cost.
     * https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume: Long;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
    /**
     * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
     * to the base cost.
     * https://github.com/CosmWasm/token-factory/issues/11
     */
    denom_creation_gas_consume: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
