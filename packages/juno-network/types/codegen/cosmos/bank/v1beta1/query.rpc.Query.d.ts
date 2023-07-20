import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.47
     */
    spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    /**
     * TotalSupply queries the total supply of all coins.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf queries the supply of a single coin.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    /**
     * SendEnabled queries for SendEnabled entries.
     *
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     *
     * Since: cosmos-sdk 0.47
     */
    sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
};
