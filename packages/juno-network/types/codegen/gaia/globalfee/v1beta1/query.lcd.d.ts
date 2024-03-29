import { LCDClient } from "@cosmology/lcd";
import { QueryMinimumGasPricesRequest, QueryMinimumGasPricesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    minimumGasPrices(_params?: QueryMinimumGasPricesRequest): Promise<QueryMinimumGasPricesResponseSDKType>;
}
