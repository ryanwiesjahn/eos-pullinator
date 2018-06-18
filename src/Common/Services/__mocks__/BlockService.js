import chain from '../../../../__mocks__/chain';
import block1 from '../../../../__mocks__/block1';
import block2 from '../../../../__mocks__/block2';
import block3 from '../../../../__mocks__/block3';

const BlockService = jest.fn(() => {
    return {
        getChainInfo: jest.fn(async () => {
            return Promise.resolve(chain);
        }),

        getBlock: jest.fn(async (blockNumber) => {
            switch(blockNumber) {
                case 1:
                    return Promise.resolve(block1);
                case 2:
                    return Promise.resolve(block2);
                case 3:
                    return Promise.resolve(block3);
                default:
                    return null;
            }
        }),

        getRecentBlocks: jest.fn(async (amount) => {
            return Promise.resolve([block3, block2]);
        })
    };
});

export default BlockService;