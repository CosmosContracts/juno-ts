import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFeeSharesRequest, QueryFeeSharesResponse, QueryFeeShareRequest, QueryFeeShareResponse, QueryParamsRequest, QueryParamsResponse, QueryDeployerFeeSharesRequest, QueryDeployerFeeSharesResponse, QueryWithdrawerFeeSharesRequest, QueryWithdrawerFeeSharesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** FeeShares retrieves all registered FeeShares */
    feeShares(request?: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse>;
    /** FeeShare retrieves a registered FeeShare for a given contract address */
    feeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse>;
    /** Params retrieves the FeeShare module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * DeployerFeeShares retrieves all FeeShares that a given deployer has
     * registered
     */
    deployerFeeShares(request: QueryDeployerFeeSharesRequest): Promise<QueryDeployerFeeSharesResponse>;
    /**
     * WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
     * address
     */
    withdrawerFeeShares(request: QueryWithdrawerFeeSharesRequest): Promise<QueryWithdrawerFeeSharesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feeShares(request?: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse>;
    feeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployerFeeShares(request: QueryDeployerFeeSharesRequest): Promise<QueryDeployerFeeSharesResponse>;
    withdrawerFeeShares(request: QueryWithdrawerFeeSharesRequest): Promise<QueryWithdrawerFeeSharesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    feeShares(request?: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse>;
    feeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployerFeeShares(request: QueryDeployerFeeSharesRequest): Promise<QueryDeployerFeeSharesResponse>;
    withdrawerFeeShares(request: QueryWithdrawerFeeSharesRequest): Promise<QueryWithdrawerFeeSharesResponse>;
};
