import { Rpc } from "../../../helpers";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/distribution
     * module parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/distribution module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    communityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    communityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
}
