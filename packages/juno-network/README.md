# juno-network

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml/badge.svg" />
  </a> -->
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

```js
import { contracts } from 'juno-network';
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

### CosmWasm Messages

```js
import { cosmwasm } from "osmojs";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

## Credits

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
