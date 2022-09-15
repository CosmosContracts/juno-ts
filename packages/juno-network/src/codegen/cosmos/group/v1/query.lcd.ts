import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupPolicyInfo, GroupMember, Proposal, Vote, TallyResult } from "./types";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
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

  /* GroupInfo queries group info based on group id. */
  async groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const endpoint = `cosmos/group/v1/group_info/${params.group_id}`;
    return await this.get<QueryGroupInfoResponse>(endpoint);
  }

  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  async groupPolicyInfo(params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.get<QueryGroupPolicyInfoResponse>(endpoint);
  }

  /* GroupMembers queries members of a group */
  async groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_members/${params.group_id}`;
    return await this.get<QueryGroupMembersResponse>(endpoint, options);
  }

  /* GroupsByAdmin queries groups by admin address. */
  async groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.get<QueryGroupsByAdminResponse>(endpoint, options);
  }

  /* GroupPoliciesByGroup queries group policies by group id. */
  async groupPoliciesByGroup(params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.group_id}`;
    return await this.get<QueryGroupPoliciesByGroupResponse>(endpoint, options);
  }

  /* GroupsByAdmin queries group policies by admin address. */
  async groupPoliciesByAdmin(params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.get<QueryGroupPoliciesByAdminResponse>(endpoint, options);
  }

  /* Proposal queries a proposal based on proposal id. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/group/v1/proposal/${params.proposal_id}`;
    return await this.get<QueryProposalResponse>(endpoint);
  }

  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async proposalsByGroupPolicy(params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.get<QueryProposalsByGroupPolicyResponse>(endpoint, options);
  }

  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  async voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`;
    return await this.get<QueryVoteByProposalVoterResponse>(endpoint);
  }

  /* VotesByProposal queries a vote by proposal. */
  async votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposal_id}`;
    return await this.get<QueryVotesByProposalResponse>(endpoint, options);
  }

  /* VotesByVoter queries a vote by voter. */
  async votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.get<QueryVotesByVoterResponse>(endpoint, options);
  }

  /* GroupsByMember queries groups by member address. */
  async groupsByMember(params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.get<QueryGroupsByMemberResponse>(endpoint, options);
  }

  /* TallyResult queries the tally of a proposal votes. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/group/v1/proposals/${params.proposal_id}/tally`;
    return await this.get<QueryTallyResultResponse>(endpoint);
  }

}