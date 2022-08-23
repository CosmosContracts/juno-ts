export const createLCDClient = async ({
  restEndpoint
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  ibc: {
    applications: {
      transfer: {
        v1: new (await import("./applications/transfer/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    },
    core: {
      channel: {
        v1: new (await import("./core/channel/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      },
      client: {
        v1: new (await import("./core/client/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    }
  }
});