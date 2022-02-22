import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CyberRooms',
  tokenName: 'CyberRooms',
  tokenSymbol: 'CYBR',
  hiddenMetadataUri: 'ipfs://QmX44keYEipwCaNY2uC8YMonxmPKfRhLrypU3TSJ7UtCoZ/Reveal.json',
  maxSupply: 4444,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.07,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
