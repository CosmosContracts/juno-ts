import { Params as Params1 } from "../../controller/v1/controller";
import { ParamsSDKType as Params1SDKType } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { ParamsSDKType as Params2SDKType } from "../../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../../helpers";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState?: ControllerGenesisState;
    hostGenesisState?: HostGenesisState;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateSDKType {
    controller_genesis_state?: ControllerGenesisStateSDKType;
    host_genesis_state?: HostGenesisStateSDKType;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params1;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateSDKType {
    active_channels: ActiveChannelSDKType[];
    interchain_accounts: RegisteredInterchainAccountSDKType[];
    ports: string[];
    params?: Params1SDKType;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params2;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateSDKType {
    active_channels: ActiveChannelSDKType[];
    interchain_accounts: RegisteredInterchainAccountSDKType[];
    port: string;
    params?: Params2SDKType;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
    connectionId: string;
    portId: string;
    channelId: string;
    isMiddlewareEnabled: boolean;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelSDKType {
    connection_id: string;
    port_id: string;
    channel_id: string;
    is_middleware_enabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connectionId: string;
    portId: string;
    accountAddress: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountSDKType {
    connection_id: string;
    port_id: string;
    account_address: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ControllerGenesisState: {
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState;
    fromPartial(object: DeepPartial<ControllerGenesisState>): ControllerGenesisState;
};
export declare const HostGenesisState: {
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState;
    fromPartial(object: DeepPartial<HostGenesisState>): HostGenesisState;
};
export declare const ActiveChannel: {
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel;
    fromPartial(object: DeepPartial<ActiveChannel>): ActiveChannel;
};
export declare const RegisteredInterchainAccount: {
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount;
    fromPartial(object: DeepPartial<RegisteredInterchainAccount>): RegisteredInterchainAccount;
};
