import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryFeeSharesRequest, QueryFeeSharesResponseSDKType, QueryFeeShareRequest, QueryFeeShareResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployerFeeSharesRequest, QueryDeployerFeeSharesResponseSDKType, QueryWithdrawerFeeSharesRequest, QueryWithdrawerFeeSharesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.feeShares = this.feeShares.bind(this);
    this.feeShare = this.feeShare.bind(this);
    this.params = this.params.bind(this);
    this.deployerFeeShares = this.deployerFeeShares.bind(this);
    this.withdrawerFeeShares = this.withdrawerFeeShares.bind(this);
  }
  /* FeeShares retrieves all registered FeeShares */


  async feeShares(params: QueryFeeSharesRequest = {
    pagination: undefined
  }): Promise<QueryFeeSharesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `juno/feeshare/v1/fee_shares`;
    return await this.req.get<QueryFeeSharesResponseSDKType>(endpoint, options);
  }
  /* FeeShare retrieves a registered FeeShare for a given contract address */


  async feeShare(params: QueryFeeShareRequest): Promise<QueryFeeShareResponseSDKType> {
    const endpoint = `juno/feeshare/v1/fee_shares/${params.contractAddress}`;
    return await this.req.get<QueryFeeShareResponseSDKType>(endpoint);
  }
  /* Params retrieves the FeeShare module params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `juno/feeshare/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DeployerFeeShares retrieves all FeeShares that a given deployer has
   registered */


  async deployerFeeShares(params: QueryDeployerFeeSharesRequest): Promise<QueryDeployerFeeSharesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `juno/feeshare/v1/fee_shares/${params.deployerAddress}`;
    return await this.req.get<QueryDeployerFeeSharesResponseSDKType>(endpoint, options);
  }
  /* WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
   address */


  async withdrawerFeeShares(params: QueryWithdrawerFeeSharesRequest): Promise<QueryWithdrawerFeeSharesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `juno/feeshare/v1/fee_shares/${params.withdrawerAddress}`;
    return await this.req.get<QueryWithdrawerFeeSharesResponseSDKType>(endpoint, options);
  }

}