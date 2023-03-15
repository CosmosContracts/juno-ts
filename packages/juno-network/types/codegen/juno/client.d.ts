import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const junoAminoConverters: {
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: import("./feeshare/v1/tx").MsgRegisterFeeShare) => {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        };
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        }) => import("./feeshare/v1/tx").MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: import("./feeshare/v1/tx").MsgUpdateFeeShare) => {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        };
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        }) => import("./feeshare/v1/tx").MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: import("./feeshare/v1/tx").MsgCancelFeeShare) => {
            contract_address: string;
            deployer_address: string;
        };
        fromAmino: ({ contract_address, deployer_address }: {
            contract_address: string;
            deployer_address: string;
        }) => import("./feeshare/v1/tx").MsgCancelFeeShare;
    };
};
export declare const junoProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningJunoClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningJunoClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
