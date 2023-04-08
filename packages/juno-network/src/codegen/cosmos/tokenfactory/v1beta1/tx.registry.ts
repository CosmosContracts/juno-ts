import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/cosmos.tokenfactory.v1beta1.MsgMint", MsgMint], ["/cosmos.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/cosmos.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/cosmos.tokenfactory.v1beta1.MsgForceTransfer", MsgForceTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgForceTransfer",
        value: MsgForceTransfer.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgCreateDenom",
        value
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgMint",
        value
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgBurn",
        value
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgChangeAdmin",
        value
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgForceTransfer",
        value
      };
    }

  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/cosmos.tokenfactory.v1beta1.MsgForceTransfer",
        value: MsgForceTransfer.fromPartial(value)
      };
    }

  }
};