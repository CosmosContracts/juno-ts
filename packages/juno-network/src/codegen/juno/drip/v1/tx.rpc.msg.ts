import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgDistributeTokens, MsgDistributeTokensResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /** DistributeTokens distribute the sent tokens to all stakers in the next block */
  distributeTokens(request: MsgDistributeTokens): Promise<MsgDistributeTokensResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.distributeTokens = this.distributeTokens.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  distributeTokens(request: MsgDistributeTokens): Promise<MsgDistributeTokensResponse> {
    const data = MsgDistributeTokens.encode(request).finish();
    const promise = this.rpc.request("juno.drip.v1.Msg", "DistributeTokens", data);
    return promise.then(data => MsgDistributeTokensResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("juno.drip.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}