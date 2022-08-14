import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const contractsDir = resolve(join(__dirname, '/../contracts'));
const contracts = [
  {
    name: 'JunoSwap',
    dir: join(contractsDir, 'wasmswap')
  }
];

codegen({
  contracts,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    types: {
      enabled: true
    },
    client: {
      enabled: true
    },
    messageComposer: {
      enabled: true
    }
  }
}).then(() => {
  console.log('✨ all done!');
});
