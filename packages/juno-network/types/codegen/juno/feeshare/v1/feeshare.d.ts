import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShare {
    /**
     * contract_address is the bech32 address of a registered contract in string
     * form
     */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same as the contracts admin address.
     */
    deployerAddress: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees.
     */
    withdrawerAddress: string;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
export declare const FeeShare: {
    encode(message: FeeShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeShare;
    fromPartial(object: DeepPartial<FeeShare>): FeeShare;
};
