import { MsgRegisterFeePayContract, MsgUnregisterFeePayContract, MsgFundFeePayContract, MsgUpdateFeePayContractWalletLimit, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/juno.feepay.v1.MsgRegisterFeePayContract": {
    aminoType: "/juno.feepay.v1.MsgRegisterFeePayContract",
    toAmino: MsgRegisterFeePayContract.toAmino,
    fromAmino: MsgRegisterFeePayContract.fromAmino
  },
  "/juno.feepay.v1.MsgUnregisterFeePayContract": {
    aminoType: "/juno.feepay.v1.MsgUnregisterFeePayContract",
    toAmino: MsgUnregisterFeePayContract.toAmino,
    fromAmino: MsgUnregisterFeePayContract.fromAmino
  },
  "/juno.feepay.v1.MsgFundFeePayContract": {
    aminoType: "/juno.feepay.v1.MsgFundFeePayContract",
    toAmino: MsgFundFeePayContract.toAmino,
    fromAmino: MsgFundFeePayContract.fromAmino
  },
  "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit": {
    aminoType: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
    toAmino: MsgUpdateFeePayContractWalletLimit.toAmino,
    fromAmino: MsgUpdateFeePayContractWalletLimit.fromAmino
  },
  "/juno.feepay.v1.MsgUpdateParams": {
    aminoType: "/juno.feepay.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};