import BlockService from './BlockService';
import EosAPI from 'eosjs-api';
import chain from './__mocks__/chain';
import block1 from './__mocks__/block1';
import block2 from './__mocks__/block2';
import block3 from './__mocks__/block3';

let blockService = null;

beforeEach(() => {
    EosAPI.mockClear();

    blockService = new BlockService({
        chainId: 'CHAIN_ID_1'
    });
});

it('Should get chain info', async () => {
    expect.assertions(1);

    let chainInfo = await blockService.getChainInfo();

    expect(chainInfo).toMatchObject(chain);
});

it('Should get block info', async () => {
    expect.assertions(1);

    let block = await blockService.getBlock(2);

    expect(block).toMatchObject(block2);
});

it('Should get recent blocks', async () => {
    expect.assertions(1);

    let blocks = await blockService.getRecentBlocks(3);

    expect(blocks).toMatchObject([
        block3,
        block2,
        block1
    ]);
});

// TODO: Test trying to get amount more than amount of blocks available
// TODO: Test trying to get too many blocks