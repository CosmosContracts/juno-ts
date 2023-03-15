import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeSharesRequest, QueryFeeSharesResponseSDKType, QueryFeeShareRequest, QueryFeeShareResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployerFeeSharesRequest, QueryDeployerFeeSharesResponseSDKType, QueryWithdrawerFeeSharesRequest, QueryWithdrawerFeeSharesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    feeShares(params?: QueryFeeSharesRequest): Promise<QueryFeeSharesResponseSDKType>;
    feeShare(params: QueryFeeShareRequest): Promise<QueryFeeShareResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deployerFeeShares(params: QueryDeployerFeeSharesRequest): Promise<QueryDeployerFeeSharesResponseSDKType>;
    withdrawerFeeShares(params: QueryWithdrawerFeeSharesRequest): Promise<QueryWithdrawerFeeSharesResponseSDKType>;
}
