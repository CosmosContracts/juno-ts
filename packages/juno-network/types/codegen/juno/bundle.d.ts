import * as _79 from "./feeshare/v1/feeshare";
import * as _80 from "./feeshare/v1/genesis";
import * as _81 from "./feeshare/v1/query";
import * as _82 from "./feeshare/v1/tx";
import * as _83 from "./mint/genesis";
import * as _84 from "./mint/mint";
import * as _85 from "./mint/query";
import * as _159 from "./feeshare/v1/query.lcd";
import * as _160 from "./mint/query.lcd";
import * as _161 from "./feeshare/v1/query.rpc.Query";
import * as _162 from "./mint/query.rpc.Query";
import * as _163 from "./feeshare/v1/tx.rpc.msg";
export declare namespace juno {
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeShares(request?: _81.QueryFeeSharesRequest): Promise<_81.QueryFeeSharesResponse>;
                feeShare(request: _81.QueryFeeShareRequest): Promise<_81.QueryFeeShareResponse>;
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                deployerFeeShares(request: _81.QueryDeployerFeeSharesRequest): Promise<_81.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _81.QueryWithdrawerFeeSharesRequest): Promise<_81.QueryWithdrawerFeeSharesResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _82.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _82.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _82.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _82.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _82.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _82.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _82.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _82.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _82.MsgCancelFeeShare;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _82.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _82.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _82.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _82.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _82.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _82.MsgCancelFeeShare;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _82.MsgRegisterFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _82.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _82.MsgUpdateFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _82.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _82.MsgCancelFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _82.MsgCancelFeeShare;
                };
            };
            MsgRegisterFeeShare: {
                encode(message: _82.MsgRegisterFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRegisterFeeShare;
                fromPartial(object: any): _82.MsgRegisterFeeShare;
            };
            MsgRegisterFeeShareResponse: {
                encode(_: _82.MsgRegisterFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRegisterFeeShareResponse;
                fromPartial(_: any): _82.MsgRegisterFeeShareResponse;
            };
            MsgUpdateFeeShare: {
                encode(message: _82.MsgUpdateFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpdateFeeShare;
                fromPartial(object: any): _82.MsgUpdateFeeShare;
            };
            MsgUpdateFeeShareResponse: {
                encode(_: _82.MsgUpdateFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpdateFeeShareResponse;
                fromPartial(_: any): _82.MsgUpdateFeeShareResponse;
            };
            MsgCancelFeeShare: {
                encode(message: _82.MsgCancelFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCancelFeeShare;
                fromPartial(object: any): _82.MsgCancelFeeShare;
            };
            MsgCancelFeeShareResponse: {
                encode(_: _82.MsgCancelFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCancelFeeShareResponse;
                fromPartial(_: any): _82.MsgCancelFeeShareResponse;
            };
            QueryFeeSharesRequest: {
                encode(message: _81.QueryFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryFeeSharesRequest;
                fromPartial(object: any): _81.QueryFeeSharesRequest;
            };
            QueryFeeSharesResponse: {
                encode(message: _81.QueryFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryFeeSharesResponse;
                fromPartial(object: any): _81.QueryFeeSharesResponse;
            };
            QueryFeeShareRequest: {
                encode(message: _81.QueryFeeShareRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryFeeShareRequest;
                fromPartial(object: any): _81.QueryFeeShareRequest;
            };
            QueryFeeShareResponse: {
                encode(message: _81.QueryFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryFeeShareResponse;
                fromPartial(object: any): _81.QueryFeeShareResponse;
            };
            QueryParamsRequest: {
                encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsRequest;
                fromPartial(_: any): _81.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsResponse;
                fromPartial(object: any): _81.QueryParamsResponse;
            };
            QueryDeployerFeeSharesRequest: {
                encode(message: _81.QueryDeployerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDeployerFeeSharesRequest;
                fromPartial(object: any): _81.QueryDeployerFeeSharesRequest;
            };
            QueryDeployerFeeSharesResponse: {
                encode(message: _81.QueryDeployerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDeployerFeeSharesResponse;
                fromPartial(object: any): _81.QueryDeployerFeeSharesResponse;
            };
            QueryWithdrawerFeeSharesRequest: {
                encode(message: _81.QueryWithdrawerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: any): _81.QueryWithdrawerFeeSharesRequest;
            };
            QueryWithdrawerFeeSharesResponse: {
                encode(message: _81.QueryWithdrawerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: any): _81.QueryWithdrawerFeeSharesResponse;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                fromPartial(object: any): _80.GenesisState;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromPartial(object: any): _80.Params;
            };
            FeeShare: {
                encode(message: _79.FeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.FeeShare;
                fromPartial(object: any): _79.FeeShare;
            };
        };
    }
    const mint: {
        QueryClientImpl: typeof _162.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            inflation(request?: _85.QueryInflationRequest): Promise<_85.QueryInflationResponse>;
            annualProvisions(request?: _85.QueryAnnualProvisionsRequest): Promise<_85.QueryAnnualProvisionsResponse>;
        };
        LCDQueryClient: typeof _160.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
            fromPartial(_: any): _85.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
            fromPartial(object: any): _85.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _85.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryInflationRequest;
            fromPartial(_: any): _85.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _85.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryInflationResponse;
            fromPartial(object: any): _85.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _85.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAnnualProvisionsRequest;
            fromPartial(_: any): _85.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _85.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAnnualProvisionsResponse;
            fromPartial(object: any): _85.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _84.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Minter;
            fromPartial(object: any): _84.Minter;
        };
        Params: {
            encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
            fromPartial(object: any): _84.Params;
        };
        GenesisState: {
            encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
            fromPartial(object: any): _83.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            juno: {
                feeshare: {
                    v1: _163.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            juno: {
                feeshare: {
                    v1: {
                        feeShares(request?: _81.QueryFeeSharesRequest): Promise<_81.QueryFeeSharesResponse>;
                        feeShare(request: _81.QueryFeeShareRequest): Promise<_81.QueryFeeShareResponse>;
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        deployerFeeShares(request: _81.QueryDeployerFeeSharesRequest): Promise<_81.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _81.QueryWithdrawerFeeSharesRequest): Promise<_81.QueryWithdrawerFeeSharesResponse>;
                    };
                };
                mint: {
                    params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    inflation(request?: _85.QueryInflationRequest): Promise<_85.QueryInflationResponse>;
                    annualProvisions(request?: _85.QueryAnnualProvisionsRequest): Promise<_85.QueryAnnualProvisionsResponse>;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            juno: {
                feeshare: {
                    v1: _159.LCDQueryClient;
                };
                mint: _160.LCDQueryClient;
            };
        }>;
    };
}
