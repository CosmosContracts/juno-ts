import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
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

  /* Proposal queries proposal details based on ProposalID. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}`;
    return await this.get<QueryProposalResponse>(endpoint);
  }

  /* Proposals queries all proposals based on given status. */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposal_status !== "undefined") {
      options.params.proposal_status = params.proposal_status;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals`;
    return await this.get<QueryProposalsResponse>(endpoint, options);
  }

  /* Vote queries voted information based on proposalID, voterAddr. */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponse> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}votes/${params.voter}`;
    return await this.get<QueryVoteResponse>(endpoint);
  }

  /* Votes queries votes of a given proposal. */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/votes`;
    return await this.get<QueryVotesResponse>(endpoint, options);
  }

  /* Params queries all parameters of the gov module. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/gov/v1/params/${params.params_type}`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* Deposit queries single deposit information based proposalID, depositAddr. */
  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponse> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}deposits/${params.depositor}`;
    return await this.get<QueryDepositResponse>(endpoint);
  }

  /* Deposits queries all deposits of a single proposal. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/deposits`;
    return await this.get<QueryDepositsResponse>(endpoint, options);
  }

  /* TallyResult queries the tally of a proposal vote. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/tally`;
    return await this.get<QueryTallyResultResponse>(endpoint);
  }

}