import { MsgUpdateParams, MsgRegisterStaking, MsgUnregisterStaking, MsgRegisterGovernance, MsgUnregisterGovernance } from "./tx";
export const AminoConverter = {
  "/juno.cwhooks.v1.MsgUpdateParams": {
    aminoType: "/juno.cwhooks.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/juno.cwhooks.v1.MsgRegisterStaking": {
    aminoType: "/juno.cwhooks.v1.MsgRegisterStaking",
    toAmino: MsgRegisterStaking.toAmino,
    fromAmino: MsgRegisterStaking.fromAmino
  },
  "/juno.cwhooks.v1.MsgUnregisterStaking": {
    aminoType: "/juno.cwhooks.v1.MsgUnregisterStaking",
    toAmino: MsgUnregisterStaking.toAmino,
    fromAmino: MsgUnregisterStaking.fromAmino
  },
  "/juno.cwhooks.v1.MsgRegisterGovernance": {
    aminoType: "/juno.cwhooks.v1.MsgRegisterGovernance",
    toAmino: MsgRegisterGovernance.toAmino,
    fromAmino: MsgRegisterGovernance.fromAmino
  },
  "/juno.cwhooks.v1.MsgUnregisterGovernance": {
    aminoType: "/juno.cwhooks.v1.MsgUnregisterGovernance",
    toAmino: MsgUnregisterGovernance.toAmino,
    fromAmino: MsgUnregisterGovernance.fromAmino
  }
};