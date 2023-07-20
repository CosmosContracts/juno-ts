import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export interface AminoMsgRegisterPayee extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterPayee";
    value: {
        port_id: string;
        channel_id: string;
        relayer: string;
        payee: string;
    };
}
export interface AminoMsgRegisterCounterpartyPayee extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
    value: {
        port_id: string;
        channel_id: string;
        relayer: string;
        counterparty_payee: string;
    };
}
export interface AminoMsgPayPacketFee extends AminoMsg {
    type: "cosmos-sdk/MsgPayPacketFee";
    value: {
        fee: {
            recv_fee: {
                denom: string;
                amount: string;
            }[];
            ack_fee: {
                denom: string;
                amount: string;
            }[];
            timeout_fee: {
                denom: string;
                amount: string;
            }[];
        };
        source_port_id: string;
        source_channel_id: string;
        signer: string;
        relayers: string[];
    };
}
export interface AminoMsgPayPacketFeeAsync extends AminoMsg {
    type: "cosmos-sdk/MsgPayPacketFeeAsync";
    value: {
        packet_id: {
            port_id: string;
            channel_id: string;
            sequence: string;
        };
        packet_fee: {
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
            refund_address: string;
            relayers: string[];
        };
    };
}
export declare const AminoConverter: {
    "/ibc.applications.fee.v1.MsgRegisterPayee": {
        aminoType: string;
        toAmino: ({ portId, channelId, relayer, payee }: MsgRegisterPayee) => AminoMsgRegisterPayee["value"];
        fromAmino: ({ port_id, channel_id, relayer, payee }: AminoMsgRegisterPayee["value"]) => MsgRegisterPayee;
    };
    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
        aminoType: string;
        toAmino: ({ portId, channelId, relayer, counterpartyPayee }: MsgRegisterCounterpartyPayee) => AminoMsgRegisterCounterpartyPayee["value"];
        fromAmino: ({ port_id, channel_id, relayer, counterparty_payee }: AminoMsgRegisterCounterpartyPayee["value"]) => MsgRegisterCounterpartyPayee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFee": {
        aminoType: string;
        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: MsgPayPacketFee) => AminoMsgPayPacketFee["value"];
        fromAmino: ({ fee, source_port_id, source_channel_id, signer, relayers }: AminoMsgPayPacketFee["value"]) => MsgPayPacketFee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
        aminoType: string;
        toAmino: ({ packetId, packetFee }: MsgPayPacketFeeAsync) => AminoMsgPayPacketFeeAsync["value"];
        fromAmino: ({ packet_id, packet_fee }: AminoMsgPayPacketFeeAsync["value"]) => MsgPayPacketFeeAsync;
    };
};
