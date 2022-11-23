import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.junonetwork.io/',
  pretty_name: 'Juno',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujuno',
        fixed_min_gas_price: 0.0025,
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
    recommended_version: 'v11.0.0',
    compatible_versions: ['v11.0.0'],
    cosmos_sdk_version: '0.45',
    tendermint_version: '0.34',
    cosmwasm_version: '0.28',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
    }
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
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:12656',
        provider: 'Polkachu'
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:12656',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        id: 'ea67180befe4d9ca71142d21ada8ff58cc08f71c',
        address: 'seeds.goldenratiostaking.net:1627',
        provider: 'Golden Ratio Staking'
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
        address: 'https://juno.rpc.interchain.ivaldilabs.xyz',
        provider: 'Ivaldi Labs'
      },
      {
        address: 'https://juno-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.juno.silknodes.io/',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc.juno.interbloc.org',
        provider: 'Interbloc'
      },
      {
        address: 'https://juno.nodejumper.io',
        provider: 'Nodejumper 🚀'
      },
      {
        address: 'https://juno.rpc.stakin.com',
        provider: 'Stakin'
      },
      {
        address: 'https://juno-rpc.icycro.org',
        provider: 'IcyCRO 🧊'
      },
      {
        address: 'https://rpc-juno.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rpc.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
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
        address: 'https://juno.rest.interchain.ivaldilabs.xyz',
        provider: 'Ivaldi Labs'
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.juno.silknodes.io/',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api.juno.interbloc.org',
        provider: 'Interbloc'
      },
      {
        address: 'https://juno.nodejumper.io:1317',
        provider: 'Nodejumper 🚀'
      },
      {
        address: 'https://juno.rest.stakin.com',
        provider: 'Stakin'
      },
      {
        address: 'https://api.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      }
    ],
    grpc: [
      {
        address: '35.243.205.230:9090',
        provider: 'strangelove'
      },
      {
        address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://juno-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno.grpcui.chaintools.host/',
        provider: 'ChainTools'
      },
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      },
      {
        address: 'https://grpc.juno.silknodes.io/',
        provider: 'Silk Nodes'
      },
      {
        address: 'juno.grpc.interchain.ivaldilabs.xyz:443',
        provider: 'Ivaldi Labs'
      },
      {
        address: 'https://juno.nodejumper.io:9090',
        provider: 'Nodejumper 🚀'
      },
      {
        address: 'juno.grpc.stakin.com:443',
        provider: 'Stakin'
      },
      {
        address: 'https://grpc.juno.bh.rocks:443',
        provider: 'BlockHunters 🎯'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZStaking Tools',
      url: 'https://ezstaking.tools/juno',
      tx_page: 'https://ezstaking.tools/juno/txs/${txHash}'
    },
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
