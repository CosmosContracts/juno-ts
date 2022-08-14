export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: any;
}) => Promise<{
    cosmos: {
        bank: {
            v1beta1: import("./bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("./gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("./gov/v1beta1/query.lcd").LCDQueryClient;
        };
        group: {
            v1: import("./group/v1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
