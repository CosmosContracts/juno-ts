import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
    /** the latest block height */
    latestHeight?: Height;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
    /** the latest block height */
    latest_height?: HeightSDKType;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromPartial(object: DeepPartial<ClientState>): ClientState;
};
