import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "cosmos-sdk/MsgCreateDenom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/cosmos.tokenfactory.v1beta1.MsgMint": {
    aminoType: "cosmos-sdk/MsgMint",
    toAmino: ({
      sender,
      amount,
      mintToAddress
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        mintToAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      mintToAddress
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        mintToAddress
      };
    }
  },
  "/cosmos.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "cosmos-sdk/MsgBurn",
    toAmino: ({
      sender,
      amount,
      burnFromAddress
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        burnFromAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      burnFromAddress
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        burnFromAddress
      };
    }
  },
  "/cosmos.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "cosmos-sdk/MsgChangeAdmin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): AminoMsgChangeAdmin["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      new_admin
    }: AminoMsgChangeAdmin["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "cosmos-sdk/MsgSetDenomMetadata",
    toAmino: ({
      sender,
      metadata
    }: MsgSetDenomMetadata): AminoMsgSetDenomMetadata["value"] => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(el0 => ({
            denom: el0.denom,
            exponent: el0.exponent,
            aliases: el0.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: ({
      sender,
      metadata
    }: AminoMsgSetDenomMetadata["value"]): MsgSetDenomMetadata => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(el1 => ({
            denom: el1.denom,
            exponent: el1.exponent,
            aliases: el1.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  },
  "/cosmos.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "cosmos-sdk/MsgForceTransfer",
    toAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: MsgForceTransfer): AminoMsgForceTransfer["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        transferFromAddress,
        transferToAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: AminoMsgForceTransfer["value"]): MsgForceTransfer => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        transferFromAddress,
        transferToAddress
      };
    }
  }
};