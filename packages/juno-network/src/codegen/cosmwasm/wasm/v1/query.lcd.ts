import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* ContractInfo gets the contract meta data */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.request(endpoint);
  }

  /* ContractHistory gets the contract code history */
  async contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.request(endpoint, options);
  }

  /* ContractsByCode lists all smart contracts for a code id */
  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.codeId !== "undefined") {
      options.params.code_id = params.codeId;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}/contracts`;
    return await this.request(endpoint, options);
  }

  /* AllContractState gets all raw store data for a single contract */
  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.request(endpoint, options);
  }

  /* RawContractState gets single key from the raw store data of a contract */
  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.queryData !== "undefined") {
      options.params.query_data = params.queryData;
    }

    const endpoint = `wasm/v1/contract/${params.address}raw/${params.query_data}`;
    return await this.request(endpoint, options);
  }

  /* SmartContractState get smart query result from the contract */
  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.queryData !== "undefined") {
      options.params.query_data = params.queryData;
    }

    const endpoint = `wasm/v1/contract/${params.address}smart/${params.query_data}`;
    return await this.request(endpoint, options);
  }

  /* Code gets the binary code and metadata for a singe wasm code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.codeId !== "undefined") {
      options.params.code_id = params.codeId;
    }

    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}`;
    return await this.request(endpoint, options);
  }

  /* Codes gets the metadata for all stored wasm codes */
  async codes(params: QueryCodesRequest): Promise<QueryCodesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.request(endpoint, options);
  }

  /* PinnedCodes gets the pinned code ids */
  async pinnedCodes(params: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.request(endpoint, options);
  }

}