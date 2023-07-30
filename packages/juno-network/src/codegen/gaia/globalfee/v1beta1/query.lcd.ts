import { LCDClient } from "@cosmology/lcd";
import { QueryMinimumGasPricesRequest, QueryMinimumGasPricesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.minimumGasPrices = this.minimumGasPrices.bind(this);
  }
  /* MinimumGasPrices */


  async minimumGasPrices(_params: QueryMinimumGasPricesRequest = {}): Promise<QueryMinimumGasPricesResponseSDKType> {
    const endpoint = `gaia/globalfee/v1beta1/minimum_gas_prices`;
    return await this.req.get<QueryMinimumGasPricesResponseSDKType>(endpoint);
  }

}