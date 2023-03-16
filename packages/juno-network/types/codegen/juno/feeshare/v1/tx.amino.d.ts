import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterFeeShare, MsgUpdateFeeShare, MsgCancelFeeShare } from "./tx";
export interface MsgRegisterFeeShareAminoType extends AminoMsg {
    type: "/juno.feeshare.v1.MsgRegisterFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface MsgUpdateFeeShareAminoType extends AminoMsg {
    type: "/juno.feeshare.v1.MsgUpdateFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface MsgCancelFeeShareAminoType extends AminoMsg {
    type: "/juno.feeshare.v1.MsgCancelFeeShare";
    value: {
        contract_address: string;
        deployer_address: string;
    };
}
export declare const AminoConverter: {
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgRegisterFeeShare) => MsgRegisterFeeShareAminoType["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: MsgRegisterFeeShareAminoType["value"]) => MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgUpdateFeeShare) => MsgUpdateFeeShareAminoType["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: MsgUpdateFeeShareAminoType["value"]) => MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: MsgCancelFeeShare) => MsgCancelFeeShareAminoType["value"];
        fromAmino: ({ contract_address, deployer_address }: MsgCancelFeeShareAminoType["value"]) => MsgCancelFeeShare;
    };
};
