import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryFeePayContract, QueryFeePayContractResponseSDKType, QueryFeePayContracts, QueryFeePayContractsResponseSDKType, QueryFeePayContractUses, QueryFeePayContractUsesResponseSDKType, QueryFeePayWalletIsEligible, QueryFeePayWalletIsEligibleResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.feePayContract = this.feePayContract.bind(this);
    this.feePayContracts = this.feePayContracts.bind(this);
    this.feePayContractUses = this.feePayContractUses.bind(this);
    this.feePayWalletIsEligible = this.feePayWalletIsEligible.bind(this);
    this.params = this.params.bind(this);
  }
  /* FeePayContract queries a single fee pay contract by address */
  async feePayContract(params: QueryFeePayContract): Promise<QueryFeePayContractResponseSDKType> {
    const endpoint = `juno/feepay/v1/contract/${params.contractAddress}`;
    return await this.req.get<QueryFeePayContractResponseSDKType>(endpoint);
  }
  /* Retrieve all fee pay contracts */
  async feePayContracts(params: QueryFeePayContracts = {
    pagination: undefined
  }): Promise<QueryFeePayContractsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `juno/feepay/v1/all_contracts`;
    return await this.req.get<QueryFeePayContractsResponseSDKType>(endpoint, options);
  }
  /* Retrieve the number of uses on a fee pay contract by wallet */
  async feePayContractUses(params: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponseSDKType> {
    const endpoint = `juno/feepay/v1/contract/${params.contractAddress}/uses/${params.walletAddress}`;
    return await this.req.get<QueryFeePayContractUsesResponseSDKType>(endpoint);
  }
  /* Query if sender is eligible for fee pay contract interaction */
  async feePayWalletIsEligible(params: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponseSDKType> {
    const endpoint = `juno/feepay/v1/contract/${params.contractAddress}/eligible/${params.walletAddress}`;
    return await this.req.get<QueryFeePayWalletIsEligibleResponseSDKType>(endpoint);
  }
  /* Params retrieves the FeePay module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `juno/feepay/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}