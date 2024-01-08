import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as junoClockV1TxRegistry from "./clock/v1/tx.registry";
import * as junoCwhooksV1TxRegistry from "./cwhooks/v1/tx.registry";
import * as junoDripV1TxRegistry from "./drip/v1/tx.registry";
import * as junoFeepayV1TxRegistry from "./feepay/v1/tx.registry";
import * as junoFeeshareV1TxRegistry from "./feeshare/v1/tx.registry";
import * as junoMintTxRegistry from "./mint/tx.registry";
import * as junoClockV1TxAmino from "./clock/v1/tx.amino";
import * as junoCwhooksV1TxAmino from "./cwhooks/v1/tx.amino";
import * as junoDripV1TxAmino from "./drip/v1/tx.amino";
import * as junoFeepayV1TxAmino from "./feepay/v1/tx.amino";
import * as junoFeeshareV1TxAmino from "./feeshare/v1/tx.amino";
import * as junoMintTxAmino from "./mint/tx.amino";
export const junoAminoConverters = {
  ...junoClockV1TxAmino.AminoConverter,
  ...junoCwhooksV1TxAmino.AminoConverter,
  ...junoDripV1TxAmino.AminoConverter,
  ...junoFeepayV1TxAmino.AminoConverter,
  ...junoFeeshareV1TxAmino.AminoConverter,
  ...junoMintTxAmino.AminoConverter
};
export const junoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...junoClockV1TxRegistry.registry, ...junoCwhooksV1TxRegistry.registry, ...junoDripV1TxRegistry.registry, ...junoFeepayV1TxRegistry.registry, ...junoFeeshareV1TxRegistry.registry, ...junoMintTxRegistry.registry];
export const getSigningJunoClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...junoProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...junoAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningJunoClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningJunoClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};