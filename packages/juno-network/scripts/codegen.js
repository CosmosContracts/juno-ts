import { join, resolve } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const contractsDir = resolve(join(__dirname, '/../contracts'));
const contracts = [
  {
    name: 'JunoSwap',
    dir: join(contractsDir, 'wasmswap')
  }
];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    prototypes: {
      excluded: {
        packages: [
          'ics23',
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.auth.v1beta1',
          'cosmos.authz.v1beta1',
          'cosmos.base.abci.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.nft.v1beta1',
          'cosmos.orm.v1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.upgrade.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.connection.v1',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      },
    },
    cosmwasm: {
      contracts,
      outPath: join(__dirname, '../src/codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        },
        reactQuery: {
          enabled: true,
          optionalClient: true,
          version: 'v4',
          mutations: true
        },
        recoil: {
          enabled: false
        },
        messageComposer: {
          enabled: false
        }
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
}).then(() => {
  console.log('✨ all done!');
});
