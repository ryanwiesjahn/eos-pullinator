import chain from '../src/Common/Services/__mocks__/chain';
import block1 from '../src/Common/Services/__mocks__/block1';
import block2 from '../src/Common/Services/__mocks__/block2';
import block3 from '../src/Common/Services/__mocks__/block3';

const mockEOS = jest.fn(() => {
    return {
        getInfo: jest.fn(empty => {
            return chain;
        }),
        getBlock: jest.fn(async (blockNumber) => {
            switch(blockNumber) {
                case 1:
                    return await Promise.resolve(block1);
                case 2:
                    return await Promise.resolve(block2);
                case 3:
                    return await Promise.resolve(block3);
                default:
                    return null;
            }
        })
    };
});

const mockEosAPI = jest.fn(config => {
    if(config.chainId === 'CHAIN_ID_1') {
        return new mockEOS();
    }

    return null;
});

export default mockEosAPI;