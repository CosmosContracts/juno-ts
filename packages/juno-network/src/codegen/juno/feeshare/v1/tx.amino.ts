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
export const AminoConverter = {
  "/juno.feeshare.v1.MsgRegisterFeeShare": {
    aminoType: "/juno.feeshare.v1.MsgRegisterFeeShare",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress
    }: MsgRegisterFeeShare): AminoMsgRegisterFeeShare["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address
    }: AminoMsgRegisterFeeShare["value"]): MsgRegisterFeeShare => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address
      };
    }
  },
  "/juno.feeshare.v1.MsgUpdateFeeShare": {
    aminoType: "/juno.feeshare.v1.MsgUpdateFeeShare",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress
    }: MsgUpdateFeeShare): AminoMsgUpdateFeeShare["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address
    }: AminoMsgUpdateFeeShare["value"]): MsgUpdateFeeShare => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address
      };
    }
  },
  "/juno.feeshare.v1.MsgCancelFeeShare": {
    aminoType: "/juno.feeshare.v1.MsgCancelFeeShare",
    toAmino: ({
      contractAddress,
      deployerAddress
    }: MsgCancelFeeShare): AminoMsgCancelFeeShare["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address
    }: AminoMsgCancelFeeShare["value"]): MsgCancelFeeShare => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address
      };
    }
  }
};