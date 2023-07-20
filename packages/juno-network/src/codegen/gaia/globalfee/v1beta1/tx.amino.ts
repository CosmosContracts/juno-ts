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
export const AminoConverter = {
  "/gaia.globalfee.v1beta1.MsgUpdateParams": {
    aminoType: "/gaia.globalfee.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          minimum_gas_prices: params.minimumGasPrices.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          minimumGasPrices: params.minimum_gas_prices.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }
      };
    }
  }
};