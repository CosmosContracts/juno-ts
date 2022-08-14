import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        bank: {
            v1beta1: import("./bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
            v1: import("./gov/v1/query.rpc.query").QueryClientImpl;
            v1beta1: import("./gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        group: {
            v1: import("./group/v1/query.rpc.query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
}>;
