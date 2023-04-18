import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryMinimumGasPricesRequest, QueryMinimumGasPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    minimumGasPrices(request?: QueryMinimumGasPricesRequest): Promise<QueryMinimumGasPricesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    minimumGasPrices(request?: QueryMinimumGasPricesRequest): Promise<QueryMinimumGasPricesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    minimumGasPrices(request?: QueryMinimumGasPricesRequest): Promise<QueryMinimumGasPricesResponse>;
};
