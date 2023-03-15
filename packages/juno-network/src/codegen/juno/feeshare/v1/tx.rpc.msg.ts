import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterFeeShare, MsgRegisterFeeShareResponse, MsgUpdateFeeShare, MsgUpdateFeeShareResponse, MsgCancelFeeShare, MsgCancelFeeShareResponse } from "./tx";
/** Msg defines the fees Msg service. */

export interface Msg {
  /** RegisterFeeShare registers a new contract for receiving transaction fees */
  registerFeeShare(request: MsgRegisterFeeShare): Promise<MsgRegisterFeeShareResponse>;
  /** UpdateFeeShare updates the withdrawer address of a FeeShare */

  updateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse>;
  /**
   * CancelFeeShare cancels a contract's fee registration and further receival
   * of transaction fees
   */

  cancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerFeeShare = this.registerFeeShare.bind(this);
    this.updateFeeShare = this.updateFeeShare.bind(this);
    this.cancelFeeShare = this.cancelFeeShare.bind(this);
  }

  registerFeeShare(request: MsgRegisterFeeShare): Promise<MsgRegisterFeeShareResponse> {
    const data = MsgRegisterFeeShare.encode(request).finish();
    const promise = this.rpc.request("juno.feeshare.v1.Msg", "RegisterFeeShare", data);
    return promise.then(data => MsgRegisterFeeShareResponse.decode(new _m0.Reader(data)));
  }

  updateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse> {
    const data = MsgUpdateFeeShare.encode(request).finish();
    const promise = this.rpc.request("juno.feeshare.v1.Msg", "UpdateFeeShare", data);
    return promise.then(data => MsgUpdateFeeShareResponse.decode(new _m0.Reader(data)));
  }

  cancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse> {
    const data = MsgCancelFeeShare.encode(request).finish();
    const promise = this.rpc.request("juno.feeshare.v1.Msg", "CancelFeeShare", data);
    return promise.then(data => MsgCancelFeeShareResponse.decode(new _m0.Reader(data)));
  }

}