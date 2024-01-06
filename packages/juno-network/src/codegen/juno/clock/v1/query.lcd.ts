import { LCDClient } from "@cosmology/lcd";
import { QueryClockContracts, QueryClockContractsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.clockContracts = this.clockContracts.bind(this);
    this.params = this.params.bind(this);
  }
  /* ClockContracts */
  async clockContracts(_params: QueryClockContracts = {}): Promise<QueryClockContractsResponseSDKType> {
    const endpoint = `juno/clock/v1/contracts`;
    return await this.req.get<QueryClockContractsResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `juno/clock/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}