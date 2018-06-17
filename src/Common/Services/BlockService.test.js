import BlockService from './BlockService';
import EosAPI from 'eosjs-api';
import chain from './__mocks__/chain';
import block1 from './__mocks__/block1';
import block2 from './__mocks__/block2';
import block3 from './__mocks__/block3';

const CHAIN_ID = 'CHAIN_ID_1';
let blockService = null;

describe('BlockService', () => {
    beforeEach(() => {
        EosAPI.mockClear();
    
        blockService = new BlockService({
            chainId: CHAIN_ID
        });
    });

    it('getChainInfo should return chain info', async () => {
        expect.assertions(1);
        await expect(blockService.getChainInfo()).resolves.toMatchObject(chain);
    });

    it('getBlock should return block info', async () => {
        expect.assertions(1);
        await expect(blockService.getBlock(2)).resolves.toMatchObject(block2);
    });

    it('getRecentBlocks should return the specified amount of most recent blocks', async () => {
        expect.assertions(1);
        await expect(blockService.getRecentBlocks(3)).resolves.toMatchObject([
            block3,
            block2,
            block1
        ]);
    });

    it('getRecentBlocks should not allow an amount < 1', async () => {
        expect.assertions(1);
        try {
            await blockService.getRecentBlocks(0);
        } catch(e) {
            expect(e).toBeInstanceOf(RangeError);
        }
    });

    it('getRecentBlocks should not allow an amount > 100', async () => {
        expect.assertions(1);
        try {
            await blockService.getRecentBlocks(101);
        } catch(e) {
            expect(e).toBeInstanceOf(RangeError);
        }
    });

});