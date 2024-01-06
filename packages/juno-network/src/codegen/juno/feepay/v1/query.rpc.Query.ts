import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryFeePayContract, QueryFeePayContractResponse, QueryFeePayContracts, QueryFeePayContractsResponse, QueryFeePayContractUses, QueryFeePayContractUsesResponse, QueryFeePayWalletIsEligible, QueryFeePayWalletIsEligibleResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** FeePayContract queries a single fee pay contract by address */
  feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse>;
  /** Retrieve all fee pay contracts */
  feePayContracts(request?: QueryFeePayContracts): Promise<QueryFeePayContractsResponse>;
  /** Retrieve the number of uses on a fee pay contract by wallet */
  feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse>;
  /** Query if sender is eligible for fee pay contract interaction */
  feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse>;
  /** Params retrieves the FeePay module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feePayContract = this.feePayContract.bind(this);
    this.feePayContracts = this.feePayContracts.bind(this);
    this.feePayContractUses = this.feePayContractUses.bind(this);
    this.feePayWalletIsEligible = this.feePayWalletIsEligible.bind(this);
    this.params = this.params.bind(this);
  }
  feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse> {
    const data = QueryFeePayContract.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContract", data);
    return promise.then(data => QueryFeePayContractResponse.decode(new BinaryReader(data)));
  }
  feePayContracts(request: QueryFeePayContracts = {
    pagination: undefined
  }): Promise<QueryFeePayContractsResponse> {
    const data = QueryFeePayContracts.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContracts", data);
    return promise.then(data => QueryFeePayContractsResponse.decode(new BinaryReader(data)));
  }
  feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse> {
    const data = QueryFeePayContractUses.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContractUses", data);
    return promise.then(data => QueryFeePayContractUsesResponse.decode(new BinaryReader(data)));
  }
  feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse> {
    const data = QueryFeePayWalletIsEligible.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayWalletIsEligible", data);
    return promise.then(data => QueryFeePayWalletIsEligibleResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse> {
      return queryService.feePayContract(request);
    },
    feePayContracts(request?: QueryFeePayContracts): Promise<QueryFeePayContractsResponse> {
      return queryService.feePayContracts(request);
    },
    feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse> {
      return queryService.feePayContractUses(request);
    },
    feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse> {
      return queryService.feePayWalletIsEligible(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};