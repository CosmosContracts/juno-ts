import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryTargetSupplyRequest, QueryTargetSupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.targetSupply = this.targetSupply.bind(this);
  }
  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Inflation returns the current minting inflation value. */
  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.req.get<QueryInflationResponseSDKType>(endpoint);
  }
  /* AnnualProvisions current minting annual provisions value. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }
  /* TargetSupply current target supply for this phase value. */
  async targetSupply(_params: QueryTargetSupplyRequest = {}): Promise<QueryTargetSupplyResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/target_supply`;
    return await this.req.get<QueryTargetSupplyResponseSDKType>(endpoint);
  }
}