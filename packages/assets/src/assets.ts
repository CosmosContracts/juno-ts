import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'juno',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom: 'ujuno',
          exponent: 0
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ujuno',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network'
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
          exponent: 0
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingecko_id: 'neta'
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [
        {
          denom:
            'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
          exponent: 0
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      base: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      coingecko_id: 'marble'
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address:
        'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [
        {
          denom:
            'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
          exponent: 0
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      base: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      coingecko_id: 'hope-galaxy'
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address:
        'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [
        {
          denom:
            'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
          exponent: 0
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      base: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingecko_id: 'racoon'
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [
        {
          denom:
            'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
          exponent: 0
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      base: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      }
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address:
        'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [
        {
          denom:
            'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
          exponent: 0,
          aliases: ['dhk']
        }
      ],
      base: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      }
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address:
        'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [
        {
          denom:
            'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
          exponent: 0
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      base: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png'
      },
      coingecko_id: 'junoswap-raw-dao'
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address:
        'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [
        {
          denom:
            'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
          exponent: 0
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      base: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      }
    },
    {
      description:
        'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.',
      type_asset: 'cw20',
      address:
        'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [
        {
          denom:
            'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
          exponent: 0
        },
        {
          denom: 'hns',
          exponent: 6
        }
      ],
      base: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      }
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address:
        'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [
        {
          denom:
            'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
          exponent: 0
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      base: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      }
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address:
        'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [
        {
          denom:
            'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
          exponent: 0
        },
        {
          denom: 'dla',
          exponent: 6
        }
      ],
      base: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      }
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address:
        'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [
        {
          denom:
            'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
          exponent: 0
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      base: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      }
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address:
        'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [
        {
          denom:
            'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
          exponent: 0
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      base: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      }
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [
        {
          denom:
            'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
          exponent: 0
        },
        {
          denom: 'hole',
          exponent: 6
        }
      ],
      base: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      }
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [
        {
          denom:
            'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
          exponent: 0
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      base: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      }
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [
        {
          denom:
            'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
          exponent: 0
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      base: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      }
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address:
        'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [
        {
          denom:
            'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
          exponent: 0
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      base: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      }
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address:
        'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [
        {
          denom:
            'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
          exponent: 0
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      base: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      }
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [
        {
          denom:
            'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
          exponent: 0
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      base: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      }
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [
        {
          denom:
            'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
          exponent: 0
        },
        {
          denom: 'loop',
          exponent: 6
        }
      ],
      base: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      coingecko_id: 'loop'
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['uneta']
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png'
      },
      coingecko_id: 'neta'
    }
  ]
};
export default assets;
