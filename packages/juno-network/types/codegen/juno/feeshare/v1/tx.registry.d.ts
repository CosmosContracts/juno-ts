import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterFeeShare, MsgUpdateFeeShare, MsgCancelFeeShare } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: MsgRegisterFeeShare;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: MsgUpdateFeeShare;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: MsgCancelFeeShare;
        };
    };
    fromPartial: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: MsgRegisterFeeShare;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: MsgUpdateFeeShare;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: MsgCancelFeeShare;
        };
    };
};
