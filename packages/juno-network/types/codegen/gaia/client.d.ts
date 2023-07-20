import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const gaiaAminoConverters: {
    "/gaia.globalfee.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./globalfee/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                minimum_gas_prices: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                minimum_gas_prices: {
                    denom: string;
                    amount: string;
                }[];
            };
        }) => import("./globalfee/v1beta1/tx").MsgUpdateParams;
    };
};
export declare const gaiaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGaiaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGaiaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
