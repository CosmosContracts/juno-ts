import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterFeeShare, MsgUpdateFeeShare, MsgCancelFeeShare } from "./tx";
export interface AminoMsgRegisterFeeShare extends AminoMsg {
    type: "/juno.feeshare.v1.MsgRegisterFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface AminoMsgUpdateFeeShare extends AminoMsg {
    type: "/juno.feeshare.v1.MsgUpdateFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface AminoMsgCancelFeeShare extends AminoMsg {
    type: "/juno.feeshare.v1.MsgCancelFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
    };
}
export declare const AminoConverter: {
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgRegisterFeeShare) => AminoMsgRegisterFeeShare["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: AminoMsgRegisterFeeShare["value"]) => MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgUpdateFeeShare) => AminoMsgUpdateFeeShare["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: AminoMsgUpdateFeeShare["value"]) => MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: MsgCancelFeeShare) => AminoMsgCancelFeeShare["value"];
        fromAmino: ({ contract_address, deployer_address }: AminoMsgCancelFeeShare["value"]) => MsgCancelFeeShare;
    };
};
