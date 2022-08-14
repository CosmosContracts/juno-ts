import * as _135 from "./mint/genesis";
import * as _136 from "./mint/mint";
import * as _137 from "./mint/query";
import * as _195 from "./mint/query.lcd";
import * as _196 from "./mint/query.rpc.query";
export declare namespace juno {
    const mint: {
        QueryClientImpl: typeof _196.QueryClientImpl;
        LCDQueryClient: typeof _195.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _137.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsRequest;
            fromJSON(_: any): _137.QueryParamsRequest;
            toJSON(_: _137.QueryParamsRequest): unknown;
            fromPartial(_: {}): _137.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _137.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsResponse;
            fromJSON(object: any): _137.QueryParamsResponse;
            toJSON(message: _137.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    mintDenom?: string;
                    blocksPerYear?: any;
                };
            }): _137.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _137.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryInflationRequest;
            fromJSON(_: any): _137.QueryInflationRequest;
            toJSON(_: _137.QueryInflationRequest): unknown;
            fromPartial(_: {}): _137.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _137.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryInflationResponse;
            fromJSON(object: any): _137.QueryInflationResponse;
            toJSON(message: _137.QueryInflationResponse): unknown;
            fromPartial(object: {
                inflation?: Uint8Array;
            }): _137.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _137.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAnnualProvisionsRequest;
            fromJSON(_: any): _137.QueryAnnualProvisionsRequest;
            toJSON(_: _137.QueryAnnualProvisionsRequest): unknown;
            fromPartial(_: {}): _137.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _137.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAnnualProvisionsResponse;
            fromJSON(object: any): _137.QueryAnnualProvisionsResponse;
            toJSON(message: _137.QueryAnnualProvisionsResponse): unknown;
            fromPartial(object: {
                annualProvisions?: Uint8Array;
            }): _137.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _136.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Minter;
            fromJSON(object: any): _136.Minter;
            toJSON(message: _136.Minter): unknown;
            fromPartial(object: {
                inflation?: string;
                phase?: any;
                startPhaseBlock?: any;
                annualProvisions?: string;
            }): _136.Minter;
        };
        Params: {
            encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
            fromJSON(object: any): _136.Params;
            toJSON(message: _136.Params): unknown;
            fromPartial(object: {
                mintDenom?: string;
                blocksPerYear?: any;
            }): _136.Params;
        };
        GenesisState: {
            encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
            fromJSON(object: any): _135.GenesisState;
            toJSON(message: _135.GenesisState): unknown;
            fromPartial(object: {
                minter?: {
                    inflation?: string;
                    phase?: any;
                    startPhaseBlock?: any;
                    annualProvisions?: string;
                };
                params?: {
                    mintDenom?: string;
                    blocksPerYear?: any;
                };
            }): _135.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
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
            juno: {
                mint: _196.QueryClientImpl;
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: any;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            juno: {
                mint: _195.LCDQueryClient;
            };
        }>;
    };
}
