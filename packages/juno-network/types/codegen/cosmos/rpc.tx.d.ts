import { Rpc } from "@osmonauts/helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        bank: {
            v1beta1: import("./bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1: import("./gov/v1/tx.rpc.msg").MsgClientImpl;
            v1beta1: import("./gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        group: {
            v1: import("./group/v1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
