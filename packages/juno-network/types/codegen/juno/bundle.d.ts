import * as _80 from "./feeshare/v1/feeshare";
import * as _81 from "./feeshare/v1/genesis";
import * as _82 from "./feeshare/v1/query";
import * as _83 from "./feeshare/v1/tx";
import * as _84 from "./mint/genesis";
import * as _85 from "./mint/mint";
import * as _86 from "./mint/query";
import * as _167 from "./feeshare/v1/query.lcd";
import * as _168 from "./mint/query.lcd";
import * as _169 from "./feeshare/v1/query.rpc.Query";
import * as _170 from "./mint/query.rpc.Query";
import * as _171 from "./feeshare/v1/tx.rpc.msg";
export declare namespace juno {
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeShares(request?: _82.QueryFeeSharesRequest): Promise<_82.QueryFeeSharesResponse>;
                feeShare(request: _82.QueryFeeShareRequest): Promise<_82.QueryFeeShareResponse>;
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                deployerFeeShares(request: _82.QueryDeployerFeeSharesRequest): Promise<_82.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _82.QueryWithdrawerFeeSharesRequest): Promise<_82.QueryWithdrawerFeeSharesResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _83.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _83.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _83.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _83.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _83.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _83.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _83.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _83.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _83.MsgCancelFeeShare;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _83.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _83.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _83.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _83.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _83.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _83.MsgCancelFeeShare;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _83.MsgRegisterFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _83.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _83.MsgUpdateFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _83.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _83.MsgCancelFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _83.MsgCancelFeeShare;
                };
            };
            MsgRegisterFeeShare: {
                encode(message: _83.MsgRegisterFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRegisterFeeShare;
                fromPartial(object: any): _83.MsgRegisterFeeShare;
            };
            MsgRegisterFeeShareResponse: {
                encode(_: _83.MsgRegisterFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRegisterFeeShareResponse;
                fromPartial(_: any): _83.MsgRegisterFeeShareResponse;
            };
            MsgUpdateFeeShare: {
                encode(message: _83.MsgUpdateFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgUpdateFeeShare;
                fromPartial(object: any): _83.MsgUpdateFeeShare;
            };
            MsgUpdateFeeShareResponse: {
                encode(_: _83.MsgUpdateFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgUpdateFeeShareResponse;
                fromPartial(_: any): _83.MsgUpdateFeeShareResponse;
            };
            MsgCancelFeeShare: {
                encode(message: _83.MsgCancelFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCancelFeeShare;
                fromPartial(object: any): _83.MsgCancelFeeShare;
            };
            MsgCancelFeeShareResponse: {
                encode(_: _83.MsgCancelFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCancelFeeShareResponse;
                fromPartial(_: any): _83.MsgCancelFeeShareResponse;
            };
            QueryFeeSharesRequest: {
                encode(message: _82.QueryFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryFeeSharesRequest;
                fromPartial(object: any): _82.QueryFeeSharesRequest;
            };
            QueryFeeSharesResponse: {
                encode(message: _82.QueryFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryFeeSharesResponse;
                fromPartial(object: any): _82.QueryFeeSharesResponse;
            };
            QueryFeeShareRequest: {
                encode(message: _82.QueryFeeShareRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryFeeShareRequest;
                fromPartial(object: any): _82.QueryFeeShareRequest;
            };
            QueryFeeShareResponse: {
                encode(message: _82.QueryFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryFeeShareResponse;
                fromPartial(object: any): _82.QueryFeeShareResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromPartial(_: any): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromPartial(object: any): _82.QueryParamsResponse;
            };
            QueryDeployerFeeSharesRequest: {
                encode(message: _82.QueryDeployerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDeployerFeeSharesRequest;
                fromPartial(object: any): _82.QueryDeployerFeeSharesRequest;
            };
            QueryDeployerFeeSharesResponse: {
                encode(message: _82.QueryDeployerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDeployerFeeSharesResponse;
                fromPartial(object: any): _82.QueryDeployerFeeSharesResponse;
            };
            QueryWithdrawerFeeSharesRequest: {
                encode(message: _82.QueryWithdrawerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: any): _82.QueryWithdrawerFeeSharesRequest;
            };
            QueryWithdrawerFeeSharesResponse: {
                encode(message: _82.QueryWithdrawerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: any): _82.QueryWithdrawerFeeSharesResponse;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                fromPartial(object: any): _81.GenesisState;
            };
            Params: {
                encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Params;
                fromPartial(object: any): _81.Params;
            };
            FeeShare: {
                encode(message: _80.FeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.FeeShare;
                fromPartial(object: any): _80.FeeShare;
            };
        };
    }
    const mint: {
        QueryClientImpl: typeof _170.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
            inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
            annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
        };
        LCDQueryClient: typeof _168.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _86.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsRequest;
            fromPartial(_: any): _86.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _86.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsResponse;
            fromPartial(object: any): _86.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _86.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryInflationRequest;
            fromPartial(_: any): _86.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _86.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryInflationResponse;
            fromPartial(object: any): _86.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _86.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAnnualProvisionsRequest;
            fromPartial(_: any): _86.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _86.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAnnualProvisionsResponse;
            fromPartial(object: any): _86.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _85.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Minter;
            fromPartial(object: any): _85.Minter;
        };
        Params: {
            encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
            fromPartial(object: any): _85.Params;
        };
        GenesisState: {
            encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
            fromPartial(object: any): _84.GenesisState;
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
                    v1: _171.MsgClientImpl;
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
                        feeShares(request?: _82.QueryFeeSharesRequest): Promise<_82.QueryFeeSharesResponse>;
                        feeShare(request: _82.QueryFeeShareRequest): Promise<_82.QueryFeeShareResponse>;
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        deployerFeeShares(request: _82.QueryDeployerFeeSharesRequest): Promise<_82.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _82.QueryWithdrawerFeeSharesRequest): Promise<_82.QueryWithdrawerFeeSharesResponse>;
                    };
                };
                mint: {
                    params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                    inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
                    annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
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
                    v1: _167.LCDQueryClient;
                };
                mint: _168.LCDQueryClient;
            };
        }>;
    };
}
