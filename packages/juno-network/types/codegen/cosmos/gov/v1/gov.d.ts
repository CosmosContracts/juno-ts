import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOption {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOptionSDKType {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    PROPOSAL_STATUS_PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    PROPOSAL_STATUS_REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatusSDKType {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    PROPOSAL_STATUS_PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    PROPOSAL_STATUS_REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
    /** option defines the valid vote options, it must not contain duplicate vote options. */
    option: VoteOption;
    /** weight is the vote weight associated with the vote option. */
    weight: string;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
    /** option defines the valid vote options, it must not contain duplicate vote options. */
    option: VoteOptionSDKType;
    /** weight is the vote weight associated with the vote option. */
    weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** amount to be deposited by depositor. */
    amount: Coin[];
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** amount to be deposited by depositor. */
    amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
    /** id defines the unique id of the proposal. */
    id: Long;
    /** messages are the arbitrary messages to be executed if the proposal passes. */
    messages: Any[];
    /** status defines the proposal status. */
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    finalTallyResult?: TallyResult;
    /** submit_time is the time of proposal submission. */
    submitTime?: Date;
    /** deposit_end_time is the end time for deposition. */
    depositEndTime?: Date;
    /** total_deposit is the total deposit on the proposal. */
    totalDeposit: Coin[];
    /** voting_start_time is the starting time to vote on a proposal. */
    votingStartTime?: Date;
    /** voting_end_time is the end time of voting on a proposal. */
    votingEndTime?: Date;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
    /**
     * title is the title of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    title: string;
    /**
     * summary is a short summary of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    summary: string;
    /**
     * Proposer is the address of the proposal sumbitter
     *
     * Since: cosmos-sdk 0.47
     */
    proposer: string;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
    /** id defines the unique id of the proposal. */
    id: Long;
    /** messages are the arbitrary messages to be executed if the proposal passes. */
    messages: AnySDKType[];
    /** status defines the proposal status. */
    status: ProposalStatusSDKType;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    final_tally_result?: TallyResultSDKType;
    /** submit_time is the time of proposal submission. */
    submit_time?: Date;
    /** deposit_end_time is the end time for deposition. */
    deposit_end_time?: Date;
    /** total_deposit is the total deposit on the proposal. */
    total_deposit: CoinSDKType[];
    /** voting_start_time is the starting time to vote on a proposal. */
    voting_start_time?: Date;
    /** voting_end_time is the end time of voting on a proposal. */
    voting_end_time?: Date;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
    /**
     * title is the title of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    title: string;
    /**
     * summary is a short summary of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    summary: string;
    /**
     * Proposer is the address of the proposal sumbitter
     *
     * Since: cosmos-sdk 0.47
     */
    proposer: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
    /** yes_count is the number of yes votes on a proposal. */
    yesCount: string;
    /** abstain_count is the number of abstain votes on a proposal. */
    abstainCount: string;
    /** no_count is the number of no votes on a proposal. */
    noCount: string;
    /** no_with_veto_count is the number of no with veto votes on a proposal. */
    noWithVetoCount: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
    /** yes_count is the number of yes votes on a proposal. */
    yes_count: string;
    /** abstain_count is the number of abstain votes on a proposal. */
    abstain_count: string;
    /** no_count is the number of no votes on a proposal. */
    no_count: string;
    /** no_with_veto_count is the number of no with veto votes on a proposal. */
    no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** voter is the voter address of the proposal. */
    voter: string;
    /** options is the weighted vote options. */
    options: WeightedVoteOption[];
    /** metadata is any  arbitrary metadata to attached to the vote. */
    metadata: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** voter is the voter address of the proposal. */
    voter: string;
    /** options is the weighted vote options. */
    options: WeightedVoteOptionSDKType[];
    /** metadata is any  arbitrary metadata to attached to the vote. */
    metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    maxDepositPeriod?: Duration;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit: CoinSDKType[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
    /** Duration of the voting period. */
    votingPeriod?: Duration;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
    /** Duration of the voting period. */
    voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     * considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     * vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     * considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     * vetoed. Default value: 1/3.
     */
    veto_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface Params {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    maxDepositPeriod?: Duration;
    /** Duration of the voting period. */
    votingPeriod?: Duration;
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
    /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
    minInitialDepositRatio: string;
    /** burn deposits if a proposal does not meet quorum */
    burnVoteQuorum: boolean;
    /** burn deposits if the proposal does not enter voting period */
    burnProposalDepositPrevote: boolean;
    /** burn deposits if quorum with vote type no_veto is met */
    burnVoteVeto: boolean;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ParamsSDKType {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit: CoinSDKType[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    max_deposit_period?: DurationSDKType;
    /** Duration of the voting period. */
    voting_period?: DurationSDKType;
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    veto_threshold: string;
    /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
    min_initial_deposit_ratio: string;
    /** burn deposits if a proposal does not meet quorum */
    burn_vote_quorum: boolean;
    /** burn deposits if the proposal does not enter voting period */
    burn_proposal_deposit_prevote: boolean;
    /** burn deposits if quorum with vote type no_veto is met */
    burn_vote_veto: boolean;
}
export declare const WeightedVoteOption: {
    encode(message: WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption;
    fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const TallyResult: {
    encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
    fromPartial(object: DeepPartial<TallyResult>): TallyResult;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
export declare const DepositParams: {
    encode(message: DepositParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams;
    fromPartial(object: DeepPartial<DepositParams>): DepositParams;
};
export declare const VotingParams: {
    encode(message: VotingParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams;
    fromPartial(object: DeepPartial<VotingParams>): VotingParams;
};
export declare const TallyParams: {
    encode(message: TallyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams;
    fromPartial(object: DeepPartial<TallyParams>): TallyParams;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
