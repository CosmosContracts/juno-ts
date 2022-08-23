import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: import("./applications/transfer/v1/query.rpc.query").QueryClientImpl;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/query.rpc.query").QueryClientImpl;
            };
            client: {
                v1: import("./core/client/v1/query.rpc.query").QueryClientImpl;
            };
        };
    };
}>;
