import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStakingContractsRequest, QueryStakingContractsResponse, QueryGovernanceContractsRequest, QueryGovernanceContractsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** StakingContracts */
  stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse>;
  /** GovernanceContracts */
  governanceContracts(request?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakingContracts = this.stakingContracts.bind(this);
    this.governanceContracts = this.governanceContracts.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  stakingContracts(request: QueryStakingContractsRequest = {}): Promise<QueryStakingContractsResponse> {
    const data = QueryStakingContractsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Query", "StakingContracts", data);
    return promise.then(data => QueryStakingContractsResponse.decode(new BinaryReader(data)));
  }
  governanceContracts(request: QueryGovernanceContractsRequest = {}): Promise<QueryGovernanceContractsResponse> {
    const data = QueryGovernanceContractsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Query", "GovernanceContracts", data);
    return promise.then(data => QueryGovernanceContractsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse> {
      return queryService.stakingContracts(request);
    },
    governanceContracts(request?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponse> {
      return queryService.governanceContracts(request);
    }
  };
};