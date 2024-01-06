import { MsgDistributeTokens, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/juno.drip.v1.MsgDistributeTokens": {
    aminoType: "/juno.drip.v1.MsgDistributeTokens",
    toAmino: MsgDistributeTokens.toAmino,
    fromAmino: MsgDistributeTokens.fromAmino
  },
  "/juno.drip.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/auth/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};