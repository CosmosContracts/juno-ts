import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmosAminoConverters: {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: import("./upgrade/v1beta1/tx").MsgSoftwareUpgrade) => {
            authority: string;
            plan: {
                name: string;
                time: {
                    seconds: string;
                    nanos: number;
                };
                height: string;
                info: string;
                upgraded_client_state: {
                    type_url: string;
                    value: Uint8Array;
                };
            };
        };
        fromAmino: ({ authority, plan }: {
            authority: string;
            plan: {
                name: string;
                time: {
                    seconds: string;
                    nanos: number;
                };
                height: string;
                info: string;
                upgraded_client_state: {
                    type_url: string;
                    value: Uint8Array;
                };
            };
        }) => import("./upgrade/v1beta1/tx").MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: string;
        toAmino: ({ authority }: import("./upgrade/v1beta1/tx").MsgCancelUpgrade) => {
            authority: string;
        };
        fromAmino: ({ authority }: {
            authority: string;
        }) => import("./upgrade/v1beta1/tx").MsgCancelUpgrade;
    };
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: import("./staking/v1beta1/tx").MsgCreateValidator) => {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            commission: {
                rate: string;
                max_rate: string;
                max_change_rate: string;
            };
            min_self_delegation: string;
            delegator_address: string;
            validator_address: string;
            pubkey: {
                type_url: string;
                value: Uint8Array;
            };
            value: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            commission: {
                rate: string;
                max_rate: string;
                max_change_rate: string;
            };
            min_self_delegation: string;
            delegator_address: string;
            validator_address: string;
            pubkey: {
                type_url: string;
                value: Uint8Array;
            };
            value: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: import("./staking/v1beta1/tx").MsgEditValidator) => {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            validator_address: string;
            commission_rate: string;
            min_self_delegation: string;
        };
        fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            validator_address: string;
            commission_rate: string;
            min_self_delegation: string;
        }) => import("./staking/v1beta1/tx").MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: import("./staking/v1beta1/tx").MsgDelegate) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_address, amount }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: import("./staking/v1beta1/tx").MsgBeginRedelegate) => {
            delegator_address: string;
            validator_src_address: string;
            validator_dst_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
            delegator_address: string;
            validator_src_address: string;
            validator_dst_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: import("./staking/v1beta1/tx").MsgUndelegate) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_address, amount }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgUndelegate;
    };
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: import("./staking/v1beta1/tx").MsgCancelUnbondingDelegation) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
            creation_height: string;
        };
        fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
            creation_height: string;
        }) => import("./staking/v1beta1/tx").MsgCancelUnbondingDelegation;
    };
    "/cosmos.staking.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./staking/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                unbonding_time: {
                    seconds: string;
                    nanos: number;
                };
                max_validators: number;
                max_entries: number;
                historical_entries: number;
                bond_denom: string;
                min_commission_rate: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                unbonding_time: {
                    seconds: string;
                    nanos: number;
                };
                max_validators: number;
                max_entries: number;
                historical_entries: number;
                bond_denom: string;
                min_commission_rate: string;
            };
        }) => import("./staking/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ content, initialDeposit, proposer }: import("./gov/v1beta1/tx").MsgSubmitProposal) => {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
        };
        fromAmino: ({ content, initial_deposit, proposer }: {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
        }) => import("./gov/v1beta1/tx").MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option }: import("./gov/v1beta1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            option: number;
        };
        fromAmino: ({ proposal_id, voter, option }: {
            proposal_id: string;
            voter: string;
            option: number;
        }) => import("./gov/v1beta1/tx").MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options }: import("./gov/v1beta1/tx").MsgVoteWeighted) => {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
        };
        fromAmino: ({ proposal_id, voter, options }: {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
        }) => import("./gov/v1beta1/tx").MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1beta1/tx").MsgDeposit) => {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ proposal_id, depositor, amount }: {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./gov/v1beta1/tx").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: import("./gov/v1/tx").MsgSubmitProposal) => {
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
            metadata: string;
            title: string;
            summary: string;
        };
        fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: {
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
            metadata: string;
            title: string;
            summary: string;
        }) => import("./gov/v1/tx").MsgSubmitProposal;
    };
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: string;
        toAmino: ({ content, authority }: import("./gov/v1/tx").MsgExecLegacyContent) => {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            authority: string;
        };
        fromAmino: ({ content, authority }: {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            authority: string;
        }) => import("./gov/v1/tx").MsgExecLegacyContent;
    };
    "/cosmos.gov.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata }: import("./gov/v1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
        };
        fromAmino: ({ proposal_id, voter, option, metadata }: {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
        }) => import("./gov/v1/tx").MsgVote;
    };
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options, metadata }: import("./gov/v1/tx").MsgVoteWeighted) => {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
            metadata: string;
        };
        fromAmino: ({ proposal_id, voter, options, metadata }: {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
            metadata: string;
        }) => import("./gov/v1/tx").MsgVoteWeighted;
    };
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1/tx").MsgDeposit) => {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ proposal_id, depositor, amount }: {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./gov/v1/tx").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./gov/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                min_deposit: {
                    denom: string;
                    amount: string;
                }[];
                max_deposit_period: {
                    seconds: string;
                    nanos: number;
                };
                voting_period: {
                    seconds: string;
                    nanos: number;
                };
                quorum: string;
                threshold: string;
                veto_threshold: string;
                min_initial_deposit_ratio: string;
                burn_vote_quorum: boolean;
                burn_proposal_deposit_prevote: boolean;
                burn_vote_veto: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                min_deposit: {
                    denom: string;
                    amount: string;
                }[];
                max_deposit_period: {
                    seconds: string;
                    nanos: number;
                };
                voting_period: {
                    seconds: string;
                    nanos: number;
                };
                quorum: string;
                threshold: string;
                veto_threshold: string;
                min_initial_deposit_ratio: string;
                burn_vote_quorum: boolean;
                burn_proposal_deposit_prevote: boolean;
                burn_vote_veto: boolean;
            };
        }) => import("./gov/v1/tx").MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: import("./distribution/v1beta1/tx").MsgSetWithdrawAddress) => {
            delegator_address: string;
            withdraw_address: string;
        };
        fromAmino: ({ delegator_address, withdraw_address }: {
            delegator_address: string;
            withdraw_address: string;
        }) => import("./distribution/v1beta1/tx").MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward) => {
            delegator_address: string;
            validator_address: string;
        };
        fromAmino: ({ delegator_address, validator_address }: {
            delegator_address: string;
            validator_address: string;
        }) => import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission) => {
            validator_address: string;
        };
        fromAmino: ({ validator_address }: {
            validator_address: string;
        }) => import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: import("./distribution/v1beta1/tx").MsgFundCommunityPool) => {
            amount: {
                denom: string;
                amount: string;
            }[];
            depositor: string;
        };
        fromAmino: ({ amount, depositor }: {
            amount: {
                denom: string;
                amount: string;
            }[];
            depositor: string;
        }) => import("./distribution/v1beta1/tx").MsgFundCommunityPool;
    };
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./distribution/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                community_tax: string;
                base_proposer_reward: string;
                bonus_proposer_reward: string;
                withdraw_addr_enabled: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                community_tax: string;
                base_proposer_reward: string;
                bonus_proposer_reward: string;
                withdraw_addr_enabled: boolean;
            };
        }) => import("./distribution/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: import("./distribution/v1beta1/tx").MsgCommunityPoolSpend) => {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ authority, recipient, amount }: {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./distribution/v1beta1/tx").MsgCommunityPoolSpend;
    };
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, block, evidence, validator }: import("./consensus/v1/tx").MsgUpdateParams) => {
            authority: string;
            block: {
                max_bytes: string;
                max_gas: string;
            };
            evidence: {
                max_age_num_blocks: string;
                max_age_duration: {
                    seconds: string;
                    nanos: number;
                };
                max_bytes: string;
            };
            validator: {
                pub_key_types: string[];
            };
        };
        fromAmino: ({ authority, block, evidence, validator }: {
            authority: string;
            block: {
                max_bytes: string;
                max_gas: string;
            };
            evidence: {
                max_age_num_blocks: string;
                max_age_duration: {
                    seconds: string;
                    nanos: number;
                };
                max_bytes: string;
            };
            validator: {
                pub_key_types: string[];
            };
        }) => import("./consensus/v1/tx").MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: import("./bank/v1beta1/tx").MsgSend) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ from_address, to_address, amount }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./bank/v1beta1/tx").MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: ({ inputs, outputs }: import("./bank/v1beta1/tx").MsgMultiSend) => {
            inputs: {
                address: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            outputs: {
                address: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        };
        fromAmino: ({ inputs, outputs }: {
            inputs: {
                address: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            outputs: {
                address: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        }) => import("./bank/v1beta1/tx").MsgMultiSend;
    };
    "/cosmos.bank.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./bank/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                send_enabled: {
                    denom: string;
                    enabled: boolean;
                }[];
                default_send_enabled: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                send_enabled: {
                    denom: string;
                    enabled: boolean;
                }[];
                default_send_enabled: boolean;
            };
        }) => import("./bank/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
        aminoType: string;
        toAmino: ({ authority, sendEnabled, useDefaultFor }: import("./bank/v1beta1/tx").MsgSetSendEnabled) => {
            authority: string;
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            use_default_for: string[];
        };
        fromAmino: ({ authority, send_enabled, use_default_for }: {
            authority: string;
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            use_default_for: string[];
        }) => import("./bank/v1beta1/tx").MsgSetSendEnabled;
    };
};
export declare const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmosClientOptions: () => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmosClient: ({ rpcEndpoint, signer }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
}) => Promise<SigningStargateClient>;
