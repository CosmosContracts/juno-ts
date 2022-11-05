import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-5',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
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
    recommended_version: 'v9.0.0',
    compatible_versions: ['v9.0.0'],
    cosmos_sdk_version: '0.45',
    tendermint_version: '0.34',
    cosmwasm_version: '0.27',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json'
    }
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
        address: 'https://rpc.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://api.uni.junonetwork.io',
        provider: 'Juno'
      },
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
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
      kind: 'EZStaking Tools',
      url: 'https://testnet.ezstaking.tools/juno-testnet',
      tx_page: 'https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}'
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/juno-testnet',
      tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.juno.explorers.guru/',
      tx_page: 'https://testnet.juno.explorers.guru/transaction/${txHash}'
    }
  ]
};
export default testnet;
