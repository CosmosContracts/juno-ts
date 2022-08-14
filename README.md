# juno-network

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/CosmosContracts/typescript/actions/workflows/run-tests.yml/badge.svg" />
  </a> -->
   <a href="https://github.com/CosmosContracts/typescript/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Typescript libraries for the Juno ecosystem.

## Packages

#### [juno-network](packages/juno-network/README.md)

TS library with Cosmos SDK and JunoSwap smart contracts.

#### [@juno-network/swap](packages/swap/README.md)

TS library with JunoSwap smart contracts.

#### [@juno-network/assets](packages/assets/README.md)

Chain Registry info for Juno, including asset lists.

## Developing

Checkout the repository and bootstrap the yarn workspace:

```sh
# Clone the repo.
git clone https://github.com/CosmosContracts/typescript
yarn
yarn bootstrap
```

### Building

```sh
yarn build
```
### Publishing

```
lerna publish
# lerna publish minor
# lerna publish major
```
## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator](https://www.mintscan.io/juno/validators/junovaloper1pr5qgj4jg47lvsnejtfvk78090shvuctgdwdm5)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry