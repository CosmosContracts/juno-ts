import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterFeePayContract, MsgRegisterFeePayContractResponse, MsgUnregisterFeePayContract, MsgUnregisterFeePayContractResponse, MsgFundFeePayContract, MsgFundFeePayContractResponse, MsgUpdateFeePayContractWalletLimit, MsgUpdateFeePayContractWalletLimitResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /** RegisterFeeShare registers a new contract for receiving transaction fees */
  registerFeePayContract(request: MsgRegisterFeePayContract): Promise<MsgRegisterFeePayContractResponse>;
  /** UnregisterFeeShare unregisters a contract for receiving transaction fees */
  unregisterFeePayContract(request: MsgUnregisterFeePayContract): Promise<MsgUnregisterFeePayContractResponse>;
  /** Fund a fee pay contract */
  fundFeePayContract(request: MsgFundFeePayContract): Promise<MsgFundFeePayContractResponse>;
  /** Update a fee pay contract wallet limit */
  updateFeePayContractWalletLimit(request: MsgUpdateFeePayContractWalletLimit): Promise<MsgUpdateFeePayContractWalletLimitResponse>;
  /** Update the params of the module through gov v1 type. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerFeePayContract = this.registerFeePayContract.bind(this);
    this.unregisterFeePayContract = this.unregisterFeePayContract.bind(this);
    this.fundFeePayContract = this.fundFeePayContract.bind(this);
    this.updateFeePayContractWalletLimit = this.updateFeePayContractWalletLimit.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerFeePayContract(request: MsgRegisterFeePayContract): Promise<MsgRegisterFeePayContractResponse> {
    const data = MsgRegisterFeePayContract.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Msg", "RegisterFeePayContract", data);
    return promise.then(data => MsgRegisterFeePayContractResponse.decode(new BinaryReader(data)));
  }
  unregisterFeePayContract(request: MsgUnregisterFeePayContract): Promise<MsgUnregisterFeePayContractResponse> {
    const data = MsgUnregisterFeePayContract.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Msg", "UnregisterFeePayContract", data);
    return promise.then(data => MsgUnregisterFeePayContractResponse.decode(new BinaryReader(data)));
  }
  fundFeePayContract(request: MsgFundFeePayContract): Promise<MsgFundFeePayContractResponse> {
    const data = MsgFundFeePayContract.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Msg", "FundFeePayContract", data);
    return promise.then(data => MsgFundFeePayContractResponse.decode(new BinaryReader(data)));
  }
  updateFeePayContractWalletLimit(request: MsgUpdateFeePayContractWalletLimit): Promise<MsgUpdateFeePayContractWalletLimitResponse> {
    const data = MsgUpdateFeePayContractWalletLimit.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Msg", "UpdateFeePayContractWalletLimit", data);
    return promise.then(data => MsgUpdateFeePayContractWalletLimitResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("juno.feepay.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}