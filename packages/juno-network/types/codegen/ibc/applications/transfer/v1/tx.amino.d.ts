import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../../../helpers";
import { MsgTransfer } from "./tx";
export interface AminoMsgTransfer extends AminoMsg {
    type: "cosmos-sdk/MsgTransfer";
    value: {
        source_port: string;
        source_channel: string;
        token: {
            denom: string;
            amount: string;
        };
        sender: string;
        receiver: string;
        timeout_height: AminoHeight;
        timeout_timestamp: string;
        memo: string;
    };
}
export declare const AminoConverter: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: MsgTransfer) => AminoMsgTransfer["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: AminoMsgTransfer["value"]) => MsgTransfer;
    };
};
