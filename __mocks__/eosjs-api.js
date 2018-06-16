import chain from '../src/Common/Services/__mocks__/chain';
import block1 from '../src/Common/Services/__mocks__/block1';
import block2 from '../src/Common/Services/__mocks__/block2';
import block3 from '../src/Common/Services/__mocks__/block3';



const eos = jest.fn(() => {
    return {
        getInfo: jest.fn(empty => {
            return chain;
        }),
        getBlock: jest.fn(blockNumber => {
            return new Promise.resolve(() => {
                switch(blockNumber) {
                    case 1:
                        return block1;
                    case 2:
                        return block2;
                    case 3:
                        return block3;
                    default:
                        return null;
                }
            });
        })
    };
});

const EosAPI = jest.fn(config => {
    if(config.chainId === 'CHAIN_ID_1') {
        return eos;
    }

    return null;
});

export default EosAPI;