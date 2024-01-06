import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDistributeTokens, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/juno.drip.v1.MsgDistributeTokens", MsgDistributeTokens], ["/juno.drip.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    distributeTokens(value: MsgDistributeTokens) {
      return {
        typeUrl: "/juno.drip.v1.MsgDistributeTokens",
        value: MsgDistributeTokens.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.drip.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    distributeTokens(value: MsgDistributeTokens) {
      return {
        typeUrl: "/juno.drip.v1.MsgDistributeTokens",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.drip.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    distributeTokens(value: MsgDistributeTokens) {
      return {
        typeUrl: "/juno.drip.v1.MsgDistributeTokens",
        value: MsgDistributeTokens.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.drip.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};