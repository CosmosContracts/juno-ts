import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model } from "./types";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* ContractInfo gets the contract meta data */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.get<QueryContractInfoResponse>(endpoint);
  }

  /* ContractHistory gets the contract code history */
  async contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.get<QueryContractHistoryResponse>(endpoint, options);
  }

  /* ContractsByCode lists all smart contracts for a code id */
  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}/contracts`;
    return await this.get<QueryContractsByCodeResponse>(endpoint, options);
  }

  /* AllContractState gets all raw store data for a single contract */
  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.get<QueryAllContractStateResponse>(endpoint, options);
  }

  /* RawContractState gets single key from the raw store data of a contract */
  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const endpoint = `wasm/v1/contract/${params.address}raw/${params.query_data}`;
    return await this.get<QueryRawContractStateResponse>(endpoint);
  }

  /* SmartContractState get smart query result from the contract */
  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const endpoint = `wasm/v1/contract/${params.address}smart/${params.query_data}`;
    return await this.get<QuerySmartContractStateResponse>(endpoint);
  }

  /* Code gets the binary code and metadata for a singe wasm code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponse> {
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}`;
    return await this.get<QueryCodeResponse>(endpoint);
  }

  /* Codes gets the metadata for all stored wasm codes */
  async codes(params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.get<QueryCodesResponse>(endpoint, options);
  }

  /* PinnedCodes gets the pinned code ids */
  async pinnedCodes(params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.get<QueryPinnedCodesResponse>(endpoint, options);
  }

}