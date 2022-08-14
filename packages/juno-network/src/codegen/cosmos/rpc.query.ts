import { Rpc } from "@osmonauts/helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    gov: {
      v1: new (await import("./gov/v1/query.rpc.query")).QueryClientImpl(rpc),
      v1beta1: new (await import("./gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    group: {
      v1: new (await import("./group/v1/query.rpc.query")).QueryClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});