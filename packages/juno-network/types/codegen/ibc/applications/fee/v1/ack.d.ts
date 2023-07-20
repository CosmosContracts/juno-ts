import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
    /** the underlying app acknowledgement bytes */
    appAcknowledgement: Uint8Array;
    /** the relayer address which submits the recv packet message */
    forwardRelayerAddress: string;
    /** success flag of the base application callback */
    underlyingAppSuccess: boolean;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgementSDKType {
    /** the underlying app acknowledgement bytes */
    app_acknowledgement: Uint8Array;
    /** the relayer address which submits the recv packet message */
    forward_relayer_address: string;
    /** success flag of the base application callback */
    underlying_app_success: boolean;
}
export declare const IncentivizedAcknowledgement: {
    encode(message: IncentivizedAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement;
    fromPartial(object: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement;
};
