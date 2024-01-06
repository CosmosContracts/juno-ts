import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterStaking, MsgUnregisterStaking, MsgRegisterGovernance, MsgUnregisterGovernance } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/juno.cwhooks.v1.MsgUpdateParams", MsgUpdateParams], ["/juno.cwhooks.v1.MsgRegisterStaking", MsgRegisterStaking], ["/juno.cwhooks.v1.MsgUnregisterStaking", MsgUnregisterStaking], ["/juno.cwhooks.v1.MsgRegisterGovernance", MsgRegisterGovernance], ["/juno.cwhooks.v1.MsgUnregisterGovernance", MsgUnregisterGovernance]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerStaking(value: MsgRegisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking",
        value: MsgRegisterStaking.encode(value).finish()
      };
    },
    unregisterStaking(value: MsgUnregisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking",
        value: MsgUnregisterStaking.encode(value).finish()
      };
    },
    registerGovernance(value: MsgRegisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance",
        value: MsgRegisterGovernance.encode(value).finish()
      };
    },
    unregisterGovernance(value: MsgUnregisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance",
        value: MsgUnregisterGovernance.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUpdateParams",
        value
      };
    },
    registerStaking(value: MsgRegisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking",
        value
      };
    },
    unregisterStaking(value: MsgUnregisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking",
        value
      };
    },
    registerGovernance(value: MsgRegisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance",
        value
      };
    },
    unregisterGovernance(value: MsgUnregisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerStaking(value: MsgRegisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking",
        value: MsgRegisterStaking.fromPartial(value)
      };
    },
    unregisterStaking(value: MsgUnregisterStaking) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking",
        value: MsgUnregisterStaking.fromPartial(value)
      };
    },
    registerGovernance(value: MsgRegisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance",
        value: MsgRegisterGovernance.fromPartial(value)
      };
    },
    unregisterGovernance(value: MsgUnregisterGovernance) {
      return {
        typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance",
        value: MsgUnregisterGovernance.fromPartial(value)
      };
    }
  }
};