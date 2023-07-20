import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainAccount, MsgSendTx } from "./tx";
export interface AminoMsgRegisterInterchainAccount extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccount";
    value: {
        owner: string;
        connection_id: string;
        version: string;
    };
}
export interface AminoMsgSendTx extends AminoMsg {
    type: "cosmos-sdk/MsgSendTx";
    value: {
        owner: string;
        connection_id: string;
        packet_data: {
            type: number;
            data: Uint8Array;
            memo: string;
        };
        relative_timeout: string;
    };
}
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: MsgRegisterInterchainAccount) => AminoMsgRegisterInterchainAccount["value"];
        fromAmino: ({ owner, connection_id, version }: AminoMsgRegisterInterchainAccount["value"]) => MsgRegisterInterchainAccount;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, packetData, relativeTimeout }: MsgSendTx) => AminoMsgSendTx["value"];
        fromAmino: ({ owner, connection_id, packet_data, relative_timeout }: AminoMsgSendTx["value"]) => MsgSendTx;
    };
};
