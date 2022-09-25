import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-3',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  genesis: {
    genesis_url:
      'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-3/genesis.json'
  },
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujunox',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujunox'
      }
    ]
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v7.0.0-beta.2',
    compatible_versions: ['v7.0.0-beta.2'],
    cosmos_sdk_version: '0.45',
    tendermint_version: '0.34',
    cosmwasm_version: '0.27',
    cosmwasm_enabled: true
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: 'ed90921d43ede634043d152d7a87e8881fb85e90',
        address: '65.108.77.106:26709',
        provider: 'EZStaking.io'
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.uni.junomint.com',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://rpc.uni.junonetwork.io',
        provider: 'Juno'
      }
    ],
    rest: [
      {
        address: 'https://lcd.uni.junomint.com',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://api.uni.junonetwork.io',
        provider: 'Juno'
      }
    ],
    grpc: [
      {
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/juno-testnet',
      tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
    }
  ]
};
export default testnet;
