import { AssetList } from '@chain-registry/types';
const testnet_assets: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'junotestnet',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom: 'ujunox',
          exponent: 0
        },
        {
          denom: 'junox',
          exponent: 6
        }
      ],
      base: 'ujunox',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingecko_id: 'juno-network'
    }
  ]
};
export default testnet_assets;
