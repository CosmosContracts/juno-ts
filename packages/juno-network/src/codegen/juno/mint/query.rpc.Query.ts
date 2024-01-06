import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryTargetSupplyRequest, QueryTargetSupplyResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
  /** TargetSupply current target supply for this phase value. */
  targetSupply(request?: QueryTargetSupplyRequest): Promise<QueryTargetSupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.targetSupply = this.targetSupply.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.mint.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  inflation(request: QueryInflationRequest = {}): Promise<QueryInflationResponse> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("juno.mint.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new BinaryReader(data)));
  }
  annualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.mint.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
  }
  targetSupply(request: QueryTargetSupplyRequest = {}): Promise<QueryTargetSupplyResponse> {
    const data = QueryTargetSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("juno.mint.Query", "TargetSupply", data);
    return promise.then(data => QueryTargetSupplyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse> {
      return queryService.inflation(request);
    },
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.annualProvisions(request);
    },
    targetSupply(request?: QueryTargetSupplyRequest): Promise<QueryTargetSupplyResponse> {
      return queryService.targetSupply(request);
    }
  };
};