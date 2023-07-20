import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params?: Params;
    /**
     * total_escrowed contains the total amount of tokens escrowed
     * by the transfer module
     */
    totalEscrowed: Coin[];
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateSDKType {
    port_id: string;
    denom_traces: DenomTraceSDKType[];
    params?: ParamsSDKType;
    /**
     * total_escrowed contains the total amount of tokens escrowed
     * by the transfer module
     */
    total_escrowed: CoinSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
