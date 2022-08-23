import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Juno',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  genesis: {
    genesis_url:
      'https://raw.githubusercontent.com/CosmosContracts/mainnet/main/juno-1/genesis.json'
  },
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujuno',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujuno'
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
    cosmwasm_enabled: true
  },
  peers: {
    seeds: [
      {
        id: '2484353dab0b2c1275765b8ffa2c50b3b36158ca',
        address: 'seed-node.junochain.com:26656'
      },
      {
        id: '90b09362d9ce3845096c4938eea0dba682b0ad2c',
        address: 'juno-seed-new.blockpane.com:26656'
      },
      {
        id: '22ee6e65e5e79cd0b970dd11e52761de8d1d6dfd',
        address: 'seeds.pupmos.network:2001',
        provider: 'PUPMØS'
      }
    ],
    persistent_peers: [
      {
        id: 'b1f46f1a1955fc773d3b73180179b0e0a07adce1',
        address: '162.55.244.250:39656'
      },
      {
        id: '7f593757c0cde8972ce929381d8ac8e446837811',
        address: '178.18.255.244:26656'
      },
      {
        id: '7b22dfc605989d66b89d2dfe118d799ea5abc2f0',
        address: '167.99.210.65:26656'
      },
      {
        id: '4bd9cac019775047d27f9b9cea66b25270ab497d',
        address: '137.184.7.164:26656'
      },
      {
        id: 'bd822a8057902fbc80fd9135e335f0dfefa32342',
        address: '65.21.202.159:38656'
      },
      {
        id: '15827c6c13f919e4d9c11bcca23dff4e3e79b1b8',
        address: '51.38.52.210:38656'
      },
      {
        id: 'e665df28999b2b7b40cff2fe4030682c380bf294',
        address: '188.40.106.109:38656'
      },
      {
        id: '92804ce50c85ff4c7cf149d347dd880fc3735bf4',
        address: '34.94.231.154:26656'
      },
      {
        id: '795ed214b8354e8468f46d1bbbf6e128a88fe3bd',
        address: '34.127.19.222:26656'
      },
      {
        id: 'ea9c1ac0e91639b2c7957d9604655e2263abe4e1',
        address: '185.181.103.136:26656'
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.whispernode.com',
        provider: ' WhisperNode 🤐'
      },
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://rpc-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc.junomint.com',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://rpc-juno-ia.notional.ventures/',
        provider: 'Notional'
      }
    ],
    rest: [
      {
        address: 'https://lcd-juno.whispernode.com',
        provider: ' WhisperNode 🤐'
      },
      {
        address: 'https://lcd-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://api.juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://lcd.junomint.com',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://api-juno-ia.notional.ventures/',
        provider: 'Notional'
      }
    ],
    grpc: [
      {
        address: '35.243.205.230:9090',
        provider: 'strangelove'
      },
      {
        address: 'grpc-juno-ia.notional.ventures:443',
        provider: 'Notional'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      tx_page: 'https://ping.pub/juno/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://juno.explorers.guru',
      tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/juno',
      tx_page: 'https://www.mintscan.io/juno/txs/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      tx_page: 'https://atomscan.com/juno/transactions/${txHash}'
    }
  ]
};
export default chain;
