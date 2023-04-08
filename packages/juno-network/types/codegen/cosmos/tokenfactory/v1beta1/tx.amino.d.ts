import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
    type: "cosmos-sdk/MsgCreateDenom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface AminoMsgMint extends AminoMsg {
    type: "cosmos-sdk/MsgMint";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        mintToAddress: string;
    };
}
export interface AminoMsgBurn extends AminoMsg {
    type: "cosmos-sdk/MsgBurn";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        burnFromAddress: string;
    };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
    type: "cosmos-sdk/MsgChangeAdmin";
    value: {
        sender: string;
        denom: string;
        new_admin: string;
    };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
    type: "cosmos-sdk/MsgSetDenomMetadata";
    value: {
        sender: string;
        metadata: {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            display: string;
            name: string;
            symbol: string;
            uri: string;
            uri_hash: string;
        };
    };
}
export interface AminoMsgForceTransfer extends AminoMsg {
    type: "cosmos-sdk/MsgForceTransfer";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        transferFromAddress: string;
        transferToAddress: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => AminoMsgCreateDenom["value"];
        fromAmino: ({ sender, subdenom }: AminoMsgCreateDenom["value"]) => MsgCreateDenom;
    };
    "/cosmos.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount, mintToAddress }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ sender, amount, mintToAddress }: AminoMsgMint["value"]) => MsgMint;
    };
    "/cosmos.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount, burnFromAddress }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ sender, amount, burnFromAddress }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/cosmos.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => AminoMsgChangeAdmin["value"];
        fromAmino: ({ sender, denom, new_admin }: AminoMsgChangeAdmin["value"]) => MsgChangeAdmin;
    };
    "/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: MsgSetDenomMetadata) => AminoMsgSetDenomMetadata["value"];
        fromAmino: ({ sender, metadata }: AminoMsgSetDenomMetadata["value"]) => MsgSetDenomMetadata;
    };
    "/cosmos.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: MsgForceTransfer) => AminoMsgForceTransfer["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: AminoMsgForceTransfer["value"]) => MsgForceTransfer;
    };
};
