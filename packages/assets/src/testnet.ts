import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-6',
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
    recommended_version: 'v12.0.0-beta.1',
    compatible_versions: ['v12.0.0-beta.1'],
    cosmos_sdk_version: '0.45',
    tendermint_version: '0.34',
    cosmwasm_version: '0.29',
    cosmwasm_enabled: true,
    ibc_go_version: '3.3.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-6/genesis.json'
    }
  },
  peers: {
    seeds: [
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'testnet-seed.rhinostake.com:12656',
        provider: 'RHINO'
      }
    ],
    persistent_peers: [
      {
        id: 'c54bf418fb542634495f57a1e36c9bd057d55e1b',
        address: '5.161.80.115:26656',
        provider: 'Reecepbcups'
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
      },
      {
        address: 'https://uni-rpc.reece.sh',
        provider: 'Reecepbcups'
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
      },
      {
        address: 'https://uni-api.reece.sh',
        provider: 'Reecepbcups'
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
      tx_page: 'https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}',
      account_page:
        'https://testnet.ezstaking.tools/juno-testnet/account/${accountAddress}'
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
