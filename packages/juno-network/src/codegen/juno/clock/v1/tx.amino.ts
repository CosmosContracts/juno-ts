import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/juno.clock.v1.MsgUpdateParams": {
    aminoType: "/juno.clock.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};