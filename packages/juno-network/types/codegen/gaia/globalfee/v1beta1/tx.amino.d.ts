import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "/gaia.globalfee.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            minimum_gas_prices: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/gaia.globalfee.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
