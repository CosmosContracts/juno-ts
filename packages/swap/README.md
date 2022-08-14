# @juno-network/swap

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml/badge.svg" />
  </a> -->
   <a href="https://github.com/CosmosContracts/typescript/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@juno-network/swap"><img height="20" src="https://img.shields.io/github/package-json/v/CosmosContracts/typescript?filename=packages%2Fswap%2Fpackage.json"></a>
</p>

JunoSwap smart contract bindings

```
npm install @juno-network/swap
```

### JunoSwap contracts

#### clients

```js
import { contracts } from '@juno-network/swap';
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

