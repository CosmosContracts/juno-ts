import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterStaking, MsgRegisterStakingResponse, MsgUnregisterStaking, MsgUnregisterStakingResponse, MsgRegisterGovernance, MsgRegisterGovernanceResponse, MsgUnregisterGovernance, MsgUnregisterGovernanceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/clock module
   * parameters. The authority is hard-coded to the x/gov module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** RegisterStaking. */
  registerStaking(request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse>;
  /** UnregisterStaking. */
  unregisterStaking(request: MsgUnregisterStaking): Promise<MsgUnregisterStakingResponse>;
  /** RegisterGovernance. */
  registerGovernance(request: MsgRegisterGovernance): Promise<MsgRegisterGovernanceResponse>;
  /** UnregisterGovernance. */
  unregisterGovernance(request: MsgUnregisterGovernance): Promise<MsgUnregisterGovernanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerStaking = this.registerStaking.bind(this);
    this.unregisterStaking = this.unregisterStaking.bind(this);
    this.registerGovernance = this.registerGovernance.bind(this);
    this.unregisterGovernance = this.unregisterGovernance.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  registerStaking(request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse> {
    const data = MsgRegisterStaking.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Msg", "RegisterStaking", data);
    return promise.then(data => MsgRegisterStakingResponse.decode(new BinaryReader(data)));
  }
  unregisterStaking(request: MsgUnregisterStaking): Promise<MsgUnregisterStakingResponse> {
    const data = MsgUnregisterStaking.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UnregisterStaking", data);
    return promise.then(data => MsgUnregisterStakingResponse.decode(new BinaryReader(data)));
  }
  registerGovernance(request: MsgRegisterGovernance): Promise<MsgRegisterGovernanceResponse> {
    const data = MsgRegisterGovernance.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Msg", "RegisterGovernance", data);
    return promise.then(data => MsgRegisterGovernanceResponse.decode(new BinaryReader(data)));
  }
  unregisterGovernance(request: MsgUnregisterGovernance): Promise<MsgUnregisterGovernanceResponse> {
    const data = MsgUnregisterGovernance.encode(request).finish();
    const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UnregisterGovernance", data);
    return promise.then(data => MsgUnregisterGovernanceResponse.decode(new BinaryReader(data)));
  }
}