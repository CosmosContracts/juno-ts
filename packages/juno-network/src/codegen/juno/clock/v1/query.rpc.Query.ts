import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClockContracts, QueryClockContractsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** ClockContracts */
  clockContracts(request?: QueryClockContracts): Promise<QueryClockContractsResponse>;
  /** Params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.clockContracts = this.clockContracts.bind(this);
    this.params = this.params.bind(this);
  }
  clockContracts(request: QueryClockContracts = {}): Promise<QueryClockContractsResponse> {
    const data = QueryClockContracts.encode(request).finish();
    const promise = this.rpc.request("juno.clock.v1.Query", "ClockContracts", data);
    return promise.then(data => QueryClockContractsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.clock.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clockContracts(request?: QueryClockContracts): Promise<QueryClockContractsResponse> {
      return queryService.clockContracts(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};