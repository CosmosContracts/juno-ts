# juno-network

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/CosmosContracts/typescript/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/juno-network"><img height="20" src="https://img.shields.io/github/package-json/v/CosmosContracts/typescript?filename=packages%2Fjuno-network%2Fpackage.json"></a>
</p>

TS library with Cosmos SDK and JunoSwap smart contracts.

```
npm install juno-network
```

### Cosmos SDK clients

```js
import { juno } from 'juno-network';
const main = async () => {
   const client = await juno.ClientFactory.createLCDClient({ restEndpoint: REST_ENDPOINT });

   // now you can query the modules
   const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'juno1addresshere' });
};
```

### JunoSwap contracts

#### clients

```js
import { contracts } from 'juno-network';
const { 
  JunoSwap: {
        JunoSwapClient,
        JunoSwapQueryClient
    }
} = contracts;
```

#### Queries 

```js
const queries = new JunoSwapQueryClient(
  cosmwasmClient,
  contractAddress
);
const amount = await queries.token1ForToken2Price({
    token1Amount
});
```
#### Mutations

```js
const client = new JunoSwapClient(
  signingClient,
  sender,
  contractAddress
);

await client.addLiquidity({
    maxToken2,
    minLiquidity,
    token1Amount,
    expiration
});
```

### CosmWasm Messages

```js
import { cosmwasm } from "juno-network";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages

```js
import { ibc } from 'juno-network';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from 'juno-network';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```
## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.
### Initializing the Stargate Client

Use `getSigningCosmosClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningCosmosClient } from 'juno-network';

const stargateClient = await getSigningCosmosClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
## Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Cosmos Kit

We recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for creating signers that work with Keplr and other wallets.

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'juno');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'ujuno',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'ujuno',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters
} from 'juno-network';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/juno'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
